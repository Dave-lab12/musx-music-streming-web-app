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
  const [choice, setChoice] = useState(null);
  return (
    <>
      <div className="body-container sc2">
        <section className="container2">
          {music &&
            music.map((items) => {
              let { id, title, cover_big } = items;

              // controler && <Controls id={x} />;
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
                      <li onClick={() => setController(true)}>
                        <button onClick={() => setChoice(id)}>
                          {Controls ? <FaPlay /> : ""}
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
          {controler && <Controls id={choice} />}
        </section>
      </div>

      {/* {controler ? <Controls id={x} /> : ""} */}
    </>
  );
}

export default Favorites;
