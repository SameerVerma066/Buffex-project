import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./components/Services";
import React from "react";
import OurServices from "./pages/OurServices";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Services />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServices />} />
      </Routes>
    </Router>
  );
};

export default App;
