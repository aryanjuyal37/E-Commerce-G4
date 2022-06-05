import React from 'react';
import "./Home.css";
import Product from './Product';
import Cover from './Cover.png';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

function Home() {

  return (
    <div className="home">
        <div classname="home__container"> 
            <img
            className="home__image"
            src={Cover} alt=""
            />      

            <div className="home__row">
            <Product
            id="12345"k
            title="DRI-FIT HOODIE ‘ NIGHT FOREST ‘"
            price={6295}
            rating={5}
            image="https://superkicks.in/wp-content/uploads/2022/03/1-6.jpg?x65319"
            />
            <Product
            id="12346"
            title="WMN’S JORDAN UTILITY PANTS
            "
            price={5995}
            rating={4}
            image="https://superkicks.in/wp-content/uploads/2022/02/1-3-19-850x850.jpg"
            />
            <Product
            id="12347"
            title="WMN’S HERITAGE DIAMOND SHORTS"
            price={3295}
            rating={4}
            image="https://superkicks.in/wp-content/uploads/2022/02/22-2-1-850x850.jpg"
            />
            </div>



            <div className="home__row">
            <Product
            id="12348"
            title="JORDAN ESSENTIALS SHORT SLEEVE TEE"
            price={2895}
            rating={3}
            image="https://superkicks.in/wp-content/uploads/2022/03/1-44-850x816.jpg"
          />
          <Product
            id="12349"
            title="JORDAN HERITAGE OVERSIZED PRINTED T-SHIRT"
            price={2895}
            rating={5}
            image="https://superkicks.in/wp-content/uploads/2022/01/22-850x850.jpg"
          />
            </div>



            <div className="home__row">
            <Product
            id="12350"
            title="Nike Zoom Freak 3"
            price={14000}
            rating={5}
            image="https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-C9364600.jpg"
          />
            <Product
            id="12351"
            title="New Balance BB550"
            price={12000}
            rating={5}
            image="https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-B550SR1.jpg"
          />
            </div>


        </div>
    </div>
  )
}

export default Home