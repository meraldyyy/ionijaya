import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SolutionsPage from '@/pages/SolutionsPage';
import SecurityPage from '@/pages/solutions/SecurityPage';
import SmartCampusPage from '@/pages/solutions/SmartCampusPage';
import LmsPage from '@/pages/solutions/LmsPage';
import InfrastructurePage from '@/pages/solutions/InfrastructurePage';
import ExperiencesPage from '@/pages/ExperiencesPage';
import PartnersPage from '@/pages/PartnersPage';
import CustomersPage from '@/pages/CustomersPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/security" element={<SecurityPage />} />
          <Route path="/solutions/smart-campus" element={<SmartCampusPage />} />
          <Route path="/solutions/lms" element={<LmsPage />} />
          <Route path="/solutions/infrastructure" element={<InfrastructurePage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
