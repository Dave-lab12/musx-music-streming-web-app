import React from "react";
import SideNav from "./components/SideNav";
import "./styles/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Setting from "./components/Setting";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="container">
        <Router>
          <SideNav />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/fav" component={Favorites}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/setting" component={Setting}></Route>
        </Router>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default App;
