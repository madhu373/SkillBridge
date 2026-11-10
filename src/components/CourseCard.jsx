import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, BarChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { RatingStars } from './RatingStars';
import { Badge } from './Badge';
import { useEnrolment } from '../context/EnrolmentContext';
import { useLanguage } from '../context/LanguageContext';

export const CourseCard = ({ course }) => {
  const { isEnrolled } = useEnrolment();
  const { t, lang } = useLanguage();
  const navigate = useNavigate();

  const enrolled = isEnrolled(course.id);
  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const getLevelVariant = (lvl) => {
    switch (lvl) {
      case 'Beginner':
        return 'levelBeginner';
      case 'Intermediate':
        return 'levelIntermediate';
      case 'Advanced':
        return 'levelAdvanced';
      default:
        return 'default';
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-brand-border shadow-card hover:shadow-soft-hover transition-all duration-300 flex flex-col overflow-hidden relative card-accessible">
      {/* Top Image & Badges */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-navy/10">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <Badge variant="primary" size="xs">
            {course.category}
          </Badge>
          {course.badge && (
            <Badge variant="lavender" size="xs">
              {course.badge}
            </Badge>
          )}
        </div>

        {/* Enrolled Badge if already enrolled */}
        {enrolled && (
          <div className="absolute top-3 right-3 z-10">
            <span className="flex items-center gap-1 px-2.5 py-1 bg-brand-success text-white text-xs font-semibold rounded-full shadow-md">
              <CheckCircle2 size={13} />
              <span>Enrolled</span>
            </span>
          </div>
        )}

        {/* Duration & Level Pill at bottom of image */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 font-medium z-10 drop-shadow">
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
            <Clock size={12} />
            <span>{course.duration}</span>
          </span>
          <Badge variant={getLevelVariant(course.level)} size="xs" className="backdrop-blur-md bg-white/90 text-brand-navy font-bold">
            {course.level}
          </Badge>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="mb-2">
            <RatingStars rating={course.rating} count={course.reviewCount} size={14} />
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-brand-navy font-poppins leading-snug line-clamp-2 group-hover:text-brand-lavender transition-colors mb-2">
            <Link to={`/courses/${course.id}`} className="focus:outline-none">
              {course.title}
            </Link>
          </h3>

          {/* Subtitle / Description */}
          <p className="text-xs text-brand-textSecondary line-clamp-2 mb-4 leading-relaxed">
            {course.subtitle || course.description}
          </p>

          {/* Instructor snippet */}
          <div className="flex items-center gap-2.5 pb-4 border-b border-brand-border/60">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-7 h-7 rounded-full object-cover border border-brand-border"
            />
            <div className="truncate">
              <p className="text-xs font-medium text-brand-navy truncate">
                {course.instructor.name}
              </p>
              <p className="text-[10px] text-brand-textSecondary truncate">
                {course.instructor.role.split('•')[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-brand-navy font-poppins">
                ₹{course.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-brand-textSecondary line-through">
                ₹{course.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[10px] font-bold text-brand-success bg-emerald-50 px-1.5 py-0.5 rounded">
              {discountPercent}% OFF
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              to={`/courses/${course.id}`}
              className="px-3 py-2 text-xs font-semibold text-brand-navy bg-brand-bg hover:bg-brand-border/80 border border-brand-border rounded-xl transition-all"
              aria-label={`View details for ${course.title}`}
            >
              {t('courseCard.details')}
            </Link>
            
            {enrolled ? (
              <Link
                to="/my-learning"
                className="px-3 py-2 text-xs font-semibold text-white bg-brand-success hover:bg-brand-success/90 rounded-xl transition-all shadow-sm flex items-center gap-1"
              >
                <span>Continue</span>
              </Link>
            ) : (
              <Link
                to={`/enrol?course=${course.id}`}
                className="px-3 py-2 text-xs font-bold text-white bg-brand-navy hover:bg-brand-navy/90 rounded-xl transition-all shadow-sm flex items-center gap-1 group/btn"
                aria-label={`Enrol in ${course.title}`}
              >
                <span>{t('courseCard.enrol')}</span>
                <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
