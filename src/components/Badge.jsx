import React from 'react';

export const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  const variantStyles = {
    default: 'bg-brand-bg text-brand-navy border border-brand-border',
    primary: 'bg-brand-navy text-white',
    lavender: 'bg-brand-lightLavender text-brand-navy font-semibold',
    success: 'bg-emerald-50 text-brand-success border border-emerald-200 font-medium',
    accent: 'bg-purple-100 text-purple-800 font-medium',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200 font-medium',
    levelBeginner: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    levelIntermediate: 'bg-blue-50 text-blue-700 border border-blue-200',
    levelAdvanced: 'bg-purple-50 text-purple-700 border border-purple-200',
  };

  const sizeStyles = {
    xs: 'text-[11px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-medium rounded-full transition-colors ${
        variantStyles[variant] || variantStyles.default
      } ${sizeStyles[size] || sizeStyles.sm} ${className}`}
    >
      {children}
    </span>
  );
};
