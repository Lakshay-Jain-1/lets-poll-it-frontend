import * as React from 'react';
import Dashboard from './modules/dashboard/pages/DashBoard';
import { ChatBox } from './shared/components/ChatBox';
import LandingPage from './modules/landing/pages/LandingPage';


function App() {


  return (
    <>
      {/* <LandingPage /> */}
      <Dashboard />
      <ChatBox />
    </>
  )
}


export default App

