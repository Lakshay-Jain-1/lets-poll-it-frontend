import  React ,{useContext} from 'react';
import Questions from '../components/Questions';
import { Create } from '../components/Create';
import ParticlesComponent from "../../particle/components/Particle";
import { Routing } from '../../../context/Routing';


function Dashboard() {
  const {displayDashboard}=useContext(Routing)

  return (
    <div style={{ position: "relative" , display:displayDashboard?"block":"none" }}>
      
      <Create />
      <Questions />

    </div>
  )
}


export default Dashboard

