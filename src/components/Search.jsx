import React, { useState, useEffect } from "react";
import TrackList from "./TrackList";
function Search() {
  //   const url = ` https://api.deezer.com/artist/${find}`;
  const [find, setFind] = useState("");
  const [music, setMusic] = useState(null);
  const fetchData = async () => {
    const get = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${find}`
    );
    const dta = await get.json();
    setMusic(dta);
  };

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

  return (
    <div>
      <input type="search" onKeyPress={handleEnter} />

      {music && (
        <>
          <h1>{music.name}</h1>
          <img src={music.picture_big} alt={music.name} />
          <TrackList track={music.tracklist} />
        </>
      )}
    </div>
  );
}

export default Search;
