import React from "react";
import SpotifyPlayer from "react-spotify-player";

const MainPage = () => {
  const size = {
    width: "0%",
    height: 400,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <>
      <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={size}
        view={view}
        theme={theme}
      />
      {/* <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={size}
        view={view}
        theme={theme}
      />
      <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={size}
        view={view}
        theme={theme}
      /> */}
    </>
  );
};

export default MainPage;

/*
NPM package used
https://www.npmjs.com/package/react-spotify-player

*/
