import React from 'react';
import { Star } from 'lucide-react';

export const RatingStars = ({ rating = 4.8, count, size = 16, showScore = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;

  return (
    <div className="flex items-center gap-1.5" aria-label={`Rating: ${rating} out of 5 stars`}>
      <div className="flex items-center text-amber-400">
        {[...Array(5)].map((_, i) => {
          const isFilled = i < fullStars;
          const isHalf = i === fullStars && hasHalfStar;
          return (
            <Star
              key={i}
              size={size}
              className={`${
                isFilled
                  ? 'fill-amber-400 text-amber-400'
                  : isHalf
                  ? 'fill-amber-300 text-amber-400'
                  : 'text-gray-300'
              }`}
            />
          );
        })}
      </div>
      {showScore && (
        <span className="font-semibold text-brand-navy text-sm">{rating.toFixed(1)}</span>
      )}
      {count && (
        <span className="text-brand-textSecondary text-xs">({count.toLocaleString()})</span>
      )}
    </div>
  );
};
