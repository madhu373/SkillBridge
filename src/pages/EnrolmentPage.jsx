import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowLeft, 
  HelpCircle, 
  Sparkles, 
  AlertCircle,
  Clock,
  BookOpen,
  Tag
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { useEnrolment } from '../context/EnrolmentContext';

export const EnrolmentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { enrolInCourse, isEnrolled } = useEnrolment();

  const preselectedCourseId = searchParams.get('course') || COURSES_DATA[0].id;
  const [selectedCourseId, setSelectedCourseId] = useState(preselectedCourseId);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [useVoucher, setUseVoucher] = useState(false);
  const [voucherCode, setVoucherCode] = useState('INTERN-100');
  const [voucherApplied, setVoucherApplied] = useState(true);

  // Errors & Touched
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCourse = COURSES_DATA.find((c) => c.id === selectedCourseId) || COURSES_DATA[0];

  // Real-time validation
  const validate = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full legal name.';
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Please provide a mobile contact number.';
    } else if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!qualification) {
      newErrors.qualification = 'Please select your current educational or professional background.';
    }

    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      qualification: true,
    });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      const learnerData = {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        qualification,
      };

      // Simulate network latency for realistic feel
      setTimeout(() => {
        const enrolmentRecord = enrolInCourse(selectedCourse.id, learnerData);
        setIsSubmitting(false);
        navigate('/enrolment-confirmation', {
          state: {
            enrolment: enrolmentRecord,
            course: selectedCourse,
          },
        });
      }, 700);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
      {/* Back button */}
      <div className="mb-6">
        <Link
          to={`/courses/${selectedCourse.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-textSecondary hover:text-brand-navy transition-colors"
        >
          <ArrowLeft size={15} />
          <span>Back to Course Details</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lightLavender/60 text-brand-navy rounded-full text-xs font-semibold">
            <Lock size={12} />
            <span>Frictionless Single-Step Enrolment</span>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-navy font-poppins">
            Complete Your Enrolment
          </h1>
          <p className="text-xs sm:text-sm text-brand-textSecondary">
            You are 60 seconds away from starting your industry-grade upskilling journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-card card-accessible">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Course Selector Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="course-select" className="block text-xs font-bold text-brand-navy font-poppins">
                  Selected Course <span className="text-red-500">*</span>
                </label>
                <select
                  id="course-select"
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-sm font-semibold text-brand-navy focus:ring-2 focus:ring-brand-lavender focus:outline-none"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} (₹{c.price.toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-brand-textSecondary">
                  You can change your target course track anytime before finalizing.
                </p>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="full-name" className="block text-xs font-bold text-brand-navy font-poppins">
                    Full Legal Name <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[10px] text-brand-textSecondary">Appears on Certificate</span>
                </div>
                <input
                  id="full-name"
                  type="text"
                  placeholder="e.g. Madhumithra R."
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (touched.fullName) setErrors(validate());
                  }}
                  onBlur={() => handleBlur('fullName')}
                  aria-invalid={touched.fullName && !!errors.fullName}
                  aria-describedby="full-name-error"
                  className={`w-full px-4 py-3 bg-brand-bg rounded-xl text-sm text-brand-navy border focus:outline-none focus:ring-2 ${
                    touched.fullName && errors.fullName
                      ? 'border-red-400 focus:ring-red-300'
                      : 'border-brand-border focus:ring-brand-lavender'
                  }`}
                />
                {touched.fullName && errors.fullName && (
                  <p id="full-name-error" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle size={13} />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email-addr" className="block text-xs font-bold text-brand-navy font-poppins">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email-addr"
                  type="email"
                  placeholder="e.g. learner@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched.email) setErrors(validate());
                  }}
                  onBlur={() => handleBlur('email')}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby="email-error"
                  className={`w-full px-4 py-3 bg-brand-bg rounded-xl text-sm text-brand-navy border focus:outline-none focus:ring-2 ${
                    touched.email && errors.email
                      ? 'border-red-400 focus:ring-red-300'
                      : 'border-brand-border focus:ring-brand-lavender'
                  }`}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle size={13} />
                    <span>{errors.email}</span>
                  </p>
                )}
                <p className="text-[11px] text-brand-textSecondary">
                  Course credentials and progress reports will be sent here.
                </p>
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label htmlFor="phone-num" className="block text-xs font-bold text-brand-navy font-poppins">
                  Mobile Number (India +91) <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-bold text-brand-textSecondary pointer-events-none">
                    +91
                  </span>
                  <input
                    id="phone-num"
                    type="tel"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (touched.phone) setErrors(validate());
                    }}
                    onBlur={() => handleBlur('phone')}
                    aria-invalid={touched.phone && !!errors.phone}
                    aria-describedby="phone-error"
                    className={`w-full pl-12 pr-4 py-3 bg-brand-bg rounded-xl text-sm text-brand-navy border focus:outline-none focus:ring-2 ${
                      touched.phone && errors.phone
                        ? 'border-red-400 focus:ring-red-300'
                        : 'border-brand-border focus:ring-brand-lavender'
                    }`}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p id="phone-error" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle size={13} />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Educational Qualification */}
              <div className="space-y-1.5">
                <label htmlFor="qualification-select" className="block text-xs font-bold text-brand-navy font-poppins">
                  Educational Qualification / Status <span className="text-red-500">*</span>
                </label>
                <select
                  id="qualification-select"
                  value={qualification}
                  onChange={(e) => {
                    setQualification(e.target.value);
                    if (touched.qualification) setErrors(validate());
                  }}
                  onBlur={() => handleBlur('qualification')}
                  aria-invalid={touched.qualification && !!errors.qualification}
                  aria-describedby="qualification-error"
                  className={`w-full px-4 py-3 bg-brand-bg rounded-xl text-sm text-brand-navy border focus:outline-none focus:ring-2 ${
                    touched.qualification && errors.qualification
                      ? 'border-red-400 focus:ring-red-300'
                      : 'border-brand-border focus:ring-brand-lavender'
                  }`}
                >
                  <option value="">Select your background...</option>
                  <option value="Undergraduate (1st / 2nd Year)">Undergraduate Student (1st / 2nd Year)</option>
                  <option value="Undergraduate (Final Year)">Undergraduate Student (Final Year)</option>
                  <option value="Fresh Graduate (Job Seeking)">Fresh Graduate (Actively Seeking Tech Role)</option>
                  <option value="Working Professional (0-3 Yrs)">Working Professional (0 - 3 Years Experience)</option>
                  <option value="Senior Professional (3+ Yrs)">Senior Professional (3+ Years Experience)</option>
                  <option value="Other">Other / Career Transitioner</option>
                </select>
                {touched.qualification && errors.qualification && (
                  <p id="qualification-error" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle size={13} />
                    <span>{errors.qualification}</span>
                  </p>
                )}
              </div>

              {/* Privacy Notice */}
              <div className="p-3.5 bg-brand-bg rounded-xl border border-brand-border text-xs text-brand-textSecondary flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-brand-success shrink-0 mt-0.5" />
                <p>
                  <strong>Privacy Pledge:</strong> Your personal information is encrypted and strictly used for academic credential verification. Zero spam, zero third-party data sharing.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold text-base rounded-2xl shadow-lg transition-all focus:ring-4 focus:ring-brand-lightLavender disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Processing Enrolment...</span>
                  </span>
                ) : (
                  <span>Complete Enrolment</span>
                )}
              </button>
            </form>
          </div>

          {/* Right Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-brand-border p-6 shadow-card space-y-6 card-accessible">
              <h3 className="font-bold text-brand-navy font-poppins text-base pb-3 border-b border-brand-border">
                Order Summary
              </h3>

              {/* Course Card Preview */}
              <div className="flex gap-4">
                <img
                  src={selectedCourse.thumbnail}
                  alt={selectedCourse.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0 border border-brand-border"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-brand-navy uppercase bg-brand-lightLavender/70 px-2 py-0.5 rounded">
                    {selectedCourse.category}
                  </span>
                  <h4 className="text-sm font-bold text-brand-navy font-poppins line-clamp-2">
                    {selectedCourse.title}
                  </h4>
                  <p className="text-xs text-brand-textSecondary">
                    By {selectedCourse.instructor.name}
                  </p>
                </div>
              </div>

              {/* Academic Demo Voucher Box */}
              <div className="p-4 bg-brand-lightLavender/30 border border-brand-lavender/40 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                    <Tag size={14} className="text-brand-navy" />
                    Academic Internship Voucher
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-success bg-white px-2 py-0.5 rounded border border-emerald-200">
                    Applied ✓
                  </span>
                </div>
                <p className="text-[11px] text-brand-textSecondary">
                  Voucher code <code className="font-bold text-brand-navy font-mono">INTERN-100</code> grants 100% scholarship for demo evaluation.
                </p>
              </div>

              {/* Price Calculation breakdown */}
              <div className="space-y-2.5 text-xs text-brand-textSecondary pt-2">
                <div className="flex justify-between">
                  <span>Standard Tuition Fee:</span>
                  <span className="text-brand-navy font-semibold">₹{selectedCourse.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Platform Launch Subsidy:</span>
                  <span>-₹{(selectedCourse.originalPrice - selectedCourse.price).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18% Included):</span>
                  <span className="text-brand-navy font-semibold">₹0</span>
                </div>
                {voucherApplied && (
                  <div className="flex justify-between text-brand-success font-bold">
                    <span>Internship Demo Waiver (100%):</span>
                    <span>-₹{selectedCourse.price.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="pt-3 border-t border-brand-border flex justify-between items-baseline text-brand-navy">
                  <span className="font-bold text-sm">Total Payable:</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold font-poppins text-brand-navy">
                      ₹0
                    </span>
                    <span className="text-[10px] text-brand-success font-semibold block">
                      Demo Mode • Zero Payment Needed
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Pillars */}
              <div className="pt-4 border-t border-brand-border space-y-2 text-[11px] text-brand-textSecondary">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-success shrink-0" />
                  <span>Immediate access to live cohorts & materials</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-success shrink-0" />
                  <span>Verifiable certificate upon curriculum completion</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
