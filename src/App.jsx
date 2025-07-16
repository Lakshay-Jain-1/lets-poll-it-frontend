import Dashboard from './modules/dashboard/pages/DashBoard';
import { ChatBox } from './shared/components/ChatBox';
import LandingPage from './modules/landing/pages/LandingPage';
import { RoutingProvider } from './context/Routing';
import LetsPollit from './modules/poll/pages/LetsPollit';
import Login from './shared/components/login';
import SignUp from './shared/components/signup';
import ParticlesComponent from './shared/components/Particle';


function App() {
  
  return (
    <>

      <RoutingProvider>
        {/* Route 1 - LandingPage  Route 2 - Dashboard ChatBox  Route 3 - Poll */}
        <Login/>
        <SignUp/>
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
