import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";

import Review from "./components/Review";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="dishes">
          <Dishes />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="menu">
          <Menu />
        </div>

        <div id="review">
          <Review />
        </div>

        <div id="contact">
          <Contact />
        </div>
        
      </main>

      <Footer />
    </div>
  );
};

export default App;