import React, { createContext, useState } from 'react';

const Routing = createContext();

const RoutingProvider = ({children}) => {
  
  const [displayLanding, setDisplayLanding] = useState(true);
  const [displayDashboard, setDisplayDashboard] = useState(false);
  const [displayPoll, setDisplayPoll] = useState(false);

  return (
    <Routing.Provider value={{ displayLanding, setDisplayLanding, displayDashboard, setDisplayDashboard, displayPoll, setDisplayPoll }}>
      {children}
    </Routing.Provider>
  );
};

export { Routing, RoutingProvider };