import React from 'react';
import "./Home.css";
import CarouselContainer from './component/CarouselContainer';


function Home() {
  return (
    <div className="Home">
        <div classname="home__container">

            <div className="home__carousel">
            <CarouselContainer />
            </div>
            
            <div className="home__row">


            </div>

            <div classname="home__row">


            </div>

            

            <div classname="home__row">

            </div>
            
        </div>
    </div>
  )
}

export default Home