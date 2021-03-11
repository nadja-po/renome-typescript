import React from 'react';
import './App.scss';
import Navbar from './components/organisms/Navbar';
import Carousel from './components/organisms/Carousel';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  )
}

export default App;
