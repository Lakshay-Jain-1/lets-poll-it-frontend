import {useState} from 'react';
import Dashboard from './modules/dashboard/pages/DashBoard';
import { ChatBox } from './shared/components/ChatBox';
import LandingPage from './modules/landing/pages/LandingPage';
import Poll from './modules/poll/pages/poll';
import { Routing_landingtoDashboard } from './context/Routing';


function App() {

  const [displayLanding,setDisplayLanding] = useState()
   
    {/* Route 1 - LandingPage  Route 2 - Dashboard ChatBox  Route 3 - Poll   */}
 
  return (
    <>
     <Routing_landingtoDashboard  value={{displayLanding,setDisplayLanding}} >
      {/* Ismein apna vala chatbox hatake mere vala ChatBox daal diyooo
            tera component ka maine naam change kar diya tha to landing page 
      */}
        <LandingPage /> 
      {/* isske dashboard mein star vala diyoo shayyad achha lage   */}
      {/* <Dashboard /> */}
      {/* This Component Css ko sexy kar diyooo */}
      <ChatBox /> 
        {/* This will go into different Page */}
      <Poll/>
      </Routing_landingtoDashboard>
    </>
  )
}


export default App

