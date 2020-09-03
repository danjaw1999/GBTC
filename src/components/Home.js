import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";

const Home = () => {
  return (
    <div className="container">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeFourSteps />
    </div>
  );
};

export default Home;
