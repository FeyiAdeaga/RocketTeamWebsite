import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// Pages
import Homepage from "./pages/homepage/home";
import Aboutpage from "./pages/aboutpage/about";
import Contactpage from "./pages/contactpage/contact";
import Missionpage from "./pages/missionpage/mission";
import Accomplishmentpage from "./pages/accomplishment-page/accomplishment";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/mission" element={<Missionpage />} />
        <Route path="/accomplishments" element={<Accomplishmentpage />} />
      </Routes>
    </div>
  );
}

export default App;
