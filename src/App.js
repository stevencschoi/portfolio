import React from 'react';
import Header from './components/Header';
import FadeInSection from './components/FadeInSection';
import Home from './components/Home';
import Footer from './components/Footer';

import { DisplayContextProvider } from './components/context/DisplayContext';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <DisplayContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <FadeInSection>
            <Footer />
          </FadeInSection>
        </DisplayContextProvider>
      </div>
    </Router>
  );
};

export default App;
