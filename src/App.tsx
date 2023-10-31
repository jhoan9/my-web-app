import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import "./App.css";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
