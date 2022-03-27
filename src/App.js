import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from './component/CarouselContainer';


function App() {
  return (

    //BEM
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
 