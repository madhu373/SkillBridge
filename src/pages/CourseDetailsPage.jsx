import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  BarChart, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  Share2, 
  Sparkles,
  HelpCircle,
  FileCheck,
  Check
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { RatingStars } from '../components/RatingStars';
import { Badge } from '../components/Badge';
import { useEnrolment } from '../context/EnrolmentContext';

export const CourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isEnrolled } = useEnrolment();

  const course = COURSES_DATA.find((c) => c.id === id);

  // Accordion state: open all or first module by default
  const [openModules, setOpenModules] = useState({ 0: true, 1: true });
  const [copiedLink, setCopiedLink] = useState(false);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-navy font-poppins">Course Not Found</h2>
        <p className="text-sm text-brand-textSecondary">
          The requested course could not be located in our catalog.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-sm font-bold rounded-xl"
        >
          <span>Browse All Courses</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);
  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const toggleModule = (index) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="pb-24">
      {/* Top Breadcrumb & Hero Header */}
      <section className="bg-brand-navy text-white pt-10 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-brand-lightLavender mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:underline">Courses</Link>
            <span>/</span>
            <span className="text-white font-medium truncate max-w-xs">{course.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Header Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="lavender" size="sm">
                  {course.category}
                </Badge>
                {course.badge && (
                  <Badge variant="primary" size="sm" className="bg-white/10 text-brand-lightLavender border border-white/20">
                    {course.badge}
                  </Badge>
                )}
                <span className="text-xs text-brand-border">
                  Updated: Q4 2026 • Bangalore Cohort
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-brand-border leading-relaxed max-w-2xl">
                {course.subtitle}
              </p>

              {/* Rating and Enrolled Metrics */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                  <RatingStars rating={course.rating} count={course.reviewCount} size={15} />
                </div>

                <div className="flex items-center gap-1.5 text-xs text-brand-lightLavender">
                  <Users size={16} />
                  <span>{course.enrolledCount.toLocaleString()} Students Enrolled</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-brand-lightLavender">
                  <Clock size={16} />
                  <span>{course.duration} ({course.totalHours})</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-brand-lightLavender">
                  <BarChart size={16} />
                  <span>{course.level} Level</span>
                </div>
              </div>

              {/* Instructor snippet */}
              <div className="flex items-center gap-3 pt-3">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-lavender"
                />
                <div>
                  <p className="text-sm font-bold text-white font-poppins">
                    Created by {course.instructor.name}
                  </p>
                  <p className="text-xs text-brand-lightLavender">
                    {course.instructor.role} • {course.instructor.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Mobile Quick Card (Visible on mobile, sticky on desktop) */}
            <div className="lg:hidden">
              <div className="bg-white rounded-2xl p-6 text-brand-navy shadow-xl border border-brand-border space-y-4">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full aspect-video object-cover rounded-xl"
                />
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-poppins text-brand-navy">
                    ₹{course.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-brand-textSecondary line-through">
                    ₹{course.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-brand-success bg-emerald-50 px-2 py-0.5 rounded">
                    {discountPercent}% OFF
                  </span>
                </div>

                {enrolled ? (
                  <Link
                    to="/my-learning"
                    className="w-full py-3.5 bg-brand-success text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm"
                  >
                    <CheckCircle2 size={16} />
                    <span>Go to My Learning</span>
                  </Link>
                ) : (
                  <Link
                    to={`/enrol?course=${course.id}`}
                    className="w-full py-3.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Enrol Now</span>
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Body Content with Sticky Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Learning Outcomes, Curriculum, Instructor, Reviews */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Learning Outcomes */}
            <section className="bg-white rounded-3xl border border-brand-border p-8 shadow-card space-y-6">
              <h2 className="text-2xl font-bold text-brand-navy font-poppins flex items-center gap-2">
                <Sparkles size={22} className="text-brand-lavender" />
                What You'll Learn
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-brand-success flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <span className="text-xs md:text-sm text-brand-textPrimary font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Interactive Curriculum Accordion */}
            <section className="bg-white rounded-3xl border border-brand-border p-8 shadow-card space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-brand-border">
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy font-poppins">
                    Course Curriculum
                  </h2>
                  <p className="text-xs text-brand-textSecondary mt-0.5">
                    {course.curriculum.length} Modules • {course.curriculum.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons • {course.totalHours} Total Duration
                  </p>
                </div>
                <button
                  onClick={() => {
                    const allOpen = Object.keys(openModules).length === course.curriculum.length;
                    if (allOpen) {
                      setOpenModules({});
                    } else {
                      const all = {};
                      course.curriculum.forEach((_, idx) => (all[idx] = true));
                      setOpenModules(all);
                    }
                  }}
                  className="text-xs font-bold text-brand-navy hover:text-brand-lavender transition-colors self-start sm:self-auto"
                >
                  {Object.keys(openModules).length === course.curriculum.length ? "Collapse All" : "Expand All"}
                </button>
              </div>

              {/* Modules Accordion */}
              <div className="space-y-4">
                {course.curriculum.map((moduleItem, modIdx) => {
                  const isOpen = !!openModules[modIdx];
                  return (
                    <div
                      key={modIdx}
                      className="border border-brand-border rounded-2xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleModule(modIdx)}
                        className="w-full p-4 md:p-5 bg-brand-bg/60 hover:bg-brand-bg flex items-center justify-between text-left transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center font-poppins">
                            {modIdx + 1}
                          </span>
                          <div>
                            <h4 className="font-bold text-brand-navy text-sm md:text-base font-poppins">
                              {moduleItem.module}
                            </h4>
                            <span className="text-[11px] text-brand-textSecondary">
                              {moduleItem.lessons.length} Lessons • {moduleItem.duration}
                            </span>
                          </div>
                        </div>

                        <div className="text-brand-navy">
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="divide-y divide-brand-border/60 bg-white">
                          {moduleItem.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="p-4 flex items-center justify-between text-xs md:text-sm hover:bg-brand-bg/30 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <BookOpen size={16} className="text-brand-textSecondary shrink-0" />
                                <span className="text-brand-textPrimary font-medium">
                                  {lesson.title}
                                </span>
                              </div>

                              <div className="flex items-center gap-3 shrink-0">
                                {lesson.preview && (
                                  <span className="px-2 py-0.5 text-[10px] font-bold text-brand-navy bg-brand-lightLavender/70 rounded-md">
                                    Free Preview
                                  </span>
                                )}
                                <span className="text-xs text-brand-textSecondary font-mono">
                                  {lesson.duration}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3. Course Requirements */}
            <section className="bg-white rounded-3xl border border-brand-border p-8 shadow-card space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy font-poppins">
                Prerequisites & Requirements
              </h2>
              <ul className="space-y-2.5">
                {course.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-brand-textPrimary">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender mt-2 shrink-0"></span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Instructor Spotlight */}
            <section className="bg-white rounded-3xl border border-brand-border p-8 shadow-card space-y-6">
              <h2 className="text-2xl font-bold text-brand-navy font-poppins">
                Your Lead Instructor
              </h2>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-brand-border shadow-md shrink-0"
                />

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy font-poppins">
                      {course.instructor.name}
                    </h3>
                    <p className="text-xs text-brand-lavender font-semibold font-poppins">
                      {course.instructor.role}
                    </p>
                    <p className="text-xs text-brand-textSecondary">
                      {course.instructor.experience}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-brand-textPrimary leading-relaxed">
                    {course.instructor.bio}
                  </p>

                  <div className="flex items-center gap-6 text-xs text-brand-textSecondary pt-2">
                    <div>
                      <strong className="text-brand-navy font-bold text-sm block">
                        {course.instructor.rating}★
                      </strong>
                      Instructor Rating
                    </div>
                    <div>
                      <strong className="text-brand-navy font-bold text-sm block">
                        {course.instructor.studentsCount.toLocaleString()}+
                      </strong>
                      Active Learners
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Student Reviews */}
            <section className="bg-white rounded-3xl border border-brand-border p-8 shadow-card space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy font-poppins">
                    Verified Student Reviews
                  </h2>
                  <p className="text-xs text-brand-textSecondary mt-0.5">
                    Real feedback from alumni currently working in tech
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <RatingStars rating={course.rating} count={course.reviewCount} size={18} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {course.reviews.map((rev) => (
                  <div key={rev.id} className="p-5 bg-brand-bg/50 rounded-2xl border border-brand-border space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-xs font-bold text-brand-navy font-poppins">{rev.author}</p>
                          <p className="text-[10px] text-brand-textSecondary">{rev.role}</p>
                        </div>
                      </div>
                      <span className="text-[11px] text-brand-textSecondary">{rev.date}</span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="text-xs">★</span>
                      ))}
                    </div>

                    <p className="text-xs text-brand-textPrimary leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Desktop Sticky Checkout Card */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-3xl border border-brand-border p-6 shadow-2xl space-y-6 card-accessible">
              {/* Media Thumbnail */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-brand-navy/10 border border-brand-border">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="primary" size="xs">
                    {course.category}
                  </Badge>
                </div>
              </div>

              {/* Price Row */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-3xl font-extrabold text-brand-navy font-poppins">
                    ₹{course.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-base text-brand-textSecondary line-through">
                    ₹{course.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-brand-success bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {discountPercent}% OFF
                  </span>
                </div>
                <p className="text-[11px] text-brand-textSecondary">
                  Inclusive of all taxes & certification fees. Zero recurring subscriptions.
                </p>
              </div>

              {/* Primary Action Button */}
              {enrolled ? (
                <div className="space-y-2">
                  <Link
                    to="/my-learning"
                    className="w-full py-3.5 bg-brand-success text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm"
                  >
                    <CheckCircle2 size={18} />
                    <span>Go to My Learning (Enrolled)</span>
                  </Link>
                  <p className="text-[11px] text-center text-brand-textSecondary">
                    You have active access to this program
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    to={`/enrol?course=${course.id}`}
                    className="w-full py-4 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all group focus:ring-4 focus:ring-brand-lightLavender"
                  >
                    <span>Enrol Now</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-[11px] text-center text-brand-textSecondary">
                    🔒 Instant lifetime access. Fast, friction-free enrolment.
                  </p>
                </div>
              )}

              {/* What's Included Checklist */}
              <div className="pt-4 border-t border-brand-border space-y-3 text-xs text-brand-textPrimary">
                <h5 className="font-bold text-brand-navy uppercase tracking-wider text-[11px] font-poppins">
                  This Program Includes:
                </h5>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2.5">
                    <Clock size={15} className="text-brand-lavender shrink-0" />
                    <span>{course.totalHours} of live + recorded interactive sessions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FileCheck size={15} className="text-brand-lavender shrink-0" />
                    <span>3+ Production-ready portfolio capstones</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Award size={15} className="text-brand-lavender shrink-0" />
                    <span>Verifiable SkillBridge Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Users size={15} className="text-brand-lavender shrink-0" />
                    <span>Alumni network & peer code review access</span>
                  </li>
                </ul>
              </div>

              {/* Share Course Link Button */}
              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs font-semibold text-brand-textSecondary hover:text-brand-navy transition-colors"
                >
                  <Share2 size={14} />
                  <span>{copiedLink ? "Link Copied to Clipboard!" : "Share this course with peers"}</span>
                </button>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
