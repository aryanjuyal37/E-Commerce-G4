import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

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
        <Route exact path = "/" element={[<Header/>, <Home/>]} />
        <Route exact path = "/Checkout" element={[<Header/>, <Checkout/>]} />
        <Route exact path = "/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
