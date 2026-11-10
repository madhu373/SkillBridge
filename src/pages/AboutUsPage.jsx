import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  MapPin, 
  Award, 
  ArrowRight,
  Sparkles,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUsPage = () => {
  return (
    <div className="pb-24 space-y-16">
      {/* Hero Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-brand-lightLavender rounded-full text-xs font-semibold mb-4">
            <Sparkles size={14} />
            <span>Academic Internship UX/UI Redesign</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins tracking-tight mb-4">
            Bridging Potential and Industry Excellence
          </h1>
          <p className="text-base sm:text-lg text-brand-border leading-relaxed">
            SkillBridge was designed from the ground up to eliminate barriers in course discovery, clarify complex technical curriculum, and empower India's next-generation tech talent.
          </p>
        </div>
      </section>

      {/* Problem Statement & Research Foundation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lavender font-poppins block">
              Case Study Context
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy font-poppins leading-tight">
              Solving the Learner Drop-Off Problem in Bangalore's EdTech Sector
            </h2>
            <p className="text-sm text-brand-textSecondary leading-relaxed">
              Analytics revealed that while thousands of learners landed on traditional EdTech portals, up to 68% abandoned their search before enrolling. The culprit? Cluttered layouts, hidden recurring pricing traps, confusing syllabus descriptions, and excessive checkout friction.
            </p>
            <p className="text-sm text-brand-textSecondary leading-relaxed">
              SkillBridge solves this through <strong>User-Centred Design (UCD)</strong>: instant multi-faceted filtering, transparent pricing with no hidden fees, modular curriculum accordions, and a streamlined 60-second enrolment flow.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-brand-border shadow-xs">
                <span className="text-2xl font-extrabold text-brand-navy font-poppins block">60 Sec</span>
                <span className="text-xs text-brand-textSecondary">Frictionless Enrolment</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-brand-border shadow-xs">
                <span className="text-2xl font-extrabold text-brand-navy font-poppins block">100%</span>
                <span className="text-xs text-brand-textSecondary">Pricing Transparency</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-brand-navy/10 border border-brand-border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="UX Research and Collaboration in Bengaluru"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="bg-white py-16 border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-brand-navy font-poppins">
              Who We Built SkillBridge For
            </h2>
            <p className="text-sm text-brand-textSecondary">
              Three key personas defined every UX decision and visual interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-lightLavender flex items-center justify-center font-bold">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-navy font-poppins">
                College Students
              </h3>
              <p className="text-xs text-brand-textSecondary leading-relaxed">
                Looking to complement theoretical coursework with production-ready skills in Python, Web Dev, and Cloud to prepare for competitive campus placements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-lavender text-brand-navy flex items-center justify-center font-bold">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-navy font-poppins">
                Fresh Graduates
              </h3>
              <p className="text-xs text-brand-textSecondary leading-relaxed">
                Actively applying for entry-level tech roles who need verified portfolio capstones and mentorship to stand out in interviews.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-navy font-poppins">
                Working Professionals
              </h3>
              <p className="text-xs text-brand-textSecondary leading-relaxed">
                Engineers, analysts, and marketers seeking lateral transitions into UI/UX Design, Generative AI, or Tech Product Management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design System & Inclusivity Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl font-bold font-poppins">
              Built for Inclusivity & Accessibility
            </h3>
            <p className="text-xs sm:text-sm text-brand-border leading-relaxed">
              SkillBridge adheres to WCAG 2.1 AA standards. With integrated <strong>Low-Vision Mode</strong> and complete <strong>Hindi Language Translation</strong>, every learner can comfortably discover and complete their coursework.
            </p>
          </div>

          <Link
            to="/courses"
            className="px-6 py-3.5 bg-brand-lavender hover:bg-brand-lightLavender text-brand-navy font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Explore The Catalog</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
