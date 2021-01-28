import React from "react";
import SideNav from "./components/SideNav";
import "./styles/main.css";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="container">
        <HashRouter basename="/">
          <SideNav />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/fav" component={Favorites}></Route>
          <Route exact path="/search" component={Search}></Route>
        </HashRouter>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default App;
