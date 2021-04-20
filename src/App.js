import React from 'react';
import './App.css';
import AppHeader from './pages/header';
import AppBody from './pages/appBody';
import Component from './pages/banner';
import AppFooter from './pages/footer';
// import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Component />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
