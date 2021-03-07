import React from 'react';
import './App.css';
import Navbar from './components/organisms/Navbar/index';
import Carousel from './components/organisms/Carousel/index';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  )
}

export default App;
