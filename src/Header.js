import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {useStateValue} from './StateProvider'
import { Link } from "react-router-dom";




function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link style={{color:"white",textDecoration: 'none'}} to='/'>
          <div className="header__left">
            <div className="header__logoLeft">
              <h2>FABRIC</h2>
            </div>
            <div className="header__logoRight">
              <h2>ZONE</h2>
            </div>
          </div>
      </Link>
        

      <div className="header__middle">
        <input
          className="header__input"
          type="text"
          placeholder="Search Fabbric"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__right">
        <Tooltip title="Notify">
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Cart">
          <IconButton>
          <Link style={{color: "white"}} to='/Checkout'>
            <ShoppingBasketIcon />
          </Link>
            <span className="header__rightSpan">{basket?.length}</span>
          </IconButton>
        </Tooltip>
        <Tooltip title="Profile">
          <IconButton>
            <AccountCircleIcon  />
          </IconButton>
        </Tooltip>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
        <Tooltip title="Menu">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
