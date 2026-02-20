import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate('/language', { replace: true });
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#161616]">
      <div className="relative mx-auto h-dvh w-full max-w-[384px]">
        <img
          src="/assets/images/splash_logo.svg"
          alt="Maqsaddosh Logo"
          className="absolute left-1/2 top-1/2 h-[60px] w-[108px] -translate-x-1/2 -translate-y-1/2"
          draggable={false}
        />
        <p className="absolute bottom-[34px] left-1/2 -translate-x-1/2 text-center font-sans text-[12px] font-normal leading-[18px] text-white/40">
          Версия 001
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
