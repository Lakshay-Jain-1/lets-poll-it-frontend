import * as React from 'react';
import Dashboard from './modules/dashboard/pages/DashBoard';
import { ChatBox } from './shared/components/ChatBox';
import LandingPage from './modules/landing/pages/LandingPage';
import Poll from './modules/poll/pages/poll';


function App() {
   
    {/* Route 1 - LandingPage  Route 2 - Dashboard ChatBox  Route 3 - Poll   */}
 
  return (
    <>
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
    </>
  )
}


export default App

