import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './container/WeatherContainer'
import Store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
