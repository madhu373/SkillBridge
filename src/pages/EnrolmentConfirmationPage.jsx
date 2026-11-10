import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Calendar, 
  Sparkles,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEnrolment } from '../context/EnrolmentContext';

export const EnrolmentConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lastEnrolment } = useEnrolment();

  // Pick from location state or lastEnrolment
  const enrolment = location.state?.enrolment || lastEnrolment;
  const course = location.state?.course;

  useEffect(() => {
    // Launch celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }, []);

  if (!enrolment) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-navy font-poppins">No Active Enrolment Found</h2>
        <p className="text-xs text-brand-textSecondary">
          It looks like you haven't recently completed an enrolment form.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs font-bold rounded-xl"
        >
          <span>Explore Courses</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
      <div className="bg-white rounded-3xl border border-brand-border p-8 md:p-12 shadow-2xl space-y-8 text-center card-accessible">
        
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-brand-success flex items-center justify-center mx-auto shadow-inner animate-bounce">
          <CheckCircle2 size={46} />
        </div>

        {/* Heading & Order ID */}
        <div className="space-y-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-full font-mono">
            Enrolment ID: {enrolment.enrolmentId}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-poppins">
            Congratulations! You're Enrolled!
          </h1>
          <p className="text-xs sm:text-sm text-brand-textSecondary max-w-lg mx-auto">
            Your seat has been reserved in the cohort. Instant course access has been added to your student dashboard.
          </p>
        </div>

        {/* Confirmation Details Card */}
        <div className="bg-brand-bg rounded-2xl border border-brand-border p-6 text-left space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-brand-border">
            <h3 className="font-bold text-brand-navy font-poppins text-sm flex items-center gap-2">
              <GraduationCap size={18} className="text-brand-lavender" />
              Cohort Enrolment Summary
            </h3>
            <span className="text-xs text-brand-textSecondary">
              {new Date(enrolment.enrolledAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Left: Course info */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-textSecondary">
                Program Information
              </h4>
              <p className="font-bold text-brand-navy text-sm font-poppins">
                {enrolment.courseTitle || course?.title}
              </p>
              <div className="flex items-center gap-2 text-brand-textSecondary">
                <Calendar size={14} />
                <span>Next live batch starts this coming Monday</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <CheckCircle2 size={14} />
                <span>Lifetime access + Community code reviews</span>
              </div>
            </div>

            {/* Right: Learner Info */}
            <div className="space-y-2.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-textSecondary">
                Learner Credentials
              </h4>
              <div className="flex items-center gap-2 text-brand-navy font-medium">
                <User size={14} className="text-brand-lavender" />
                <span>{enrolment.learner?.fullName}</span>
              </div>
              <div className="flex items-center gap-2 text-brand-textSecondary">
                <Mail size={14} className="text-brand-lavender" />
                <span>{enrolment.learner?.email}</span>
              </div>
              <div className="flex items-center gap-2 text-brand-textSecondary">
                <Phone size={14} className="text-brand-lavender" />
                <span>+91 {enrolment.learner?.phone}</span>
              </div>
              <div className="text-[11px] text-brand-textSecondary">
                Status: <strong className="text-brand-navy">{enrolment.learner?.qualification}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/my-learning"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all focus:ring-4 focus:ring-brand-lightLavender"
          >
            <BookOpen size={17} />
            <span>Go to My Learning Dashboard</span>
          </Link>

          <Link
            to="/courses"
            className="w-full sm:w-auto px-6 py-3.5 bg-brand-bg hover:bg-brand-border/60 text-brand-navy font-semibold text-sm rounded-xl border border-brand-border transition-colors"
          >
            <span>Browse More Courses</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
