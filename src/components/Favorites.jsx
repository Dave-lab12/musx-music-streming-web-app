import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import { FaPlay } from "react-icons/fa";
import {  AiFillDelete } from "react-icons/ai";
function Favorites() {
  const [music, setMusic] = useState([]);
  const [controler, setController] = useState(false);
  useEffect(() => {
    setMusic(JSON.parse(localStorage.getItem("fav")));
  }, []);
  const [choice, setChoice] = useState(null);
  const handleRemove = () => {
    window.localStorage.removeItem("fav");
    window.location.reload();
  };
  console.log(controler);
  return (
    <>
      <div className="body-container sc2">
        <div className="header">
          <h1 className="fav-title">Favorites</h1>
          <AiFillDelete className="clear_icon" onClick={() => handleRemove()} />
        </div>
        <section className="container2">
          {music &&
            music.map((items) => {
              let { id, title, cover_medium } = items;
              return (
                <div key={id} className="card">
                  <div className="imgbx">
                    <img
                      className="search-image"
                      src={cover_medium}
                      alt={title}
                    />
                  </div>
                  <div className="content">
                    <div className="contentBx">
                      <h3>{title}</h3>
                    </div>
                    <ul className="sci">
                      <li onClick={() => setController(true)}>
                        <button onClick={() => setChoice(id)}>
                          <FaPlay />
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

    
    </>
  );
}

export default Favorites;
