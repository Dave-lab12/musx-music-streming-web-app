import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Favorites() {
  const [music, setMusic] = useState([]);
  const [controler, setController] = useState("");
  useEffect(() => {
    setMusic(JSON.parse(localStorage.getItem("fav")));
  }, []);
  let x;
  return (
    <section className="items-container">
      {music &&
        music.map((items) => {
          const { id, title, cover_medium } = items;
          x = id;
          return (
            <div key={id} className="items">
              <img
                className="search-image"
                src={cover_medium}
                alt={title}
                onClick={() => setController("something")}
              />
              <h2 className="search-title">{title}</h2>
            </div>
          );
        })}
      {console.log(controler)}
      {controler ? <Controls id={x} /> : ""}
    </section>
  );
}

export default Favorites;
