import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Toast from './components/ui/Toast';
import QuoteModal from './components/ui/QuoteModal';
import ProjectQuickModal from './components/ui/ProjectQuickModal';
import MaterialModal from './components/ui/MaterialModal';
import ImagePreviewModal from './components/ui/ImagePreviewModal';
import FloatingActions from './components/ui/FloatingActions';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import MaterialsPage from './pages/MaterialsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <ModalProvider>
      <Router>
        <ScrollToTop />
        <div className='min-h-screen flex flex-col bg-[#faf8f5] text-[#1c1917] selection:bg-stone-900 selection:text-stone-50 overflow-x-hidden w-full max-w-full'>
          <Navbar />
          <main className='flex-grow overflow-x-hidden w-full'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/servicios' element={<ServicesPage />} />
              <Route path='/servicios/:slug' element={<ServiceDetailPage />} />
              <Route path='/proyectos' element={<ProjectsPage />} />
              <Route path='/proyectos/:slug' element={<ProjectDetailPage />} />
              <Route path='/sobre-nosotros' element={<AboutPage />} />
              <Route path='/materiales' element={<MaterialsPage />} />
              <Route path='/contacto' element={<ContactPage />} />
              <Route path='/404' element={<NotFoundPage />} />
              {/* Fallback wildcard route */}
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Global Modals & Notifications */}
          <QuoteModal />
          <ProjectQuickModal />
          <MaterialModal />
          <ImagePreviewModal />
          <FloatingActions />
          <Toast />
        </div>
      </Router>
    </ModalProvider>
  );
}
