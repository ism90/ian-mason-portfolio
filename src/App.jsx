import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Hero from "./pages/Hero/Hero";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav/Nav";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

import "./App.scss";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
};

export default App;
