import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Mikrobi } from "./pages/mikrobi";
import { Mish } from "./pages/mish";
import { DizinfeksiyaOfis } from "./pages/dizinfeksiya-ofis";
import { DizinfeksiyaAvtomobile } from "./pages/dizinfeksiya-avtomobil";
import { DizinfeksiyaDom } from "./pages/dizinfeksiya-dom";
import { DizinfeksiyaSad } from "./pages/dizinfeksiya-sad";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Navbar />
			<Route path="/" element={<Home />} />
			<Route path="/mikrobi" element={<Mikrobi />} />
			<Route path="/mish" element={<Mish />} />
			<Route path="/dizinfeksiya-ofis" element={<DizinfeksiyaOfis />} />
			<Route path="/dizinfeksiya-avtomobile" element={<DizinfeksiyaAvtomobile />} />
			<Route path="/dizinfeksiya-dom" element={<DizinfeksiyaDom />} />
			<Route path="/dizinfeksiya-sad" element={<DizinfeksiyaSad />} />
			<Route path="/dizinfeksiya-ofis" element={<DizinfeksiyaOfis />} />

		</Routes>
	);
}

export default App;
