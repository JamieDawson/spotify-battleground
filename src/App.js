import { Routes, Route } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import NavBar from "./Components/NavBar/NavBar";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default App;
