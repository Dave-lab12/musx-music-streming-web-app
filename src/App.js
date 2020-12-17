import React, { useState, useEffect } from "react";
import Search from "./components/Search";
function App() {
  const url =
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/2529/flow";
  const [music, setMusic] = useState([]);
  const fetchData = async () => {
    const get = await fetch(url);
    const data = await get.json();
    setMusic(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const mu = music.data;
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
