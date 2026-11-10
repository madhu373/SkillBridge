import React from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SearchBar = ({ 
  value, 
  onChange, 
  onSearch, 
  placeholder, 
  showQuickTags = false,
  onTagClick,
  className = ''
}) => {
  const { t } = useLanguage();

  const handleClear = () => {
    onChange('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(value);
  };

  const defaultPlaceholder = placeholder || t('search.placeholder');

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <label htmlFor="course-search-input" className="sr-only">
          Search courses
        </label>
        <div className="absolute left-4.5 text-brand-navy pointer-events-none">
          <Search size={20} className="text-brand-navy/70" />
        </div>
        <input
          id="course-search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={defaultPlaceholder}
          className="w-full pl-12 pr-28 py-3.5 bg-white text-brand-navy placeholder:text-brand-textSecondary text-sm md:text-base rounded-2xl border border-brand-border focus:border-brand-lavender focus:ring-4 focus:ring-brand-lightLavender/40 shadow-soft transition-all duration-200 outline-none"
        />
        <div className="absolute right-2.5 flex items-center gap-1.5">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 text-brand-textSecondary hover:text-brand-navy hover:bg-brand-border/40 rounded-lg transition-colors"
              aria-label="Clear search input"
            >
              <X size={16} />
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-brand-navy hover:bg-brand-navy/90 text-white text-xs md:text-sm font-semibold rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-brand-lavender"
          >
            {t('search.searchBtn')}
          </button>
        </div>
      </form>

      {showQuickTags && (
        <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-brand-textSecondary">
          <span className="font-semibold text-brand-navy">{t('search.quickTags')}</span>
          {['Python', 'UI/UX Design', 'Power BI', 'AWS Cloud', 'Product Management'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onTagClick && onTagClick(tag)}
              className="px-2.5 py-1 bg-white hover:bg-brand-lightLavender/60 text-brand-navy rounded-lg border border-brand-border transition-colors font-medium shadow-xs"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
