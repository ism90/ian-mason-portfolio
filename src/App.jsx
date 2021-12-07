import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
