import React from 'react';
import { DesktopPage } from './components/DesktopPage';
import { MobilePage } from './components/MobilePage';
import { isMobile } from 'react-device-detect';
import './assets/css/app.css';

if (!isMobile) {
  import('./assets/css/desktop.css');
} else {
  import('./assets/css/mobile.css');
}

function App() {
  return (
    <div className="App">{isMobile ? <MobilePage /> : <DesktopPage />}</div>
  );
}

export default App;
