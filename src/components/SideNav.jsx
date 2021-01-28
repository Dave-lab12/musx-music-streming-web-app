import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function SideNav() {
  const [burger, setBurger] = useState(true);
  return (
    <>
      <GiHamburgerMenu className="burger" onClick={() => setBurger(!burger)} />
      <div className={`side-nav t ${burger ? "drop" : ""}`}>
        <p className="logo">
          <span className="mu">Mu</span>sx
        </p>
        <Link to="/">
          <AiTwotoneHome className="icons" />
          &nbsp; <p className="xlx">Home</p>
        </Link>
        <Link to="/fav">
          <MdFavorite className="icons" />
          &nbsp; Favorite
        </Link>
        <Link to="/search">
          <BiSearchAlt className="icons" />
          &nbsp; Search
        </Link>
      </div>
    </>
  );
}

export default SideNav;
