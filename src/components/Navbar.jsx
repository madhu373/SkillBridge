import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Globe, 
  Eye, 
  Menu, 
  X, 
  User, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAccessibility } from '../context/AccessibilityContext';
import { useEnrolment } from '../context/EnrolmentContext';
import { Modal } from './Modal';

export const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { isAccessibleMode, toggleAccessibility } = useAccessibility();
  const { enrolments } = useEnrolment();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const navigate = useNavigate();

  const activeLinkClass = ({ isActive }) =>
    `relative px-3.5 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${
      isActive
        ? 'text-brand-navy bg-brand-lightLavender/50 font-bold'
        : 'text-brand-textSecondary hover:text-brand-navy hover:bg-brand-border/40'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
      isActive
        ? 'text-brand-navy bg-brand-lightLavender/60 font-bold'
        : 'text-brand-textSecondary hover:text-brand-navy hover:bg-brand-border/30'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-brand-border shadow-nav transition-all">
        {/* Top announcement bar for academic project context */}
        <div className="bg-brand-navy text-white text-[12px] py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
          <Sparkles size={13} className="text-brand-secondary text-brand-lavender" />
          <span>
            {lang === 'hi' 
              ? 'स्किलब्रिज: शैक्षणिक इंटर्नशिप UX/UI प्रोजेक्ट • वास्तविक कौशल, बिना बाधा के नामांकन'
              : 'SkillBridge: Academic Internship UX/UI Redesign Project • Discover Skills That Move You Forward'}
          </span>
          <span className="hidden md:inline-block bg-white/10 px-2 py-0.5 rounded text-[11px] font-mono">
            Demo Mode
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-lavender rounded-lg"
              aria-label="SkillBridge Home"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                <GraduationCap size={24} className="text-brand-lightLavender" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-brand-navy font-poppins flex items-center gap-1">
                  SkillBridge
                  <span className="w-2 h-2 rounded-full bg-brand-lavender inline-block"></span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-textSecondary -mt-1">
                  EdTech Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
              <NavLink to="/" className={activeLinkClass} end>
                {t('nav.home')}
              </NavLink>
              <NavLink to="/courses" className={activeLinkClass}>
                {t('nav.explore')}
              </NavLink>
              <NavLink to="/about" className={activeLinkClass}>
                {t('nav.about')}
              </NavLink>
              <NavLink to="/my-learning" className={activeLinkClass}>
                <span className="flex items-center gap-2">
                  {t('nav.myLearning')}
                  {enrolments.length > 0 && (
                    <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold bg-brand-navy text-white rounded-full">
                      {enrolments.length}
                    </span>
                  )}
                </span>
              </NavLink>
            </nav>

            {/* Right Tools: Language, Accessibility, User Profile */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-navy bg-brand-bg hover:bg-brand-border/60 border border-brand-border rounded-lg transition-colors focus:ring-2 focus:ring-brand-lavender"
                title="Switch Language (English / हिंदी)"
                aria-label="Switch Language"
              >
                <Globe size={15} className="text-brand-textSecondary" />
                <span>{t('nav.languageToggle')}</span>
              </button>

              {/* Accessibility Mode Toggle */}
              <button
                onClick={toggleAccessibility}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all focus:ring-2 focus:ring-brand-lavender ${
                  isAccessibleMode
                    ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                    : 'bg-brand-bg text-brand-textPrimary border-brand-border hover:bg-brand-border/60'
                }`}
                title="Toggle High-Contrast / Low-Vision Accessible Mode"
                aria-label="Toggle High-Contrast Accessible Mode"
                aria-pressed={isAccessibleMode}
              >
                <Eye size={15} className={isAccessibleMode ? "text-brand-lightLavender" : "text-brand-textSecondary"} />
                <span>{isAccessibleMode ? t('nav.accessibilityNormal') : t('nav.accessibilityMode')}</span>
              </button>

              {/* Demo Learner Profile */}
              <button
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-brand-navy hover:bg-brand-navy/90 text-white text-xs font-semibold rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-brand-lavender"
                aria-label="Student profile"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-lavender/30 flex items-center justify-center text-white">
                  <User size={15} />
                </div>
                <span>Learner Profile</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="p-2 text-brand-navy bg-brand-bg border border-brand-border rounded-lg text-xs font-bold"
                aria-label="Switch Language"
              >
                {lang === 'en' ? 'हिं' : 'EN'}
              </button>
              <button
                onClick={toggleAccessibility}
                className={`p-2 rounded-lg border text-xs ${
                  isAccessibleMode ? 'bg-brand-navy text-white border-brand-navy' : 'bg-brand-bg text-brand-navy border-brand-border'
                }`}
                aria-label="Toggle Accessibility"
              >
                <Eye size={18} />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-navy hover:bg-brand-border/50 rounded-lg transition-colors focus:ring-2 focus:ring-brand-lavender"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-border bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            <NavLink
              to="/"
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
              end
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/courses"
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.explore')}
            </NavLink>
            <NavLink
              to="/about"
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </NavLink>
            <NavLink
              to="/my-learning"
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>{t('nav.myLearning')}</span>
                {enrolments.length > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-brand-navy text-white rounded-full">
                    {enrolments.length}
                  </span>
                )}
              </div>
            </NavLink>

            <div className="pt-4 border-t border-brand-border/60 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-brand-navy text-white font-semibold rounded-xl"
              >
                <User size={18} />
                <span>View Learner Profile</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Demo Learner Profile Modal */}
      <Modal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        title="Student Profile & Enrolment Status"
        maxWidth="max-w-md"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-brand-bg rounded-2xl border border-brand-border">
            <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-bold text-xl shadow-md">
              MR
            </div>
            <div>
              <h4 className="font-bold text-brand-navy text-lg">Madhumithra R.</h4>
              <p className="text-xs text-brand-textSecondary">madhumithra@example.com</p>
              <span className="inline-block mt-1 px-2 py-0.5 text-[11px] font-semibold bg-emerald-100 text-emerald-800 rounded-full">
                Active Student • Final Year CSE
              </span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-brand-border">
              <span className="text-brand-textSecondary">Enrolled Courses:</span>
              <span className="font-semibold text-brand-navy">{enrolments.length} Programs</span>
            </div>
            <div className="flex justify-between py-2 border-b border-brand-border">
              <span className="text-brand-textSecondary">Learning Hub:</span>
              <span className="font-semibold text-brand-navy">Bengaluru, Karnataka</span>
            </div>
            <div className="flex justify-between py-2 border-b border-brand-border">
              <span className="text-brand-textSecondary">Persistence Mode:</span>
              <span className="font-mono text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                LocalStorage Sync Active
              </span>
            </div>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setAuthModalOpen(false);
                navigate('/my-learning');
              }}
              className="w-full py-2.5 bg-brand-navy text-white font-semibold text-sm rounded-xl hover:bg-brand-navy/90 transition-colors shadow-sm"
            >
              Go to My Learning
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
