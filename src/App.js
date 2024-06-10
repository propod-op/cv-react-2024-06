import { DesktopPage } from "./components/DesktopPage";
import { MobilePage } from "./components/MobilePage";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

function App() {
	const handleScroll = (event) => {
		console.log("User scrolled!");
	};

	useEffect(() => {
		console.log("isMobile", isMobile);
	}, []);

	return (
		<div className="App" onScroll={handleScroll}>
			{isMobile ? <MobilePage /> : <DesktopPage />}
		</div>
	);
}

export default App;
