import * as React from 'react';
import Dashboard from './modules/dashboard/pages/DashBoard';
import { ChatBox } from './shared/components/ChatBox';
import LandingPage from './modules/landing/pages/LandingPage';
import Poll from './modules/poll/pages/poll';


function App() {


  return (
    <>
      {/* Ismein apna vala chatbox hatake mere vala ChatBox daal diyooo
          <LandingPage />    tera component ka maine naam change kar diya tha to landing page 
      */}
      
      {/* isske dashboard mein star vala diyoo shayyad achha lage   */}
      <Dashboard />
      {/* This Component Css ko sexy kar diyooo */}
      <ChatBox />  
      <Poll/>
    </>
  )
}


export default App

