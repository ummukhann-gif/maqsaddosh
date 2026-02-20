import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

enum AppLanguage { uzbek, russian, english }

class CinematicIntroScreen extends StatefulWidget {
  final AppLanguage language;

  const CinematicIntroScreen({super.key, required this.language});

  @override
  State<CinematicIntroScreen> createState() => _CinematicIntroScreenState();
}

class _CinematicIntroScreenState extends State<CinematicIntroScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeAnimation;
  late Animation<Offset> _slideAnimation;

  @override
  void initState() {
    super.initState();
    // System UI
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
    ));

    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 3), // Smooth 3s cinematic appearance
    );

    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeIn),
    );

    _slideAnimation = Tween<Offset>(
      begin: const Offset(0, 0.1), // Slight slide up
      end: Offset.zero,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeOutCubic));

    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  String get _title {
    switch (widget.language) {
      case AppLanguage.uzbek:
        return "Loyiha haqida:";
      case AppLanguage.russian:
        return "О проекте:";
      case AppLanguage.english:
        return "About the Project:";
    }
  }

  String get _flag {
    switch (widget.language) {
      case AppLanguage.uzbek:
        return "🇺🇿 Uzbek";
      case AppLanguage.russian:
        return "🇷🇺 Russian";
      case AppLanguage.english:
        return "🇬🇧 English";
    }
  }

  String get _content {
    switch (widget.language) {
      case AppLanguage.uzbek:
        return """
Maqsaddosh — maqsadlari bir xil bo‘lgan insonlarni bog‘lovchi platforma.

Ta’lim, sport, biznes, kitobxonlik, sayohat, sog‘lom hayot, universitetlar va boshqa 20+ maqsadlar bo‘yicha qidiruv mavjud.

Siz bilan bir xil fikrlaydigan, bir xil maqsad sari intiladigan va sizni chinakam tushunadigan maqsaddosh — samaradorlikni 3 barobargacha oshirishi isbotlangan.

Yangilanish: Maqsaddosh endi faqat maqsadlar emas, hozirda maqsaddosh orqali sizga kerakli har qanday insonni topa olish imkoniyati ustida ishlayapmiz.

Sizga mos do‘stlar, ustoz, sartarosh, usta, shifokor, biznes hamkor, sayohatga sherik, musofir — barchasini bir deganda toping.
""";
      case AppLanguage.russian:
        return """
Maqsaddosh — это платформа, объединяющая людей с одинаковыми целями.

Доступен поиск по более чем 20 направлениям: образование, спорт, бизнес, чтение, путешествия, здоровый образ жизни, университеты и другие.

Партнёр по цели, который мыслит так же, стремится к тем же результатам и по-настоящему вас понимает, — доказано повышает эффективность до 3 раз.

Обновление: Maqsaddosh теперь — это не только про цели. Мы работаем над возможностью находить через платформу любого нужного вам человека.

Найдите подходящих друзей, наставника, парикмахера, мастера, врача, бизнес-партнёра, попутчика или соотечественника — всё в одном месте.
""";
      case AppLanguage.english:
        return """
Maqsaddosh is a platform that connects people who share the same goals.

You can search across 20+ categories, including education, sports, business, reading, travel, healthy lifestyle, universities, and more.

It has been proven that having a goal partner who thinks like you, strives toward the same objectives, and truly understands you can increase productivity up to 3 times.

Update: Maqsaddosh is no longer only about goals. We are working on enabling users to find any person they need through the platform.

Find friends, mentors, barbers, craftsmen, doctors, business partners, travel companions, or fellow travelers — all in one place.
""";
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF161616),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 20),
          child: FadeTransition(
            opacity: _fadeAnimation,
            child: SlideTransition(
              position: _slideAnimation,
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 20),
                    // Language Flag Header
                    Text(
                      _flag,
                      style: const TextStyle(
                        fontFamily: 'SF Pro Display',
                        fontSize: 16,
                        color: Colors.white54,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    const SizedBox(height: 10),
                    // Title
                    Text(
                      _title,
                      style: const TextStyle(
                        fontFamily: 'SF Pro Display',
                        fontSize: 32,
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        height: 1.2,
                      ),
                    ),
                    const SizedBox(height: 24),
                    // Body Text
                    Text(
                      _content,
                      style: const TextStyle(
                        fontFamily: 'SF Pro Display',
                        fontSize: 18,
                        color: Colors.white70,
                        height: 1.6, // Readable line height for mapping/cinematic feel
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                    const SizedBox(height: 40),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
