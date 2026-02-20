import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-dvh w-full overflow-hidden bg-[#161616]">
            <div className="relative mx-auto h-dvh w-full max-w-[384px]">
                {/* Logo */}
                <img
                    src="/assets/images/splash_logo.svg"
                    alt="Maqsaddosh Logo"
                    className="absolute left-[138px] top-[112px] h-[60px] w-[108px]"
                    draggable={false}
                />

                {/* Avatars */}
                <img
                    src="/assets/images/login_avatars.svg"
                    alt="Active users"
                    className="absolute left-[59px] top-[238px] h-[50px] w-[266px]"
                    draggable={false}
                />

                {/* Title */}
                <h1 className="absolute left-[97px] top-[309px] w-[190px] text-center font-sans text-[32px] font-bold leading-[38px] text-white">
                    Maqsaddosh
                </h1>

                {/* Description */}
                <p className="absolute left-[52px] top-[354px] w-[280px] text-center font-sans text-[13px] font-medium leading-[15px] text-white/60">
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                </p>

                {/* Login Prompt Label */}
                <p className="absolute left-[99px] top-[432px] w-[187px] text-center font-sans text-[15px] font-semibold leading-[18px] text-white whitespace-nowrap">
                    Choose one of them & Login
                </p>

                {/* Telegram Login Button */}
                <button
                    type="button"
                    onClick={() => {
                        // Future: Telegram authentication logic here
                        // navigate('/dashboard');
                    }}
                    className="absolute left-[69px] top-[469px] flex h-[59px] w-[247px] items-center justify-center rounded-[18px] bg-[#239CD7] font-sans text-[15px] font-medium text-white transition-opacity active:opacity-80 outline-none gap-2"
                >
                    <img
                        src="/assets/images/telegram_logo.png"
                        alt="Telegram"
                        className="h-[49px] w-[49px] absolute left-[19px] top-[5px]"
                        draggable={false}
                    />
                    <span className="ml-10">Telegram orqali kirish</span>
                </button>

                {/* Продолжить Button */}
                <button
                    type="button"
                    onClick={() => {
                        navigate('/language');
                    }}
                    className="absolute left-[47px] top-[691px] flex h-[60px] w-[290px] items-center justify-center rounded-[18px] bg-[rgba(255,255,255,0.05)] font-sans text-[15px] font-medium text-white transition-colors active:bg-[rgba(255,255,255,0.1)] outline-none"
                >
                    Продолжить
                </button>
            </div>
        </div>
    );
};

export default LoginScreen;
