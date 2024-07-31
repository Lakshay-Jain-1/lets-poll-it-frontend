import { useState } from 'react';
import Dashboard from './modules/dashboard/pages/DashBoard';
import { ChatBox } from './shared/components/ChatBox';
import LandingPage from './modules/landing/pages/LandingPage';
import Poll from './modules/poll/pages/poll';
import { RoutingProvider } from './context/Routing';
import ParticlesComponent from './modules/particle/components/Particle';

function App() {
  return (
    <>
    
    <RoutingProvider>
      {/* Route 1 - LandingPage  Route 2 - Dashboard ChatBox  Route 3 - Poll */}
      <LandingPage />
      <Dashboard />
      <Poll />
    </RoutingProvider>

    <ParticlesComponent id="particles"/>
    <ChatBox />
    </>
  );
}

export default App;
