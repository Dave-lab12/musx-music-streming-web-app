import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Controls from "./Controls";

function SideNav() {
  return (
    <div className="side-nav">
      <p className="logo">
        <span className="mu">Mu</span>sx
      </p>
      <Link to="/fav">Home</Link>
      <Link to="/fav">Favorite</Link>
      <Link to="/search">Search</Link>
    </div>
  );
}

export default SideNav;
