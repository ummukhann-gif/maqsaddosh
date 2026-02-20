import React, { useState } from 'react';

const LanguageSelectionScreen: React.FC = () => {
    // 0: O'zbekcha, 1: English (Default), 2: Русский
    const [selectedIndex, setSelectedIndex] = useState<number>(1);

    const handleLanguageSelect = (index: number) => {
        setSelectedIndex(index);
        // Future: Navigate to Intro Screen
        // navigate('/intro', { state: { language: index } });
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#161616] relative pt-[113px] overflow-x-hidden">
            {/* Absolute positioned mask group */}
            <div
                className="absolute w-[68px] h-[38px] mix-blend-screen"
                style={{ left: '158px', top: '113px' }}
            >
                <img src="/assets/images/mask_group_2.svg" alt="" className="w-full h-full" />
            </div>

            {/* Spacing from top to image: 194px - 113px = 81px of additional padding/margin */}
            <div className="mt-20 flex flex-col items-center w-full px-5 z-10">

                {/* Central Illustration */}
                <div className="w-[184px] h-[184px] mb-[23px]">
                    {/* Assuming webp is supported, otherwise fallback to standard img */}
                    <img
                        src="/assets/images/language_illustration.webp"
                        alt="Illustration"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Title Text */}
                <h1 className="font-sans font-normal text-[15px] leading-[1.2] text-white text-center mb-[35px]">
                    Выберите язык интерфейса
                </h1>

                {/* Language Buttons Container */}
                <div className="flex flex-col gap-[5px] w-full max-w-[232px]">
                    {[
                        { id: 0, label: "O'zbekcha" },
                        { id: 1, label: "English" },
                        { id: 2, label: "Русский" },
                    ].map((lang) => (
                        <button
                            key={lang.id}
                            onClick={() => handleLanguageSelect(lang.id)}
                            className={`
                w-full h-[70px] rounded-[18px] flex items-center justify-center
                transition-colors duration-200 outline-none
                ${selectedIndex === lang.id
                                    ? 'bg-white/20' // Highlighted
                                    : 'bg-white/5'  // Default
                                }
              `}
                        >
                            <span className="font-sans font-medium text-[20px] leading-[1.2] text-white">
                                {lang.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSelectionScreen;
