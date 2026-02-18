import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../intro/presentation/pages/language_selection_screen.dart';




class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    // Set status bar to transparent to match design
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
    ));

    // Navigate to Language Selection after 3 seconds
    Future.delayed(const Duration(seconds: 3), () {
      if (mounted) {
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(builder: (_) => const LanguageSelectionScreen()),
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: const SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
        statusBarIconBrightness: Brightness.light, // For white text/icons
      ),
      child: Scaffold(
        backgroundColor: const Color(0xFF161616), // Background color from Figma
        body: Stack(
          children: [
            // Centered Logo/Mask Group
            Center(
              child: SvgPicture.asset(
                'assets/images/splash_logo.svg',
                // Use width/height from design to ensure scaling
                width: 108, 
                height: 60,
              ),
            ),
            
            // Version Text at Bottom
            Align(
              alignment: Alignment.bottomCenter,
              child: Padding(
                padding: const EdgeInsets.only(bottom: 34.0), // Adjust bottom padding as needed
                child: Opacity(
                  opacity: 0.4,
                  child: Text(
                    'Версия 001',
                    style: const TextStyle(
                      fontFamily: 'SF Pro Display', // Ensure font is available or use default
                      fontWeight: FontWeight.w400,
                      fontSize: 12,
                      height: 1.5, // Line height 1.5em
                      color: Colors.white,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
