import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Navigate to Language Selection after 3 seconds
        const timer = setTimeout(() => {
            navigate('/language');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-[#161616] relative overflow-hidden">
            {/* Centered Logo */}
            <div className="flex-grow flex items-center justify-center">
                <img
                    src="/assets/images/splash_logo.svg"
                    alt="Maqsaddosh Logo"
                    className="w-[108px] h-[60px]"
                />
            </div>

            {/* Version Text at Bottom */}
            <div className="pb-8">
                <p className="font-sans font-normal text-xs leading-6 text-white/40 text-center">
                    Версия 001
                </p>
            </div>
        </div>
    );
};

export default SplashScreen;
