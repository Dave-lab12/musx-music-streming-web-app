import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
function Controls({ id }) {
  const idd = id;
  const [player, setPlayer] = useState(null);

  const getData = async (id) => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
    );
    const result = await data.json();
    setPlayer(result);
  };
  useEffect(() => {
    getData(idd);
  }, [idd]);

  console.log(id);
  console.log("id");
  return (
    <div className="controls">
      {player && (
        <>
          <ReactPlayer
            width="500px"
            height="125px"
            className="player"
            url={player.preview}
            playing={true}
            loop={true}
            controls={true}
          />
        </>
      )}
    </div>
  );
}

export default Controls;
