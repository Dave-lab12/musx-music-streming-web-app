import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import Controls from "./Controls";
import Loader from "./Loader";
function Search() {
  const [find, setFind] = useState("");
  const [music, setMusic] = useState(null);
  const [loading, setLoading] = useState(false);

  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav"))
  );
  const [play, setPlay] = useState(false);
  const fetchData = async () => {
    try {
      const get = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${find}`
      );
      const dta = await get.json();

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
  let x;
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="body-container sc2">
      <div className="input-group">
        <input
          onKeyPress={handleEnter}
          className="search"
          type="text"
          placeholder="Searching for something?"
        />
        <BiSearchAlt className="iconn" />
      </div>
      <section className="container2 ">
        {music &&
          music.data.map((music) => {
            const { album, id, title } = music;
            x = id;
            const { cover_big } = album;
            return (
              <div key={id} className="card ">
                <div className="imgbx">
                  <img src={cover_big} alt={title} />
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
                                { id, title, cover_big },
                              ])
                            : setFavorite([{ id, title, cover_big }])
                        }
                      >
                        <AiFillHeart />
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setPlay(true)}>
                        {play ? "" : <FaPlay />}
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setPlay(false)}>
                        <AiFillCloseCircle />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
      </section>
      {play ? <Controls id={x} /> : ""}
    </div>
  );
}

export default Search;
