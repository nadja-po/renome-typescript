import React from 'react';
import './App.css';
import Navbar from './components/organisms/Navbar/Navbar';
import Carousel from './components/organisms/Carousel/Carousel';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  )
}

export default App;
