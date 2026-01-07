import { useState, useEffect, useCallback } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 200; // Account for nav height + offset
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Check if we're at the bottom of the page
    if (window.scrollY + windowHeight >= documentHeight - 50) {
      setActiveSection(sectionIds[sectionIds.length - 1]);
      return;
    }

    // Find the section that is currently most in view
    let currentSection = sectionIds[0];
    
    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        
        // If scroll position has passed this section's top, it becomes the active one
        if (scrollPosition >= sectionTop) {
          currentSection = sectionId;
        }
      }
    }
    
    setActiveSection(currentSection);
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeSection;
};
