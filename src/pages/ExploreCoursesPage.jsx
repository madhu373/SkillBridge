import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  SlidersHorizontal, 
  ArrowUpDown, 
  Search, 
  RotateCcw, 
  X, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { CourseCard } from '../components/CourseCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { SearchBar } from '../components/SearchBar';
import { useLanguage } from '../context/LanguageContext';

export const ExploreCoursesPage = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  // State
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [level, setLevel] = useState(searchParams.get('level') || 'All');
  const [priceRange, setPriceRange] = useState('All');
  const [duration, setDuration] = useState('All');
  const [minRating, setMinRating] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync with searchParams on mount or url change
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory) setCategory(urlCategory);

    const urlSearch = searchParams.get('search');
    if (urlSearch) setSearchQuery(urlSearch);
  }, [searchParams]);

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (category !== 'All') count++;
    if (level !== 'All') count++;
    if (priceRange !== 'All') count++;
    if (duration !== 'All') count++;
    if (minRating !== 'All') count++;
    if (searchQuery.trim()) count++;
    return count;
  }, [category, level, priceRange, duration, minRating, searchQuery]);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setCategory('All');
    setLevel('All');
    setPriceRange('All');
    setDuration('All');
    setMinRating('All');
    setSortBy('popular');
    setSearchParams({});
  };

  // Filtered and Sorted Courses
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      // 1. Keyword Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = course.title.toLowerCase().includes(query);
        const matchDesc = course.description.toLowerCase().includes(query) || course.subtitle.toLowerCase().includes(query);
        const matchInstructor = course.instructor.name.toLowerCase().includes(query);
        const matchCategory = course.category.toLowerCase().includes(query);
        const matchTopic = course.topic.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchInstructor && !matchCategory && !matchTopic) {
          return false;
        }
      }

      // 2. Category
      if (category !== 'All' && course.category !== category) {
        return false;
      }

      // 3. Level
      if (level !== 'All' && course.level !== level) {
        return false;
      }

      // 4. Price
      if (priceRange === 'under2500' && course.price >= 2500) {
        return false;
      }
      if (priceRange === '2500to3500' && (course.price < 2500 || course.price > 3500)) {
        return false;
      }
      if (priceRange === 'above3500' && course.price <= 3500) {
        return false;
      }

      // 5. Duration
      const weeksNum = parseInt(course.duration, 10) || 8;
      if (duration === 'short' && weeksNum > 6) {
        return false;
      }
      if (duration === 'long' && weeksNum <= 6) {
        return false;
      }

      // 6. Rating
      if (minRating !== 'All') {
        const targetRating = parseFloat(minRating);
        if (course.rating < targetRating) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        return b.enrolledCount - a.enrolledCount;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'priceLow') {
        return a.price - b.price;
      }
      if (sortBy === 'priceHigh') {
        return b.price - a.price;
      }
      return 0;
    });
  }, [searchQuery, category, level, priceRange, duration, minRating, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightLavender/60 text-brand-navy text-xs font-semibold">
          <BookOpen size={14} />
          <span>Curated Tech Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-poppins">
          {t('explore.title')}
        </h1>
        <p className="text-sm sm:text-base text-brand-textSecondary max-w-2xl">
          {t('explore.subtitle')}
        </p>
      </div>

      {/* Main Search & Control Bar */}
      <div className="bg-white p-4 rounded-2xl border border-brand-border shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:max-w-xl">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t('explore.searchPlaceholder')}
          />
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-brand-bg hover:bg-brand-border/60 text-brand-navy text-xs font-bold rounded-xl border border-brand-border transition-colors"
            aria-label="Toggle filter sidebar"
          >
            <SlidersHorizontal size={15} />
            <span>Filters ({activeFilterCount})</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-brand-textSecondary font-semibold hidden sm:inline">
              {t('explore.sortBy')}
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-brand-bg border border-brand-border text-brand-navy font-semibold text-xs rounded-xl py-2.5 pl-3 pr-8 focus:ring-2 focus:ring-brand-lavender focus:outline-none appearance-none cursor-pointer"
                aria-label="Sort courses by"
              >
                <option value="popular">{t('explore.sortPopular')}</option>
                <option value="rating">{t('explore.sortRating')}</option>
                <option value="priceLow">{t('explore.sortPriceLow')}</option>
                <option value="priceHigh">{t('explore.sortPriceHigh')}</option>
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-navy">
                <ArrowUpDown size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Chips Bar */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
          <span className="text-xs text-brand-textSecondary font-semibold">Active filters:</span>
          {category !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lightLavender text-brand-navy text-xs font-bold rounded-full">
              Category: {category}
              <button onClick={() => setCategory('All')} aria-label={`Remove category filter ${category}`}>
                <X size={13} className="hover:text-red-600" />
              </button>
            </span>
          )}
          {level !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lightLavender text-brand-navy text-xs font-bold rounded-full">
              Level: {level}
              <button onClick={() => setLevel('All')} aria-label={`Remove level filter ${level}`}>
                <X size={13} className="hover:text-red-600" />
              </button>
            </span>
          )}
          {priceRange !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lightLavender text-brand-navy text-xs font-bold rounded-full">
              Price: {priceRange}
              <button onClick={() => setPriceRange('All')} aria-label="Remove price filter">
                <X size={13} className="hover:text-red-600" />
              </button>
            </span>
          )}
          {duration !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lightLavender text-brand-navy text-xs font-bold rounded-full">
              Duration: {duration}
              <button onClick={() => setDuration('All')} aria-label="Remove duration filter">
                <X size={13} className="hover:text-red-600" />
              </button>
            </span>
          )}
          {minRating !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lightLavender text-brand-navy text-xs font-bold rounded-full">
              Rating: {minRating}★+
              <button onClick={() => setMinRating('All')} aria-label="Remove rating filter">
                <X size={13} className="hover:text-red-600" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lightLavender text-brand-navy text-xs font-bold rounded-full">
              Keyword: "{searchQuery}"
              <button onClick={() => setSearchQuery('')} aria-label="Clear search keyword">
                <X size={13} className="hover:text-red-600" />
              </button>
            </span>
          )}
          <button
            onClick={handleResetFilters}
            className="text-xs font-semibold text-brand-navy underline ml-2 hover:text-brand-lavender"
          >
            {t('explore.clearAll')}
          </button>
        </div>
      )}

      {/* Main Grid Layout: Sidebar Filters + Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left Filter Sidebar (Desktop) */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-28">
          <FilterSidebar
            selectedCategory={category}
            onSelectCategory={setCategory}
            selectedLevel={level}
            onSelectLevel={setLevel}
            selectedPrice={priceRange}
            onSelectPrice={setPriceRange}
            selectedDuration={duration}
            onSelectDuration={setDuration}
            selectedRating={minRating}
            onSelectRating={setMinRating}
            onResetFilters={handleResetFilters}
            activeFilterCount={activeFilterCount}
          />
        </aside>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 p-4 flex justify-end">
            <div className="bg-white w-full max-w-xs h-full rounded-2xl p-4 overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-brand-navy">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-lg hover:bg-brand-bg"
                >
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar
                selectedCategory={category}
                onSelectCategory={(c) => { setCategory(c); setMobileFilterOpen(false); }}
                selectedLevel={level}
                onSelectLevel={(l) => { setLevel(l); setMobileFilterOpen(false); }}
                selectedPrice={priceRange}
                onSelectPrice={(p) => { setPriceRange(p); setMobileFilterOpen(false); }}
                selectedDuration={duration}
                onSelectDuration={(d) => { setDuration(d); setMobileFilterOpen(false); }}
                selectedRating={minRating}
                onSelectRating={(r) => { setMinRating(r); setMobileFilterOpen(false); }}
                onResetFilters={() => { handleResetFilters(); setMobileFilterOpen(false); }}
                activeFilterCount={activeFilterCount}
              />
            </div>
          </div>
        )}

        {/* Right Course Results Grid */}
        <div className="lg:col-span-3 space-y-6">
          {/* Results count text */}
          <div className="flex items-center justify-between text-xs text-brand-textSecondary font-medium">
            <span>
              {t('explore.showing')}{' '}
              <strong className="text-brand-navy font-bold">{filteredCourses.length}</strong>{' '}
              {t('explore.of')}{' '}
              <strong className="text-brand-navy font-bold">{COURSES_DATA.length}</strong>{' '}
              {t('explore.courses')}
            </span>
          </div>

          {/* Courses Grid or Empty State */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            /* Friendly Empty State */
            <div className="bg-white rounded-2xl border border-brand-border p-12 text-center space-y-5 shadow-card">
              <div className="w-16 h-16 rounded-2xl bg-brand-lightLavender/60 text-brand-navy flex items-center justify-center mx-auto">
                <Search size={32} />
              </div>
              <div className="space-y-1.5 max-w-md mx-auto">
                <h3 className="text-lg font-bold text-brand-navy font-poppins">
                  {t('explore.noResultsTitle')}
                </h3>
                <p className="text-xs text-brand-textSecondary">
                  {t('explore.noResultsDesc')}
                </p>
              </div>
              <div>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy/90 transition-all shadow-sm"
                >
                  {t('explore.resetFiltersBtn')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
