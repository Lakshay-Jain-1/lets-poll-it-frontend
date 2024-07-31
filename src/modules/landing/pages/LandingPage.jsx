import React, { useContext, useEffect } from "react";
import Header from "../../../shared/components/Header";
import Landing from "../components/Landing";
import ParticlesComponent from "../../particle/components/Particle";
import { Routing } from "../../../context/Routing";


const LandingPage = () => {
  const {displayLanding,setDisplayLanding, setDisplayDashboard,  setDisplayPoll}=useContext(Routing)
  useEffect(()=>{
   if(localStorage.getItem("poll")){
       setDisplayLanding(false)
       setDisplayDashboard(false)
       setDisplayPoll(true)
   }
  },[])
  return (
    <div style={{display:displayLanding?"block":"none"}}>
    
      <Header />
      <Landing/>
    </div>
  );
};

export default LandingPage;
