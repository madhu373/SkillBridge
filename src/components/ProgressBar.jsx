import React from 'react';

export const ProgressBar = ({ progress = 0, showLabel = true, height = 'h-2.5', labelSuffix = '% Complete' }) => {
  const clamped = Math.min(100, Math.max(0, Math.round(progress)));
  const isComplete = clamped === 100;

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5 text-xs font-semibold">
          <span className="text-brand-textSecondary">Progress</span>
          <span className={isComplete ? "text-brand-success font-bold" : "text-brand-navy"}>
            {clamped}{labelSuffix}
          </span>
        </div>
      )}
      <div
        className={`w-full bg-brand-border rounded-full overflow-hidden ${height}`}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            isComplete
              ? 'bg-brand-success'
              : 'bg-gradient-to-r from-brand-lavender to-brand-navy'
          }`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};
