import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Favorites() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    setMusic(JSON.parse(localStorage.getItem("fav")));
  }, []);

  return (
    <div className="l">
      <Route>
        {music &&
          music.map((items) => {
            const { id, title, cover_medium } = items;

            return (
              <div key={id}>
                <Link to={`/fav/${id}`}>
                  <h3>{title}</h3>
                  <img src={cover_medium} alt={title} />
                </Link>
              </div>
            );
          })}
      </Route>
    </div>
  );
}

export default Favorites;
