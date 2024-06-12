import React, { useEffect, useState } from "react";

import { DesktopPage } from "./components/DesktopPage";
import { MobilePage } from "./components/MobilePage";
import { isMobile } from "react-device-detect";
// remove this after you've confir

function App() {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = document.body.scrollTop || document.documentElement.scrollTop;
		setScrollPosition(position);
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		/*console.log("scrollPosition", scrollPosition);*/
	}, [scrollPosition]);

	return <div className="App">{isMobile ? <MobilePage scrollPosition={scrollPosition} /> : <DesktopPage />}</div>;
}

export default App;
