import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  )
}

export default App;
