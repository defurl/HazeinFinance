// FILE: src/components/FadeInSection.jsx
// Description: A reusable component to apply fade-in animation when an element scrolls into view.

import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, id }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null); // Initialize with null

  useEffect(() => {
    const currentRef = domRef.current; // Capture current value of ref
    if (!currentRef) return; // Guard clause if ref is not set

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing after visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup observer
      }
    };
  }, []); // Run once on mount

  return (
    <div
      id={id} // Ensure id is passed for section navigation if needed at this level
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
