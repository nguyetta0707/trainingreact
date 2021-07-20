import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main';


function App() {
  return (
    <div className= "app-container">
      <div className="item-app-container item-header"><Header/></div>
      <div className="item-app-container item-main"><Main/></div>
    </div>
  );
}

export default App;

