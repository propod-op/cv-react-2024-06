import { Desktop } from "./components/Desktop";
import { Mobile } from "./components/Mobile";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

function App() {
	useEffect(() => {
		console.log("isMobile", isMobile);
	}, []);

	return <div className="App">{isMobile ? <Mobile /> : <Desktop />}</div>;
}

export default App;
