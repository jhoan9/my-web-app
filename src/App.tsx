import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import About from "./pages/About/About";
import "./App.css";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
