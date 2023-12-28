import SpotifyPlayer from "react-spotify-player";

import "./App.css";

function App() {
  const size = {
    width: "20%",
    height: 500,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <div className="App">
      <SpotifyPlayer
        uri="spotify:album:4ssvXCfePUn0EwwcUy10Pi"
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}

export default App;
