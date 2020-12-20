import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Controls from "./Controls";
// import Controls from "./Controls";
//refractor the code so that it will be easier to manage routing
// remove the Favorites componet from the seacrh and add it in the app.js component and the controller should be in the search component when clicked on an audio we will pass the id of the sont to the controller fetch it adn play the audio ez

//add to fav saves name id and picture to local storage
//fav component get that data and display it
//the controls button will fetch the rewuired music using routing and passing in the id
//oerfect and then will be done with the functionality and move on to the css

function Search() {
  const [find, setFind] = useState("");
  const [music, setMusic] = useState(null);
  const [favorite, setFavorite] = useState([]);
  const fetchData = async () => {
    try {
      const get = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${find}`
      );
      const dta = await get.json();

      if (!dta.error) {
        setMusic(dta);
      }
    } catch (error) {
      console.log(error);
    }
  };
  localStorage.setItem("fav", JSON.stringify(favorite));
  useEffect(() => {
    fetchData();
  }, [find]);
  const handleChange = (e) => {
    const data = e.target.value;
    setFind(data);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleChange(e);
    }
  };

  console.log(favorite);
  return (
    <div>
      <br />
      <input type="search" onKeyPress={handleEnter} />

      {music &&
        music.data.map((music) => {
          const { album, id, title } = music;
          const { cover_medium } = album;
          return (
            <>
              <h2>{title}</h2>
              <img src={cover_medium} alt={title} />
              <button
                value={id}
                onClick={() =>
                  setFavorite([...favorite, { id, title, cover_medium }])
                }
              >
                Add to favorite
              </button>
            </>
          );
        })}
    </div>
  );
}

export default Search;
