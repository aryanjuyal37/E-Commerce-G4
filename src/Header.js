import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";

function Header() { 
  
  const[{basket,user},dispatch]= useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
            className="header__logo"
            src="https://cdn-icons-png.flaticon.com/512/1051/1051286.png?w=740&t=st=1648355916~exp=1648356516~hmac=e091c3358b4676134a891b515f64e0adcb5daa33f41fbdff04713e4a0f8b97ba"
          />
      </Link>
       
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {user ? user?.email.split("@")[0] : "Guest"}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
          
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
           <span className="header__optionLineOne">E-Store</span>
           <span className="header__optionLineTwo">Premium</span>
          </div>
           

          <Link to="/Checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
          
      </div>
    </div>
  );
}

export default Header;