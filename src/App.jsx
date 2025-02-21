import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/Home";
import ListOfDegrees from "./components/ListOfDegrees";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";
import Banner from "./components/common/Banner";
import Students from "./components/Students";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact2 from "./components/ContactMain";

function App() {
  useEffect(() => {
    Aos.init({
      disable: 'mobile'
    });
  }, []);
  return (
    <Router>
      <div className="">
        <Banner />
        <Header />
        <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list-of-degrees" element={<ListOfDegrees />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:id" element={<Contact2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;