import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Slider from "./components/Slider";
function App() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Hero />
			<Submenu />
			<Slider />
		</>
	);
}

export default App;
