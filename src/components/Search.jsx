import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

import Controls from "./Controls";
import Loader from "./Loader";
function Search() {
  const [find, setFind] = useState("");
  const [music, setMusic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [choice, setChoice] = useState(null);

  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav"))
  );
  const [play, setPlay] = useState(false);
  const fetchData = async () => {
    try {
      const get = await fetch(
        `https://cross-pass.herokuapp.com/https://api.deezer.com//search?q=${find}`
      );
      const dta = await get.json();
      console.log(dta);
      if (dta.total === 0) {
        setLoading(false);
        setError(true);
      }
      if (!dta.error) {
        setMusic(dta);
        setLoading(false);
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
      setLoading(true);
      handleChange(e);
    }
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <>
        <h1>No music found</h1>
        <div className="input-group">
          <input
            onKeyPress={handleEnter}
            className="search"
            type="text"
            placeholder="Searching for something?"
          />
          <BiSearchAlt className="iconn" />
        </div>
      </>
    );
  }
  return (
    <div className="body-container sc2">
      <h1 className="search-title">Search</h1>
      <div class="container8">
        <input
          placeholder="Search..."
          class="js-search"
          type="text"
          onKeyPress={handleEnter}
        />
        <BiSearchAlt className="ico" />
      </div>

      <section className="container2 ">
        {music &&
          music.data.map((music) => {
            const { album, id, title } = music;

            const { cover_medium } = album;
            return (
              <div key={id} className="card ">
                <div className="imgbx">
                  <img src={cover_medium} alt={title} />
                </div>
                <div className="content">
                  <div className="contentBx">
                    <h3>{title}</h3>
                  </div>

                  <ul className="sci">
                    <li>
                      <button
                        value={id}
                        onClick={() =>
                          favorite
                            ? setFavorite([
                                ...favorite,
                                { id, title, cover_medium },
                              ])
                            : setFavorite([{ id, title, cover_medium }])
                        }
                      >
                        <AiFillHeart />
                      </button>
                    </li>
                    <li onClick={() => setPlay(true)}>
                      <button onClick={() => setChoice(id)}>
                        <FaPlay />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
      </section>
      {play ? <Controls id={choice} /> : ""}
    </div>
  );
}

export default Search;
