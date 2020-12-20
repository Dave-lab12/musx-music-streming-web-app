import React, { useState, useEffect } from "react";
import "../styles/fav_style.css";
function Favorites() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    setMusic(JSON.parse(localStorage.getItem("fav")));
  }, []);

  return (
    <div className="l">
      {music &&
        music.map((items) => {
          const { id, title, cover_medium } = items;
          return (
            <>
              <h3>{title}</h3>
              <img src={cover_medium} alt={title} />
            </>
          );
        })}
    </div>
  );
}

export default Favorites;
