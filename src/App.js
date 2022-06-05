import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { auth } from "./firebase";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import HeaderTwo from "./HeaderTwo";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



const promise = loadStripe(
  "pk_test_51L6qBFSAaPCofuYnoWx3rn7Ut9Gp22AyEi9R6HSO7Uh50zre9wV8cErs7me5YgCZRllg1oGesUby01S8RnS6A6fr00kykJZqmT"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('The Current User is =>', authUser);
      
      if (authUser) {
        // the user did log in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }

    })

  }, [])
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
        <Route path = "/" element={[<Header/>, <HeaderTwo/>, <Home/>,<BackToTop/>, <Footer />]} />
        <Route path = "/Checkout" element={[<Header/>,<HeaderTwo/> ,<Checkout/>, <BackToTop/>, <Footer />]} />
        <Route path = "/login" element={<Login/>} />
        <Route path = "/payment" element={[<Header/>, <HeaderTwo/>,  <Elements stripe={promise}>
              <Payment /> </Elements>, <BackToTop/>, <Footer />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
