import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import LatestProject from "./LatestProject";
import Footer from "../component/Footer";
import BackToTop from "../component/Backtotop";

import Reviews from "../component/Reviews";
import Contact from "../component/Contact";
const Home = () => {
  return (
    <div>
      <BackToTop />
      <Hero />
      <About />

      <Services />
      <LatestProject />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
