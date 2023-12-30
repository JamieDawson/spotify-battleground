import React, { useState } from "react";
import BandcampPlayer from "react-bandcamp";
import "../Pages/MainPage.styles.css";

const MainPage = () => {
  const [albums, album1Update] = useState({
    ablum1: "3114440086",
    album2: "1387779480",
  });

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlbumID = e.target[0].value;
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log(newAlbumID);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={name}></input>
        <label>
          <input type="radio" name="myRadio" value="option1" /> Option 1
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true}
          />{" "}
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" /> Option 3
        </label>
        <br />
        <button type="submit">Click to submit</button>
      </form>

      <div class="container">
        <BandcampPlayer
          BandcampPlayer
          album={albums.ablum1}
          bgcol="blue"
          linkcol="blue"
          size="medium"
          width="430px"
        />

        <BandcampPlayer
          BandcampPlayer
          album={albums.album2}
          bgcol="blue"
          linkcol="blue"
          size="medium"
          width="430px"
        />
        <BandcampPlayer
          BandcampPlayer
          album="3114440086"
          bgcol="blue"
          linkcol="blue"
          size="medium"
          width="430px"
        />
      </div>
      <div class="container">
        <BandcampPlayer
          BandcampPlayer
          album="3114440086"
          bgcol="blue"
          linkcol="blue"
          size="medium"
          width="430px"
        />

        <BandcampPlayer
          BandcampPlayer
          album="3114440086"
          bgcol="blue"
          linkcol="blue"
          size="medium"
          width="430px"
        />
        <BandcampPlayer
          BandcampPlayer
          album="3114440086"
          bgcol="blue"
          linkcol="blue"
          size="medium"
          width="430px"
        />
      </div>
    </>
  );
};

export default MainPage;

/*
NPM package used
https://www.npmjs.com/package/react-spotify-player
https://www.npmjs.com/package/react-bandcamp
*/

/*
Create input that sends album number to function with button click

*/
