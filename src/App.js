import React, { useEffect, useState } from 'react';
import { DesktopPage } from './components/DesktopPage';
import { MobilePage } from './components/MobilePage';
import { isMobile } from 'react-device-detect';

function App() {
  //const { scrollPosition } = useScrollPosition()
  return (
    <div className="App">{isMobile ? <MobilePage /> : <DesktopPage />}</div>
  );
}

export default App;
