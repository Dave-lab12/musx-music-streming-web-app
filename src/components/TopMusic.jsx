import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import Controls from "./Controls";
import { AiFillCloseCircle } from "react-icons/ai";
function TopMusic({ music }) {
  const [play, setPlay] = useState(false);
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav"))
  );
  let x = null;
  return (
    <section className="container2 ">
      {music &&
        music.tracks.data.map((music) => {
          const { album, id, title } = music;
          const { cover_big } = album;
          x = id;
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
                          ? setFavorite([...favorite, { id, title, cover_big }])
                          : setFavorite([{ id, title, cover_big }])
                      }
                    >
                      <AiFillHeart />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setPlay(true)}>
                      {play ? <AiFillCloseCircle /> : <FaPlay />}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      {play ? <Controls id={x} /> : ""}
    </section>
  );
}

export default TopMusic;
