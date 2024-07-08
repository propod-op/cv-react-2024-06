import { useState, useEffect } from 'react';
import { useScrollPosition } from './useScrollPosition';

// Ce Hook renvoi une classe 'exposed' ou 'notExposed' en fonction de la scrollPosition
export const useScrollEffect = (positionStart, positionEnd) => {
  const { scrollPosition } = useScrollPosition();
  // const [exposedClass, setExposedClass] = useState('');

  const condition =
    scrollPosition >= positionStart && scrollPosition < positionEnd;

  const exposedClass = condition ? 'exposed' : 'notExposed';

  // useEffect(() => {
  //   if (condition) {
  //     //console.log('class exposed');
  //     setExposedClass('exposed');
  //   } else {
  //     //console.log('class notExposed');
  //     setExposedClass('notExposed');
  //   }
  // }, [condition]);

  return { exposedClass };
};
