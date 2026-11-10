import React, { createContext, useContext, useState, useEffect } from 'react';
import { COURSES_DATA } from '../data/coursesData';

const EnrolmentContext = createContext();

const INITIAL_DEMO_ENROLMENTS = [
  {
    enrolmentId: "SB-2026-7841",
    courseId: "python-programming-mastery",
    enrolledAt: "2026-10-15T10:30:00Z",
    progress: 45,
    completedLessons: 6,
    totalLessons: 16,
    lastAccessed: "Yesterday",
    learner: {
      fullName: "Madhumithra R.",
      email: "madhumithra@example.com",
      phone: "+91 98765 43210",
      qualification: "Undergraduate (Final Year)"
    }
  },
  {
    enrolmentId: "SB-2026-5219",
    courseId: "uiux-design-systems-figma",
    enrolledAt: "2026-09-02T14:15:00Z",
    progress: 100,
    completedLessons: 12,
    totalLessons: 12,
    lastAccessed: "Completed Oct 2026",
    learner: {
      fullName: "Madhumithra R.",
      email: "madhumithra@example.com",
      phone: "+91 98765 43210",
      qualification: "Undergraduate (Final Year)"
    }
  }
];

export const EnrolmentProvider = ({ children }) => {
  const [enrolments, setEnrolments] = useState(() => {
    const saved = localStorage.getItem('skillbridge_enrolments');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved enrolments", e);
      }
    }
    return INITIAL_DEMO_ENROLMENTS;
  });

  const [lastEnrolment, setLastEnrolment] = useState(() => {
    const saved = localStorage.getItem('skillbridge_last_enrolment');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem('skillbridge_enrolments', JSON.stringify(enrolments));
  }, [enrolments]);

  useEffect(() => {
    if (lastEnrolment) {
      localStorage.setItem('skillbridge_last_enrolment', JSON.stringify(lastEnrolment));
    }
  }, [lastEnrolment]);

  const isEnrolled = (courseId) => {
    return enrolments.some((item) => item.courseId === courseId);
  };

  const getEnrolment = (courseId) => {
    return enrolments.find((item) => item.courseId === courseId);
  };

  const enrolInCourse = (courseId, learnerData) => {
    const course = COURSES_DATA.find((c) => c.id === courseId);
    if (!course) return null;

    // Check if already enrolled
    const existing = enrolments.find((item) => item.courseId === courseId);
    if (existing) {
      setLastEnrolment(existing);
      return existing;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newEnrolment = {
      enrolmentId: `SB-2026-${randomSuffix}`,
      courseId: course.id,
      courseTitle: course.title,
      enrolledAt: new Date().toISOString(),
      progress: 0,
      completedLessons: 0,
      totalLessons: course.curriculum.reduce((acc, m) => acc + m.lessons.length, 0),
      lastAccessed: "Just now",
      learner: learnerData
    };

    setEnrolments((prev) => [newEnrolment, ...prev]);
    setLastEnrolment(newEnrolment);
    return newEnrolment;
  };

  const updateProgress = (courseId, newPercentage) => {
    setEnrolments((prev) =>
      prev.map((item) => {
        if (item.courseId === courseId) {
          const clamped = Math.min(100, Math.max(0, newPercentage));
          const completedCount = Math.round((clamped / 100) * (item.totalLessons || 10));
          return {
            ...item,
            progress: clamped,
            completedLessons: completedCount,
            lastAccessed: "Just now"
          };
        }
        return item;
      })
    );
  };

  return (
    <EnrolmentContext.Provider
      value={{
        enrolments,
        lastEnrolment,
        isEnrolled,
        getEnrolment,
        enrolInCourse,
        updateProgress
      }}
    >
      {children}
    </EnrolmentContext.Provider>
  );
};

export const useEnrolment = () => useContext(EnrolmentContext);
