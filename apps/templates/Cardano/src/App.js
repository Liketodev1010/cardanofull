import React from 'react';
import './App.scss';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Dashboard />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
