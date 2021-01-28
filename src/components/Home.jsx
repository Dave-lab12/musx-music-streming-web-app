import React, { useState, useEffect } from "react";

import TopMusic from "./TopMusic";
import TopAlbum from "./TopAlbum";
import Loader from "./Loader";
function Home() {
  const [find, setFind] = useState("");
  const [music, setMusic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav"))
  );
  const [fav, setFav] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const get = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`
      );
      const dta = await get.json();

      if (!dta.error) {
        setMusic(dta);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  localStorage.setItem("fav", JSON.stringify(favorite));
  useEffect(() => {
    fetchData();
  }, [find]);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <h1>sorry we've encountered some errors sorry for the inconvinence</h1>
    );
  }
  return (
    <div className="body-container sc2">
      <h1 className="home-title">Top Tracks</h1>
      <TopMusic music={music} />
      <div class="divider div-transparent"></div>
      <h1 className="home-title artist">Top Artist</h1>
      <TopAlbum music={music} />
    </div>
  );
}

export default Home;
