import React, { useState } from "react";
import BandcampPlayer from "react-bandcamp";
import "../Pages/MainPage.styles.css";

const MainPage = () => {
  // let [albums, albumUpdate] = useState({
  //   album1: "3114440086",
  //   album2: "1387779480",
  // });

  let [albums, albumUpdate] = useState([3114440086, 1387779480]);

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlbumID = e.target[0].value;
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    passedSubmission(newAlbumID, formJson);
  };

  const passedSubmission = (newAlbumID, formJson) => {
    console.log(newAlbumID);
    let getAlbumSpace = Number(formJson.myRadio);
    console.log(getAlbumSpace);
    console.log(typeof getAlbumSpace);

    switch (getAlbumSpace) {
      case 0:
        console.log("found zero");
        albumUpdate([(albums[0] = newAlbumID), (albums[1] = albums[1])]);
        break;
      case 1:
        console.log("found one");
        albumUpdate([(albums[0] = albums[0]), (albums[1] = newAlbumID)]);
        break;
    }

    //albumUpdate([test: newAlbumID]);
  };

  const consoleLogAlbum = () => {
    console.log(albums);
  };

  return (
    <>
      <button onClick={consoleLogAlbum}>testAlbums</button>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={name}></input>
        <label>
          <input type="radio" name="myRadio" value="0" /> Album 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="1" />
          Album 2
        </label>

        <br />
        <button type="submit">Click to submit</button>
      </form>

      <div class="container">
        <BandcampPlayer
          BandcampPlayer
          album={albums[0]}
          bgcol="blue"
          linkcol="blue"
          size="medium"
          width="430px"
        />

        <BandcampPlayer
          BandcampPlayer
          album={albums[1]}
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
      {/* <div class="container">
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
      </div> */}
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
I think this shouldn't be an object, but array of arrays and then select items in it?
Create input that sends album number to function with button click
https://www.quora.com/How-can-you-change-only-one-property-of-an-object-using-the-USestate-hook-JavaScript-React-React-hooks-development
*/
