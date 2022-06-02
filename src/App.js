import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Submenu from "./components/Submenu";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";
import Form from "./pages/Form";
import ErrorPage from "./pages/Error";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Submenu />

			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/about" element={<About></About>} />
				<Route path="/coming-soon" element={<ComingSoon></ComingSoon>} />
				<Route path="/form" element={<Form></Form>} />
				<Route path="*" element={<ErrorPage></ErrorPage>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
