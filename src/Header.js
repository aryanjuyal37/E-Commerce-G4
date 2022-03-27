import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {  
  return (
    <div className="header">
      
        <img
          className="header__logo"
          src="https://cdn-icons-png.flaticon.com/512/1051/1051286.png?w=740&t=st=1648355916~exp=1648356516~hmac=e091c3358b4676134a891b515f64e0adcb5daa33f41fbdff04713e4a0f8b97ba"
        />
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
          <span className="header__optionLineOne">E-Store</span>
          <span className="header__optionLineTwo">Premium</span>
        </div>
        
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;