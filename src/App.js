import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Submenu from "./components/Submenu";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";
import Form from "./pages/Form";
import ErrorPage from "./pages/Error";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Submenu />
			<Sidebar></Sidebar>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="about" element={<About></About>} />
				<Route path="comingSoon" element={<ComingSoon></ComingSoon>} />
				<Route path="form" element={<Form></Form>} />
				<Route path="*" element={<ErrorPage></ErrorPage>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
