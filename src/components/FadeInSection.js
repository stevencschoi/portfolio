import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = ({ name, children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const domRef = useRef();

  useEffect(() => {
    const ref = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, []);

  return (
    <section id={name} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {children}
    </section>
  );
};

export default FadeInSection;
