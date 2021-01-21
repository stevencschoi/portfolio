import React, { useState } from 'react';

const DisplayContext = React.createContext({});

const DisplayContextProvider = props => {
  const [displayData, setDisplayData] = useState({
    showModal: false,
  });

  const providerValue = { displayData, setDisplayData };

  return <DisplayContext.Provider value={providerValue}>{props.children}</DisplayContext.Provider>;
}

export { DisplayContext, DisplayContextProvider };
