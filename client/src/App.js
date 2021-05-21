import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
  
  return (
    <div >
      {/* routes to be set here, so navbar need to be called only once. */}
      <Navbar />
      <Home />
      
    </div>
  );
}

export default App;
