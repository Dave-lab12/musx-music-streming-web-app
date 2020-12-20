import React from "react";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Controls from "./components/Controls";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/fav">Favorite</Link>
        <br />
        <Link to="/search">Search</Link>
        <Route exact path="/fav" component={Favorites}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route path="/fav/:id" component={Controls}></Route>
      </Router>
    </div>
  );
}

export default App;
