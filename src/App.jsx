import Dashboard from './modules/dashboard/pages/DashBoard';
import { ChatBox } from './shared/components/ChatBox';
import LandingPage from './modules/landing/pages/LandingPage';
import { RoutingProvider } from './context/Routing';
import ParticlesComponent from './modules/particle/components/Particle';
import LetsPollit from './modules/poll/pages/LetsPollit';


function App() {

  return (
    <>

      <RoutingProvider>
        {/* Route 1 - LandingPage  Route 2 - Dashboard ChatBox  Route 3 - Poll */}
        <LandingPage />
        <Dashboard />
        <LetsPollit />
      </RoutingProvider>


      <ParticlesComponent id="particles" />
      <ChatBox />
    </>
  );
}

export default App;
