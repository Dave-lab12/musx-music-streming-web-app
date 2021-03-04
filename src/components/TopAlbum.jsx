import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
function TopAlbum({ music }) {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav"))
  );

  return (
    <section className="container2 ">
      {music &&
        music.artists.data.map((music) => {
          const { id, name, picture_big } = music;

          return (
            <div key={id} className="card ">
              <div className="imgbx">
                <img src={picture_big} alt={name} />
              </div>
              <div className="content">
                <div className="contentBx">
                  <h3>{name}</h3>
                </div>
                <ul className="sci">
                  <li>
                    <button
                      value={id}
                      onClick={() =>
                        favorite
                          ? setFavorite([
                              ...favorite,
                              { id, name, picture_big },
                            ])
                          : setFavorite([{ id, name, picture_big }])
                      }
                    >
                      <AiFillHeart  />
                    </button>
                  </li>
                  <li>
                    <button>
                      <FaPlay />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default TopAlbum;
