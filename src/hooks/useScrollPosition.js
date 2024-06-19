import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log('scrollPosition', scrollPosition);
  }, [scrollPosition]);

  const handleScroll = () => {
    const position =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScrollPosition(position);
  };

  return { scrollPosition };
};
