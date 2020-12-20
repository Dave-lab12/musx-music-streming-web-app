import React, { useState, useEffect } from "react";

function Controls({ match }) {
  const id = match.params.id;
  const [player, setPlayer] = useState(null);
  const getData = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
    );
    const result = await data.json();

    setPlayer(result);
  };
  useEffect(() => {
    getData();
  }, [id]);
  console.log(player);

  return (
    <div>
      {player && (
        <>
          <img src={player.album.cover_big} alt={player.title} />
          <audio controls>
            <source src={player.preview} type="audio/mp3"></source>
          </audio>
        </>
      )}
    </div>
  );
}

export default Controls;
