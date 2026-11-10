import React, { useState } from 'react';
import { PlayCircle, CheckCircle2, Clock, BookOpen, Award, Sparkles } from 'lucide-react';
import { Modal } from './Modal';
import { ProgressBar } from './ProgressBar';

export const LessonModal = ({ isOpen, onClose, course, enrolment, onUpdateProgress }) => {
  if (!course || !enrolment) return null;

  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const currentProgress = enrolment.progress || 0;

  // Flatten all lessons across modules
  const allLessons = course.curriculum.flatMap((m, mIdx) =>
    m.lessons.map((l, lIdx) => ({
      ...l,
      moduleTitle: m.module,
      overallIndex: `${mIdx + 1}.${lIdx + 1}`
    }))
  );

  const activeLesson = allLessons[activeLessonIndex] || allLessons[0];

  const handleNextLesson = () => {
    // Increment progress by step
    const step = Math.round(100 / allLessons.length);
    const newProg = Math.min(100, currentProgress + step);
    onUpdateProgress(course.id, newProg);

    if (activeLessonIndex < allLessons.length - 1) {
      setActiveLessonIndex(activeLessonIndex + 1);
    }
  };

  const handleMarkComplete = () => {
    onUpdateProgress(course.id, 100);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Interactive Classroom: ${course.title}`}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Progress Bar Header */}
        <div className="p-4 bg-brand-bg rounded-2xl border border-brand-border">
          <ProgressBar progress={currentProgress} />
          <div className="flex justify-between items-center mt-2 text-xs text-brand-textSecondary">
            <span>Module: {activeLesson.moduleTitle}</span>
            <span>Lesson {activeLessonIndex + 1} of {allLessons.length}</span>
          </div>
        </div>

        {/* Video / Interactive Player Simulation */}
        <div className="aspect-video w-full rounded-2xl bg-brand-navy flex flex-col items-center justify-center text-white relative overflow-hidden shadow-inner p-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy/90 to-brand-lavender/30" />
          <div className="relative z-10 flex flex-col items-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-brand-lightLavender mb-4 shadow-lg hover:scale-110 transition-transform cursor-pointer">
              <PlayCircle size={36} className="fill-brand-lightLavender/20" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand-lightLavender mb-1">
              Lesson {activeLesson.overallIndex} • {activeLesson.duration}
            </span>
            <h4 className="text-xl font-bold font-poppins text-white mb-2">
              {activeLesson.title}
            </h4>
            <p className="text-xs text-brand-border">
              Instructor: {course.instructor.name} ({course.instructor.role})
            </p>
          </div>
        </div>

        {/* Lesson Notes & Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="border border-brand-border rounded-2xl p-5 bg-white">
              <h5 className="font-bold text-brand-navy font-poppins text-sm mb-2 flex items-center gap-2">
                <BookOpen size={16} className="text-brand-lavender" />
                Lesson Synopsis & Objectives
              </h5>
              <p className="text-xs text-brand-textPrimary leading-relaxed mb-4">
                In this session, we investigate practical implementations. Focus on understanding the core structural design, memory usage, and how production tech stacks in Bengaluru handle this pattern at scale.
              </p>
              <div className="bg-brand-bg p-3 rounded-xl border border-brand-border/60 text-xs text-brand-navy font-mono">
                <code>// Practical Tip: Always benchmark before micro-optimizing.</code>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleNextLesson}
                disabled={currentProgress >= 100}
                className="px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy/90 transition-all flex items-center gap-2 shadow-sm disabled:opacity-50"
              >
                <CheckCircle2 size={16} className="text-brand-lightLavender" />
                <span>Mark Lesson Complete & Next</span>
              </button>

              <button
                onClick={handleMarkComplete}
                className="px-4 py-2.5 bg-brand-bg text-brand-navy border border-brand-border hover:bg-brand-border/40 text-xs font-bold rounded-xl transition-all"
              >
                Complete Full Course (100%)
              </button>
            </div>
          </div>

          {/* Quick Syllabus Nav */}
          <div className="border border-brand-border rounded-2xl p-4 bg-brand-bg/50">
            <h6 className="font-bold text-xs uppercase tracking-wider text-brand-navy mb-3 font-poppins">
              Syllabus Outline
            </h6>
            <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
              {allLessons.map((l, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLessonIndex(idx)}
                  className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    idx === activeLessonIndex
                      ? 'bg-brand-navy text-white font-bold'
                      : 'hover:bg-white text-brand-textPrimary'
                  }`}
                >
                  <span className="truncate pr-2">
                    {l.overallIndex} {l.title}
                  </span>
                  <span className="text-[10px] shrink-0 opacity-70">{l.duration}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
