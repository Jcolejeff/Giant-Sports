import React from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Submenu from "../components/Submenu";
import Slider from "../components/Slider";
import Services from "../components/Services";
import About from "./About";

const HomePage = () => {
	return (
		<>
			<Sidebar />
			<Hero />
			<Submenu />
			<Services />
			<Slider />
			<About></About>
		</>
	);
};

export default HomePage;
