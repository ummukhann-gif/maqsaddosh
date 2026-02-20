import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useInitData } from '@telegram-apps/sdk-react';
import SplashScreen from './pages/SplashScreen';
import LanguageSelectionScreen from './pages/LanguageSelectionScreen';

function App() {
  // Optional: Init Data logging for debug
  const initData = useInitData(true);

  useEffect(() => {
    if (initData) {
      console.log('Telegram User:', initData.user?.firstName);
    }
  }, [initData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/language" element={<LanguageSelectionScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
