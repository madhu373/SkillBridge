import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  Award, 
  Play, 
  TrendingUp, 
  Code2, 
  BarChart3, 
  Palette, 
  Cloud, 
  ShieldCheck, 
  Star,
  Compass
} from 'lucide-react';
import { COURSES_DATA, CATEGORIES_LIST } from '../data/coursesData';
import { CourseCard } from '../components/CourseCard';
import { SearchBar } from '../components/SearchBar';
import { useLanguage } from '../context/LanguageContext';

export const HomePage = () => {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (q) => {
    if (q.trim()) {
      navigate(`/courses?search=${encodeURIComponent(q.trim())}`);
    } else {
      navigate('/courses');
    }
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/courses?category=${encodeURIComponent(categoryName)}`);
  };

  const featuredCourses = COURSES_DATA.filter((c) => c.featured);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="text-brand-navy" size={24} />;
      case 'BarChart3':
        return <BarChart3 className="text-brand-navy" size={24} />;
      case 'Briefcase':
        return <Briefcase className="text-brand-navy" size={24} />;
      case 'Palette':
        return <Palette className="text-brand-navy" size={24} />;
      case 'TrendingUp':
        return <TrendingUp className="text-brand-navy" size={24} />;
      case 'Cloud':
        return <Cloud className="text-brand-navy" size={24} />;
      default:
        return <Compass className="text-brand-navy" size={24} />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 bg-gradient-to-b from-brand-bg via-white to-brand-bg border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightLavender/60 text-brand-navy text-xs font-semibold border border-brand-lavender/40 shadow-xs">
                <Sparkles size={14} className="text-brand-navy" />
                <span>{t('hero.badge')}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight font-poppins leading-[1.15]">
                {t('hero.titleStart')}{' '}
                <span className="relative inline-block text-brand-navy">
                  <span className="relative z-10">{t('hero.titleHighlight')}</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-lightLavender/80 -z-0 rounded-sm"></span>
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-brand-textSecondary max-w-2xl leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/courses"
                  className="px-7 py-3.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold rounded-2xl shadow-md hover:shadow-soft-hover transition-all flex items-center gap-2 group text-sm md:text-base focus:ring-4 focus:ring-brand-lightLavender"
                >
                  <span>{t('hero.exploreBtn')}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#categories"
                  className="px-7 py-3.5 bg-white hover:bg-brand-bg text-brand-navy font-semibold rounded-2xl border border-brand-border shadow-xs transition-colors text-sm md:text-base"
                >
                  {t('hero.categoriesBtn')}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-brand-border/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl font-bold text-brand-navy font-poppins">{t('hero.stat1Number')}</div>
                  <div className="text-xs text-brand-textSecondary">{t('hero.stat1Label')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-navy font-poppins">{t('hero.stat2Number')}</div>
                  <div className="text-xs text-brand-textSecondary">{t('hero.stat2Label')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-navy font-poppins">{t('hero.stat3Number')}</div>
                  <div className="text-xs text-brand-textSecondary">{t('hero.stat3Label')}</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Learning Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-lavender/40 to-brand-lightLavender/20 rounded-3xl filter blur-2xl opacity-60"></div>

                {/* Main Visual Card */}
                <div className="relative bg-white rounded-3xl border border-brand-border p-6 shadow-2xl space-y-6">
                  {/* Visual Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold">
                        <Code2 size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-navy font-poppins">
                          Cohort Milestone
                        </h4>
                        <span className="text-[11px] text-brand-textSecondary">
                          Bengaluru Live Session
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-brand-success text-xs font-semibold rounded-full border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse"></span>
                      Active Class
                    </span>
                  </div>

                  {/* Course Graphic Preview */}
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-brand-navy/5 border border-brand-border">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                      alt="Learners collaborating in Bangalore Tech Park"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                      <p className="text-white text-xs font-medium">
                        "From zero to building full-scale SaaS microservices in 8 weeks."
                      </p>
                    </div>
                  </div>

                  {/* Simulated Progress & Student Snippet */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-brand-navy">Python & Fast-API Microservices</span>
                      <span className="text-brand-success font-bold">85% Complete</span>
                    </div>
                    <div className="w-full bg-brand-border h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-lavender to-brand-navy h-full w-[85%] rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-xs text-brand-textSecondary">
                      <div className="flex -space-x-2">
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="student 1" />
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="student 2" />
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="student 3" />
                      </div>
                      <span>+1,420 joined this month</span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-2xl shadow-xl border border-brand-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-lightLavender flex items-center justify-center text-brand-navy">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-navy">Recognised Certification</p>
                    <p className="text-[11px] text-brand-textSecondary">Direct Portfolio Verifier</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Instant Search Bar Section */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white p-4 md:p-6 rounded-3xl border border-brand-border shadow-xl">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearchSubmit}
            showQuickTags={true}
            onTagClick={(tag) => navigate(`/courses?search=${encodeURIComponent(tag)}`)}
          />
        </div>
      </section>

      {/* Popular Categories Section */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-brand-navy font-poppins">
            {t('categories.title')}
          </h2>
          <p className="text-sm md:text-base text-brand-textSecondary">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group text-left p-6 bg-white rounded-2xl border border-brand-border hover:border-brand-lavender shadow-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-bg group-hover:bg-brand-lightLavender/60 flex items-center justify-center transition-colors">
                  {getCategoryIcon(cat.icon)}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-brand-bg rounded-full text-brand-navy border border-brand-border">
                  {cat.courseCount} Courses
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-navy font-poppins group-hover:text-brand-lavender transition-colors mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-brand-textSecondary leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-border/60 flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-lavender transition-colors">
                <span>{t('categories.allCategories')} {cat.name}</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy font-poppins block mb-1">
              Top Rated Programs
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy font-poppins">
              {t('featured.title')}
            </h2>
            <p className="text-sm text-brand-textSecondary mt-1">
              {t('featured.subtitle')}
            </p>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-lavender transition-colors group"
          >
            <span>{t('featured.viewAll')}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Why SkillBridge Section */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 bg-white/10 text-brand-lightLavender text-xs font-bold uppercase tracking-widest rounded-full font-poppins">
              {t('whyUs.tag')}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-poppins">
              {t('whyUs.title')}
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              {t('whyUs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-lavender text-brand-navy flex items-center justify-center font-bold mb-4">
                <Briefcase size={22} />
              </div>
              <h3 className="text-lg font-bold font-poppins mb-2 text-white">
                {t('whyUs.item1Title')}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t('whyUs.item1Desc')}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-lightLavender text-brand-navy flex items-center justify-center font-bold mb-4">
                <Users size={22} />
              </div>
              <h3 className="text-lg font-bold font-poppins mb-2 text-white">
                {t('whyUs.item2Title')}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t('whyUs.item2Desc')}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-lavender text-brand-navy flex items-center justify-center font-bold mb-4">
                <Code2 size={22} />
              </div>
              <h3 className="text-lg font-bold font-poppins mb-2 text-white">
                {t('whyUs.item3Title')}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t('whyUs.item3Desc')}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-lightLavender text-brand-navy flex items-center justify-center font-bold mb-4">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-bold font-poppins mb-2 text-white">
                {t('whyUs.item4Title')}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t('whyUs.item4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-navy font-poppins">
            {t('testimonials.tag')}
          </span>
          <h2 className="text-3xl font-extrabold text-brand-navy font-poppins">
            {t('testimonials.title')}
          </h2>
          <p className="text-sm md:text-base text-brand-textSecondary">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-card space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400" />
              ))}
            </div>
            <p className="text-xs md:text-sm text-brand-textPrimary leading-relaxed italic">
              "The MERN Stack program gave me the exact architecture principles and hands-on projects I needed. I received two software engineering offers within 45 days of completing the course."
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-brand-border/60">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Pooja Hegde"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-brand-navy font-poppins">Pooja Hegde</h4>
                <p className="text-[11px] text-brand-textSecondary">SDE-1 at CloudTech Bengaluru</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-card space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400" />
              ))}
            </div>
            <p className="text-xs md:text-sm text-brand-textPrimary leading-relaxed italic">
              "Figma Auto Layout and design systems were always confusing until I took Sneha's course. Her portfolio case study framework directly helped me land my dream role in Koramangala."
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-brand-border/60">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Arjun Nambiar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-brand-navy font-poppins">Arjun Nambiar</h4>
                <p className="text-[11px] text-brand-textSecondary">UI/UX Designer, Consumer Fintech</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-card space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400" />
              ))}
            </div>
            <p className="text-xs md:text-sm text-brand-textPrimary leading-relaxed italic">
              "The Power BI & SQL curriculum mirrors genuine business operations. No dummy data—we worked on actual Indian consumer transaction sets and built executive KPI dashboards."
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-brand-border/60">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Tanvi Deshpande"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-brand-navy font-poppins">Tanvi Deshpande</h4>
                <p className="text-[11px] text-brand-textSecondary">Analytics Lead, Retail Startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-navy via-[#2c2a55] to-brand-navy text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="px-3 py-1 bg-white/10 text-brand-lightLavender text-xs font-semibold rounded-full font-poppins">
              Start Your Learning Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-poppins">
              {t('cta.title')}
            </h2>
            <p className="text-sm text-gray-300">
              {t('cta.subtitle')}
            </p>
            <p className="text-xs text-brand-lightLavender flex items-center justify-center md:justify-start gap-1.5 pt-1">
              <ShieldCheck size={16} />
              <span>{t('cta.guarantee')}</span>
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/courses"
              className="px-8 py-4 bg-brand-lavender hover:bg-brand-lightLavender text-brand-navy font-bold rounded-2xl shadow-lg transition-all text-sm md:text-base inline-flex items-center gap-2 group"
            >
              <span>{t('cta.button')}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
