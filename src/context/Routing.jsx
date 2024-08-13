import React, { createContext, useState } from 'react';

const Routing = createContext();

const RoutingProvider = ({children}) => {
  
  const [displayLanding, setDisplayLanding] = useState(true);
  const [displayDashboard, setDisplayDashboard] = useState(false);
  const [displayPoll, setDisplayPoll] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <Routing.Provider value={{ displayLanding, setDisplayLanding, displayDashboard, setDisplayDashboard, displayPoll, setDisplayPoll,login,setLogin,signup,setSignup }}>
      {children}
    </Routing.Provider>
  );
};

export { Routing, RoutingProvider };