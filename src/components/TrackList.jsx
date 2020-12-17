import React, { useState, useEffect } from "react";

function TrackList({ track }) {
  const [music, setMusic] = useState(null);
  console.log(track);
  const getmusic = async () => {
    if (track) {
      const mu = await fetch(`https://cors-anywhere.herokuapp.com/${track}`);
      const data = await mu.json();
      setMusic(data);
      console.log(data);
    }
  };
  useEffect(() => {
    getmusic();
  }, [track]);

  return (
    <div>
      {music &&
        music.data.map((item) => {
          const { preview, title } = item;
          return (
            <>
              <h3>{title}</h3>
              <audio controls>
                <source src={preview} type="audio/mp3"></source>
              </audio>
            </>
          );
        })}
    </div>
  );
}

export default TrackList;
