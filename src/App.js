import React from "react";
import SideNav from "./components/SideNav";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="container">
      <Router>
        <SideNav />
        <Route exact path="/fav" component={Favorites}></Route>
        <Route exact path="/search" component={Search}></Route>
      </Router>
    </div>
  );
}

export default App;
