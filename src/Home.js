import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div classname="home__container"> 
            <img
            className="home__image"
            src="https://images.unsplash.com/flagged/photo-1565106305412-e8cab493e15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            />
            <div className="home__statement">
            Fashion of Freedom
            </div>
            


            <div className="home__row">
            <Product
            id="12345"k
            title="Unisex Lavender Cotton Hoodie"
            price={1799}
            rating={5}
            image="https://media.istockphoto.com/photos/cheerful-young-man-wearing-lilac-hoodie-picture-id1327784914?k=20&m=1327784914&s=612x612&w=0&h=F-zwqd4zDZ1N8HTZqPlTRb4hxxaUCVe2IyhIjqWbBAE="
            />
            <Product
            id="12346"
            title="Womens Straight Fit Pants"
            price={1299}
            rating={4}
            image="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            />
            <Product
            id="12347"
            title="Cotton Tee Unisex"
            price={899}
            rating={4}
            image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            />
            </div>



            <div className="home__row">
            <Product
            id="12348"
            title="Levis Crew Neck Black"
            price={2999}
            rating={3}
            image="https://media.istockphoto.com/photos/black-casual-sweatshirt-for-kids-on-grey-background-picture-id1310051876?k=20&m=1310051876&s=612x612&w=0&h=CanOXs5mVm_vNMQDSX-MsM6gRzaiKPz7Ut98bNGlk1Q="
          />
          <Product
            id="12349"
            title="Lee Cooper Skinny Jeans"
            price={3899}
            rating={5}
            image="https://images.unsplash.com/photo-1604272804518-4496d93d3652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80"
          />
            </div>



            <div className="home__row">
            <Product
            id="12350"
            title="Air max 90 PREMIUM Curry"
            price={20000}
            rating={4}
            image="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
            <Product
            id="12351"
            title="Converse All Star Red"
            price={4999}
            rating={5}
            image="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
            </div>


        </div>
    </div>
  )
}

export default Home