import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome, AiTwotoneSetting } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function SideNav() {
  const [burger, setBurger] = useState(true);
  return (
    <>
      <GiHamburgerMenu className="burger" onClick={() => setBurger(!burger)} />
      <div className={`side-nav ${burger ? "drop" : ""}`}>
        <p className="logo">
          <span className="mu">Mu</span>sx
        </p>
        <Link to="/">
          <AiTwotoneHome className="icons" />
          &nbsp; Home
        </Link>
        <Link to="/fav">
          <MdFavorite className="icons" />
          &nbsp; Favorite
        </Link>
        <Link to="/search">
          <BiSearchAlt className="icons" />
          &nbsp; Search
        </Link>
        <Link to="/setting">
          <AiTwotoneSetting className="icons" />
          &nbsp; Settings
        </Link>
      </div>
    </>
  );
}

export default SideNav;
