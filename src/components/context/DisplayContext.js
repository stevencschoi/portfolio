import React, { useState } from 'react';
// import { projects } from '../../models';
const DisplayContext = React.createContext({});

const DisplayContextProvider = (props) => {
  const [displayData, setDisplayData] = useState({
    showNav: false,
    showModal: false,
    selectedProject: {},
  });

  const providerValue = { displayData, setDisplayData };

  return <DisplayContext.Provider value={providerValue}>{props.children}</DisplayContext.Provider>;
};

export { DisplayContext, DisplayContextProvider };
