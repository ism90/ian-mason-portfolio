import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav"
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
