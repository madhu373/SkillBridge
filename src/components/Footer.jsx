import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, ExternalLink, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 rounded-xl bg-brand-lavender text-brand-navy flex items-center justify-center font-bold">
                <GraduationCap size={22} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-poppins">
                SkillBridge
              </span>
            </Link>
            <p className="text-sm text-brand-border leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-lightLavender">
              <ShieldCheck size={16} />
              <span>Academic UX/UI Internship Redesign Portfolio</span>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-lavender font-poppins">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-brand-lightLavender transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-lightLavender transition-colors">
                  {t('nav.explore')}
                </Link>
              </li>
              <li>
                <Link to="/my-learning" className="hover:text-brand-lightLavender transition-colors">
                  {t('nav.myLearning')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-lightLavender transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-lavender font-poppins">
              {t('footer.categoriesTitle')}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/courses?category=Technology" className="hover:text-brand-lightLavender transition-colors">
                  Technology & Python
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Design" className="hover:text-brand-lightLavender transition-colors">
                  UI/UX & Figma
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Data Science" className="hover:text-brand-lightLavender transition-colors">
                  Data Analytics & SQL
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Cloud Computing" className="hover:text-brand-lightLavender transition-colors">
                  Cloud & AWS DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Bangalore Hub & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-lavender font-poppins">
              Bangalore Hub
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-brand-lavender shrink-0 mt-0.5" />
                <span>Koramangala 4th Block, 100 Feet Road, Bengaluru, KA 560034</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-lavender shrink-0" />
                <span>admissions@skillbridge-india.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-lavender shrink-0" />
                <span>+91 (080) 4129-8800</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
