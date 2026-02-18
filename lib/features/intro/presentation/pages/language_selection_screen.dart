import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LanguageSelectionScreen extends StatefulWidget {
  const LanguageSelectionScreen({super.key});

  @override
  State<LanguageSelectionScreen> createState() => _LanguageSelectionScreenState();
}

class _LanguageSelectionScreenState extends State<LanguageSelectionScreen> {
  // 0: O'zbekcha, 1: English (Default/Highlighted in Figma), 2: Русский
  int _selectedIndex = 1; 

  @override
  Widget build(BuildContext context) {
    // Screen dimensions (Figma: 384x816)
    // We will use responsive layout but stick to the relative spacing
    
    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: const SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
        statusBarIconBrightness: Brightness.light, 
      ),
      child: Scaffold(
        backgroundColor: const Color(0xFF161616),
        body: Stack(
          children: [
            // Mask Group (Decorative) - Absolute position based on Figma
            // x: 158, y: 113
            Positioned(
              top: 113,
              left: 158,
              child: SvgPicture.asset(
                'assets/images/mask_group_2.svg',
                width: 68,
                height: 37.78,
              ),
            ),

            // Main Content
            SizedBox(
              width: double.infinity,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const SizedBox(height: 194), // Top spacing to Image
                  
                  // Central Illustration
                  Image.asset(
                    'assets/images/language_illustration.webp',
                    width: 184,
                    height: 184,
                    fit: BoxFit.contain,
                  ),

                  const SizedBox(height: 23), // Spacing to Text

                  // Title Text
                  const Text(
                    'Выберите язык интерфейса',
                    style: TextStyle(
                      fontFamily: 'SF Pro Display',
                      fontWeight: FontWeight.w400,
                      fontSize: 15,
                      height: 1.2, // 18px / 15px
                      color: Colors.white,
                    ),
                    textAlign: TextAlign.center,
                  ),

                  const SizedBox(height: 35), // Spacing to Buttons (454 - 419)

                  // Language Buttons
                  _LanguageButton(
                    text: "O'zbekcha",
                    isSelected: _selectedIndex == 0,
                    onTap: () => setState(() => _selectedIndex = 0),
                  ),
                  const SizedBox(height: 5), // Gap 5px
                  _LanguageButton(
                    text: "English",
                    isSelected: _selectedIndex == 1,
                    onTap: () => setState(() => _selectedIndex = 1),
                  ),
                  const SizedBox(height: 5), // Gap 5px
                  _LanguageButton(
                    text: "Русский",
                    isSelected: _selectedIndex == 2,
                    onTap: () => setState(() => _selectedIndex = 2),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _LanguageButton extends StatelessWidget {
  final String text;
  final bool isSelected;
  final VoidCallback onTap;

  const _LanguageButton({
    required this.text,
    required this.isSelected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 232,
        height: 70,
        decoration: BoxDecoration(
          color: isSelected 
              ? const Color.fromRGBO(255, 255, 255, 0.2) // Highlighted
              : const Color.fromRGBO(255, 255, 255, 0.05), // Default
          borderRadius: BorderRadius.circular(18),
        ),
        alignment: Alignment.center,
        child: Text(
          text,
          style: const TextStyle(
            fontFamily: 'SF Pro Display',
            fontWeight: FontWeight.w500,
            fontSize: 20,
            height: 1.2,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
