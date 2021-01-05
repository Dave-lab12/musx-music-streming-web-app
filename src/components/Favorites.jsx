import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import { FaPlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
function Favorites() {
  const [music, setMusic] = useState([]);
  const [controler, setController] = useState(false);
  useEffect(() => {
    setMusic(JSON.parse(localStorage.getItem("fav")));
  }, []);
  let x;

  return (
    <>
      <div className="body-container sc2">
        <section className="container2">
          {music &&
            music.map((items) => {
              let { id, title, cover_big } = items;
              x = id;
              controler && <Controls id={x} />;
              return (
                <div key={id} className="card">
                  <div className="imgbx">
                    <img className="search-image" src={cover_big} alt={title} />
                  </div>
                  <div className="content">
                    <div className="contentBx">
                      <h3>{title}</h3>
                    </div>
                    <ul className="sci">
                      <li>
                        <button onClick={() => setController(true)}>
                          {controler ? "" : <FaPlay />}
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setController(false)}>
                          <AiFillCloseCircle />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </section>
      </div>
      {/* {controler ? <Controls id={x} /> : ""} */}
    </>
  );
}

export default Favorites;
