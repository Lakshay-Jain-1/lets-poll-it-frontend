import React from "react";
import Header from "../../../shared/components/Header";
import Landing from "../components/Landing";
import ParticlesComponent from "../../particle/components/Particle";

const LandingPage = () => {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <Header />
      <Landing/>
    </div>
  );
};

export default LandingPage;
