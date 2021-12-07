import React from "react";

import Hero from "./pages/Hero/Hero";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav/Nav";

import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route exact path="/ian-mason-portfolio" element={<Hero />} />
          <Route
            exact
            path="ian-mason-portfolio/projects"
            element={<Projects />}
          />
          <Route
            exact
            path="ian-mason-portfolio/projects/:id"
            element={<ProjectDetail />}
          />
          <Route exact path="ian-mason-portfolio/about" element={<About />} />
          <Route
            exact
            path="ian-mason-portfolio/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
