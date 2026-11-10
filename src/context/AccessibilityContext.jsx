import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [isAccessibleMode, setIsAccessibleMode] = useState(() => {
    return localStorage.getItem('skillbridge_accessible_mode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('skillbridge_accessible_mode', isAccessibleMode.toString());
    if (isAccessibleMode) {
      document.body.classList.add('accessible-mode');
    } else {
      document.body.classList.remove('accessible-mode');
    }
  }, [isAccessibleMode]);

  const toggleAccessibility = () => {
    setIsAccessibleMode((prev) => !prev);
  };

  return (
    <AccessibilityContext.Provider value={{ isAccessibleMode, toggleAccessibility }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
