import Dashboard from './modules/dashboard/pages/DashBoard';
import { ChatBox } from './shared/components/ChatBox';
import LandingPage from './modules/landing/pages/LandingPage';
import LetsPollit from './modules/poll/pages/LetsPollit';
import Login from './shared/components/login';
import SignUp from './shared/components/signup';
import ParticlesComponent from './shared/components/Particle';
import { Routes,Route } from "react-router"

function App() {
  
  return (
    <>

        {/* Route 1 - LandingPage  Route 2 - Dashboard ChatBox  Route 3 - Poll */}
        <Routes >
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/' element={ <LandingPage /> } />
          <Route path='/home' element={ <Dashboard /> } />
          <Route path='/poll' element={ <LetsPollit /> } />
      </Routes>

      <ParticlesComponent id="particles" />
      <ChatBox />
    </>
  );
}

export default App;
