import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
        <Route path = "/" element={[<Header/>, <Home/>]} />
        <Route path = "/Checkout" element={[<Header/>, <Checkout/>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
