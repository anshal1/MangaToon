import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppSate from "./Context/AppSate";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import MangaInfo from "./Pages/MangaInfo";
import Reading from "./Pages/Reading";
function App() {
  return (
    <>
      <AppSate>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/manga/:name" element={<MangaInfo />}/>
            <Route path="/manga/read/:chapter/:name" element={<Reading />} />
          </Routes>
        </Router>
      </AppSate>
    </>
  );
}

export default App;
