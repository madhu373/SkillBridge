import React from 'react';
import { RotateCcw, Filter, Check, Star } from 'lucide-react';
import { CATEGORIES_LIST } from '../data/coursesData';
import { useLanguage } from '../context/LanguageContext';

export const FilterSidebar = ({
  selectedCategory,
  onSelectCategory,
  selectedLevel,
  onSelectLevel,
  selectedPrice,
  onSelectPrice,
  selectedDuration,
  onSelectDuration,
  selectedRating,
  onSelectRating,
  onResetFilters,
  activeFilterCount
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-card space-y-6 card-accessible">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-brand-navy" />
          <h2 className="font-bold text-brand-navy font-poppins text-base">
            {t('explore.filterHeading')}
          </h2>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-bold bg-brand-lightLavender text-brand-navy rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-xs font-semibold text-brand-textSecondary hover:text-brand-navy transition-colors focus:outline-none"
            aria-label="Reset all filters"
          >
            <RotateCcw size={12} />
            <span>{t('explore.clearAll')}</span>
          </button>
        )}
      </div>

      {/* 1. Category Filter */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-wider text-brand-navy font-poppins block">
          {t('explore.categoryFilter')}
        </label>
        <div className="space-y-1.5">
          <button
            type="button"
            onClick={() => onSelectCategory('All')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left ${
              selectedCategory === 'All'
                ? 'bg-brand-navy text-white font-bold'
                : 'text-brand-textPrimary hover:bg-brand-bg'
            }`}
          >
            <span>All Categories</span>
            {selectedCategory === 'All' && <Check size={14} />}
          </button>
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left ${
                selectedCategory === cat.id
                  ? 'bg-brand-navy text-white font-bold'
                  : 'text-brand-textPrimary hover:bg-brand-bg'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-brand-bg text-brand-textSecondary'
              }`}>
                {cat.courseCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Difficulty Level */}
      <div className="space-y-3 pt-4 border-t border-brand-border/60">
        <label className="text-xs font-bold uppercase tracking-wider text-brand-navy font-poppins block">
          {t('explore.levelFilter')}
        </label>
        <div className="space-y-1.5">
          {[
            { id: 'All', label: t('explore.allLevels') },
            { id: 'Beginner', label: 'Beginner' },
            { id: 'Intermediate', label: 'Intermediate' },
            { id: 'Advanced', label: 'Advanced' }
          ].map((lvl) => (
            <button
              key={lvl.id}
              type="button"
              onClick={() => onSelectLevel(lvl.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left ${
                selectedLevel === lvl.id
                  ? 'bg-brand-lightLavender text-brand-navy font-bold'
                  : 'text-brand-textPrimary hover:bg-brand-bg'
              }`}
            >
              <span>{lvl.label}</span>
              {selectedLevel === lvl.id && <Check size={14} className="text-brand-navy" />}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Price Filter */}
      <div className="space-y-3 pt-4 border-t border-brand-border/60">
        <label className="text-xs font-bold uppercase tracking-wider text-brand-navy font-poppins block">
          {t('explore.priceFilter')}
        </label>
        <div className="space-y-1.5">
          {[
            { id: 'All', label: t('explore.allPrices') },
            { id: 'under2500', label: t('explore.freeUnder2000') },
            { id: '2500to3500', label: t('explore.price2500to3500') },
            { id: 'above3500', label: t('explore.priceAbove3500') }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectPrice(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left ${
                selectedPrice === item.id
                  ? 'bg-brand-lightLavender text-brand-navy font-bold'
                  : 'text-brand-textPrimary hover:bg-brand-bg'
              }`}
            >
              <span>{item.label}</span>
              {selectedPrice === item.id && <Check size={14} className="text-brand-navy" />}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Duration Filter */}
      <div className="space-y-3 pt-4 border-t border-brand-border/60">
        <label className="text-xs font-bold uppercase tracking-wider text-brand-navy font-poppins block">
          {t('explore.durationFilter')}
        </label>
        <div className="space-y-1.5">
          {[
            { id: 'All', label: t('explore.allDurations') },
            { id: 'short', label: t('explore.shortDuration') },
            { id: 'long', label: t('explore.longDuration') }
          ].map((dur) => (
            <button
              key={dur.id}
              type="button"
              onClick={() => onSelectDuration(dur.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left ${
                selectedDuration === dur.id
                  ? 'bg-brand-lightLavender text-brand-navy font-bold'
                  : 'text-brand-textPrimary hover:bg-brand-bg'
              }`}
            >
              <span>{dur.label}</span>
              {selectedDuration === dur.id && <Check size={14} className="text-brand-navy" />}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Rating Filter */}
      <div className="space-y-3 pt-4 border-t border-brand-border/60">
        <label className="text-xs font-bold uppercase tracking-wider text-brand-navy font-poppins block">
          {t('explore.ratingFilter')}
        </label>
        <div className="space-y-1.5">
          {[
            { id: 'All', label: t('explore.anyRating') },
            { id: '4.8', label: t('explore.rating4Plus') },
            { id: '4.7', label: t('explore.rating45Plus') }
          ].map((rt) => (
            <button
              key={rt.id}
              type="button"
              onClick={() => onSelectRating(rt.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left ${
                selectedRating === rt.id
                  ? 'bg-brand-lightLavender text-brand-navy font-bold'
                  : 'text-brand-textPrimary hover:bg-brand-bg'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Star size={13} className="text-amber-400 fill-amber-400" />
                {rt.label}
              </span>
              {selectedRating === rt.id && <Check size={14} className="text-brand-navy" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
