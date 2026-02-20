import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import LoginScreen from './pages/LoginScreen';
import LanguageSelectionScreen from './pages/LanguageSelectionScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/language" element={<LanguageSelectionScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
