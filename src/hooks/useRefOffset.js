import { useEffect, useState } from 'react';

export const useRefOffset = (sectionRef) => {
  const [sectionHeight, setSectionHeight] = useState(0);
  const [sectionOffsetPosition, setSectionOffsetPosition] = useState(0);
  const tolerance = 300;

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight);
      setSectionOffsetPosition(sectionRef.current.offsetTop);
      console.log('height', sectionRef.current.offsetHeight);
      console.log('OffsetPosition', sectionRef.current.offsetTop);
    }
  }, [sectionRef]);

  return [sectionHeight, sectionOffsetPosition, tolerance]; // Return the section height if needed
};
