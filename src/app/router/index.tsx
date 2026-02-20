import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../../pages/home';
import { SearchPage } from '../../pages/search';
import { ProfilePage } from '../../pages/profile';
import { LoginPage } from '../../pages/login';
import { LanguagePage } from '../../pages/language';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/language', element: <LanguagePage /> },
]);
