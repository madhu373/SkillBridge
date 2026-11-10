import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Award, 
  CheckCircle2, 
  Play, 
  Sparkles, 
  BarChart, 
  TrendingUp, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { useEnrolment } from '../context/EnrolmentContext';
import { useLanguage } from '../context/LanguageContext';
import { ProgressBar } from '../components/ProgressBar';
import { Badge } from '../components/Badge';
import { LessonModal } from '../components/LessonModal';
import { CertificateModal } from '../components/CertificateModal';

export const MyLearningPage = () => {
  const { enrolments, updateProgress } = useEnrolment();
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState('inProgress'); // 'inProgress' | 'completed'

  // Modals state
  const [activeLessonCourse, setActiveLessonCourse] = useState(null);
  const [activeLessonEnrolment, setActiveLessonEnrolment] = useState(null);
  const [activeCertCourse, setActiveCertCourse] = useState(null);
  const [activeCertEnrolment, setActiveCertEnrolment] = useState(null);

  // Map enrolled data with full course metadata
  const enrichedEnrolments = enrolments.map((enr) => {
    const fullCourse = COURSES_DATA.find((c) => c.id === enr.courseId) || {
      id: enr.courseId,
      title: enr.courseTitle || 'Enrolled Course',
      category: 'Technology',
      totalHours: '30 Hours',
      duration: '8 Weeks',
      instructor: { name: 'SkillBridge Faculty', role: 'Lead Mentor' },
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      curriculum: [
        {
          module: 'Module 1: Foundations',
          lessons: [{ title: 'Overview & Orientation', duration: '30 mins' }]
        }
      ]
    };
    return {
      ...enr,
      course: fullCourse
    };
  });

  const inProgressCourses = enrichedEnrolments.filter((item) => (item.progress || 0) < 100);
  const completedCourses = enrichedEnrolments.filter((item) => (item.progress || 0) === 100);

  // Stats calculation
  const totalEnrolled = enrolments.length;
  const totalCompleted = completedCourses.length;
  const hoursLearned = enrichedEnrolments.reduce((acc, item) => {
    const courseHours = parseInt(item.course.totalHours, 10) || 30;
    return acc + Math.round((courseHours * (item.progress || 0)) / 100);
  }, 0);

  const handleOpenLesson = (item) => {
    setActiveLessonCourse(item.course);
    setActiveLessonEnrolment(item);
  };

  const handleOpenCertificate = (item) => {
    setActiveCertCourse(item.course);
    setActiveCertEnrolment(item);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 space-y-10">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-border">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lightLavender/60 text-brand-navy rounded-full text-xs font-semibold mb-2">
            <Sparkles size={13} />
            <span>Learner Workspace</span>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-navy font-poppins">
            {t('dashboard.welcome')}, Madhumithra!
          </h1>
          <p className="text-xs sm:text-sm text-brand-textSecondary mt-1">
            {t('dashboard.subtitle')}
          </p>
        </div>

        <Link
          to="/courses"
          className="self-start md:self-auto px-5 py-2.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-2"
        >
          <span>Explore More Tracks</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-card flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-lightLavender/60 text-brand-navy flex items-center justify-center font-bold">
            <BookOpen size={22} />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-brand-navy font-poppins block">
              {totalEnrolled}
            </span>
            <span className="text-xs text-brand-textSecondary">{t('dashboard.statEnrolled')}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-card flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-brand-success flex items-center justify-center font-bold">
            <CheckCircle2 size={22} />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-brand-navy font-poppins block">
              {totalCompleted}
            </span>
            <span className="text-xs text-brand-textSecondary">{t('dashboard.statCertificates')}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-card flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
            <Clock size={22} />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-brand-navy font-poppins block">
              {hoursLearned} hrs
            </span>
            <span className="text-xs text-brand-textSecondary">{t('dashboard.statHours')}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-card flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <Award size={22} />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-brand-navy font-poppins block">
              92%
            </span>
            <span className="text-xs text-brand-textSecondary">{t('dashboard.statAverageScore')}</span>
          </div>
        </div>
      </div>

      {/* Course Tabs (In Progress / Completed) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-brand-border pb-3">
          <button
            onClick={() => setActiveTab('inProgress')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'inProgress'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-brand-textSecondary hover:text-brand-navy hover:bg-brand-border/40'
            }`}
          >
            {t('dashboard.tabInProgress')} ({inProgressCourses.length})
          </button>

          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'completed'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-brand-textSecondary hover:text-brand-navy hover:bg-brand-border/40'
            }`}
          >
            {t('dashboard.tabCompleted')} ({completedCourses.length})
          </button>
        </div>

        {/* Tab 1: In Progress Courses */}
        {activeTab === 'inProgress' && (
          <div>
            {inProgressCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inProgressCourses.map((item) => (
                  <div
                    key={item.enrolmentId}
                    className="bg-white rounded-2xl border border-brand-border p-6 shadow-card hover:shadow-soft-hover transition-all flex flex-col justify-between space-y-5 card-accessible"
                  >
                    <div className="space-y-4">
                      {/* Top thumbnail and badge row */}
                      <div className="flex gap-4">
                        <img
                          src={item.course.thumbnail}
                          alt={item.course.title}
                          className="w-24 h-20 rounded-xl object-cover shrink-0 border border-brand-border"
                        />
                        <div className="space-y-1">
                          <Badge variant="lavender" size="xs">
                            {item.course.category}
                          </Badge>
                          <h3 className="font-bold text-brand-navy font-poppins text-sm line-clamp-2">
                            {item.course.title}
                          </h3>
                          <p className="text-[11px] text-brand-textSecondary">
                            Instructor: {item.course.instructor.name}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="pt-2">
                        <ProgressBar progress={item.progress || 0} />
                        <div className="flex justify-between items-center text-[11px] text-brand-textSecondary mt-1.5">
                          <span>
                            {item.completedLessons || 0} of {item.totalLessons || 12} lessons
                          </span>
                          <span>Last accessed: {item.lastAccessed || 'Today'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-brand-border flex items-center justify-between gap-3">
                      <Link
                        to={`/courses/${item.course.id}`}
                        className="text-xs font-semibold text-brand-navy hover:text-brand-lavender transition-colors"
                      >
                        {t('dashboard.reviewCourse')}
                      </Link>

                      <button
                        onClick={() => handleOpenLesson(item)}
                        className="px-4 py-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition-all group"
                      >
                        <Play size={13} className="fill-current group-hover:scale-110 transition-transform" />
                        <span>{t('dashboard.resumeLesson')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-brand-border p-12 text-center space-y-4 shadow-card">
                <BookOpen size={32} className="mx-auto text-brand-textSecondary" />
                <h3 className="font-bold text-brand-navy text-base font-poppins">
                  No courses currently in progress
                </h3>
                <p className="text-xs text-brand-textSecondary max-w-sm mx-auto">
                  You have completed all your active coursework or haven't enrolled yet.
                </p>
                <Link
                  to="/courses"
                  className="inline-flex px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl"
                >
                  {t('dashboard.exploreBtn')}
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Completed Courses */}
        {activeTab === 'completed' && (
          <div>
            {completedCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {completedCourses.map((item) => (
                  <div
                    key={item.enrolmentId}
                    className="bg-white rounded-2xl border border-brand-border p-6 shadow-card space-y-5 card-accessible"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.course.thumbnail}
                        alt={item.course.title}
                        className="w-24 h-20 rounded-xl object-cover shrink-0 border border-brand-border"
                      />
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-brand-success text-[10px] font-bold rounded-full border border-emerald-200">
                          <CheckCircle2 size={11} /> Completed 100%
                        </span>
                        <h3 className="font-bold text-brand-navy font-poppins text-sm line-clamp-2">
                          {item.course.title}
                        </h3>
                        <p className="text-[11px] text-brand-textSecondary">
                          Instructor: {item.course.instructor.name}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <ProgressBar progress={100} />
                    </div>

                    <div className="pt-3 border-t border-brand-border flex items-center justify-between gap-3">
                      <span className="text-[11px] font-mono text-brand-textSecondary">
                        ID: {item.enrolmentId}
                      </span>

                      <button
                        onClick={() => handleOpenCertificate(item)}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition-all"
                      >
                        <Award size={14} />
                        <span>{t('dashboard.downloadCertificate')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-brand-border p-12 text-center space-y-4 shadow-card">
                <Award size={32} className="mx-auto text-brand-textSecondary" />
                <h3 className="font-bold text-brand-navy text-base font-poppins">
                  No completed courses yet
                </h3>
                <p className="text-xs text-brand-textSecondary max-w-sm mx-auto">
                  Keep working on your active coursework to earn verified certificates.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Interactive Classroom Modal */}
      {activeLessonCourse && activeLessonEnrolment && (
        <LessonModal
          isOpen={!!activeLessonCourse}
          onClose={() => {
            setActiveLessonCourse(null);
            setActiveLessonEnrolment(null);
          }}
          course={activeLessonCourse}
          enrolment={activeLessonEnrolment}
          onUpdateProgress={(courseId, newProg) => {
            updateProgress(courseId, newProg);
            // Refresh modal enrolment instance
            setActiveLessonEnrolment((prev) => ({
              ...prev,
              progress: newProg,
              completedLessons: Math.round((newProg / 100) * (prev.totalLessons || 12))
            }));
          }}
        />
      )}

      {/* Verified Certificate Modal */}
      {activeCertCourse && activeCertEnrolment && (
        <CertificateModal
          isOpen={!!activeCertCourse}
          onClose={() => {
            setActiveCertCourse(null);
            setActiveCertEnrolment(null);
          }}
          course={activeCertCourse}
          enrolment={activeCertEnrolment}
        />
      )}
    </div>
  );
};
