import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { EnrolmentProvider } from './context/EnrolmentContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExploreCoursesPage } from './pages/ExploreCoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { EnrolmentPage } from './pages/EnrolmentPage';
import { EnrolmentConfirmationPage } from './pages/EnrolmentConfirmationPage';
import { MyLearningPage } from './pages/MyLearningPage';
import { AboutUsPage } from './pages/AboutUsPage';

// Scroll to top automatically when navigation occurs
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, search]);

  return null;
}

export function App() {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <EnrolmentProvider>
          <BrowserRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-brand-bg text-brand-textPrimary font-inter antialiased selection:bg-brand-lightLavender selection:text-brand-navy">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/courses" element={<ExploreCoursesPage />} />
                  <Route path="/courses/:id" element={<CourseDetailsPage />} />
                  <Route path="/enrol" element={<EnrolmentPage />} />
                  <Route path="/enrolment-confirmation" element={<EnrolmentConfirmationPage />} />
                  <Route path="/my-learning" element={<MyLearningPage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </EnrolmentProvider>
      </AccessibilityProvider>
    </LanguageProvider>
  );
}

export default App;
