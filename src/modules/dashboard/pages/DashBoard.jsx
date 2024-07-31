import * as React from 'react';
import Questions from '../components/Questions';
import { Create } from '../components/Create';
import ParticlesComponent from "../../particle/components/Particle";


function Dashboard() {


  return (
    <div style={{ position: "relative" }}>
       <ParticlesComponent id="particles" />
      <Create />
      <Questions />

    </div>
  )
}


export default Dashboard

