import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageSelectionScreen: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const navigate = useNavigate();

  const handleLanguageSelect = (index: number) => {
    setSelectedIndex(index);

    // Future: Use i18n to set the active language here

    // Navigate to Login Screen
    // using setTimeout to let the user see the selected state briefly
    setTimeout(() => {
      navigate('/login');
    }, 150);
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#161616]">
      <div className="relative mx-auto h-dvh w-full max-w-[384px]">
        <img
          src="/assets/images/mask_group_2.svg"
          alt=""
          className="absolute left-1/2 top-[113px] h-[37.78px] w-[68px] -translate-x-1/2"
          draggable={false}
        />

        <img
          src="/assets/images/language_illustration.webp"
          alt="Language illustration"
          className="absolute left-1/2 top-[194px] h-[184px] w-[184px] -translate-x-1/2 object-contain"
          draggable={false}
        />

        <h1 className="absolute left-1/2 top-[401px] -translate-x-1/2 text-center font-sans text-[15px] font-normal leading-[18px] text-white whitespace-nowrap">
          Выберите язык интерфейса
        </h1>

        <div className="absolute left-1/2 top-[454px] flex w-[232px] -translate-x-1/2 flex-col gap-[5px]">
          {[
            { id: 0, label: "O'zbekcha" },
            { id: 1, label: 'English' },
            { id: 2, label: 'Русский' },
          ].map((language) => (
            <button
              key={language.id}
              type="button"
              onClick={() => handleLanguageSelect(language.id)}
              className={`flex items-center justify-center h-[70px] w-[232px] rounded-[18px] text-center font-sans text-[20px] font-medium leading-[24px] text-white outline-none transition-colors ${selectedIndex === language.id
                ? 'bg-[rgba(255,255,255,0.2)]'
                : 'bg-[rgba(255,255,255,0.05)]'
                }`}
            >
              {language.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionScreen;
