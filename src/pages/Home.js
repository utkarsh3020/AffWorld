import React from "react";
import Cards from "../components/Cards";
import Slider from "../components/Carousel/Slider";
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Slider />
      <Cards />
      <Contact />
      <Testimonial />
    </div>
  );
}

export default Home;
