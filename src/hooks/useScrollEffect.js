import { useState, useEffect } from 'react';
import { useScrollPosition } from './useScrollPosition';

export const useScrollEffect = (positionStart, positionEnd) => {
  const { scrollPosition } = useScrollPosition();
  const [exposedClass, setExposedClass] = useState('');

  const condition =
    scrollPosition >= positionStart && scrollPosition < positionEnd;

  useEffect(() => {
    if (condition) {
      //console.log('class exposed');
      setExposedClass('exposed');
    } else {
      //console.log('class notExposed');
      setExposedClass('notExposed');
    }
  }, [condition]);

  return { exposedClass };
};
