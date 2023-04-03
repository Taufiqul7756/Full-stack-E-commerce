import React from "react";
import Slider from "../../components/Slider/Slider";
import "../Home/Home.scss";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
}

export default Home;
