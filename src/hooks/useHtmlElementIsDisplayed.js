import { useState, useEffect } from 'react';

export const useHtmlElementIsDisplayed = (
  htmlElementRef,
  tolerance,
  defaultValue = false,
) => {
  const [isDisplayed, setIsDisplayed] = useState(defaultValue);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    const newIsDisplayed =
      scrollPosition >= htmlElementRef.current.offsetTop &&
      scrollPosition <
        htmlElementRef.current.offsetTop +
          htmlElementRef.current.offsetHeight -
          tolerance;

    //console.log(scrollPosition, newIsDisplayed, htmlElementRef.current.id);

    setIsDisplayed(newIsDisplayed);
  };

  return { isDisplayed };
};
