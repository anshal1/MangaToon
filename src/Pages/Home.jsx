import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Mycontext from "../Context/Context";
import "../Style/Home.css";
import MangaCard from "./MangaCard";
import keys from "./Key";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const c = useContext(Mycontext);
  const { categories} = c;
  const navigate = useNavigate();
  const [TopManga, setTopManga] = useState([]);
  const [AllManga, setAllManga] = useState([]);
  const [loading, setloading] = useState(true);
  const FetchManga = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": keys.first,
        "X-RapidAPI-Host": keys.second,
      },
    };

    fetch(
      `https://manga-scrapper.p.rapidapi.com/search/${categories}/?provider=asura&limit=15`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setAllManga(response.data.result);
        setTopManga(response.data.result.slice(0, 3));
        if (response) {
          setloading(false);
        }
      })
      .catch((err) => {
        if (err) {
          setloading(false);
        }
      });
  };
  useEffect(() => {
    FetchManga();
  }, []);
  useEffect(() => {
    setloading(true);
    FetchManga();
  }, [categories]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="main_home_container" id="main">
          <div className="sidepannel">
            {/* <SidePannel
            changeProvider={(name) => {
              changeProvider(name);
            }}
          /> */}
          </div>
          <div className="main_content">
            <div className="cover">
              <img src={TopManga[0]?.MangaCover} alt="" id="first_img" />
              <div className="info">
                <h1>{TopManga[0]?.MangaTitle}</h1>
                <p className="sypnosis">{TopManga[0]?.MangaSynopsis}</p>
                <button
                  onClick={() => {
                    navigate(`/manga/${TopManga[0]._id}`);
                  }}
                >
                  Read Now
                </button>
              </div>
            </div>
            <h2>Asura Scans- {categories}</h2>
            {AllManga.length < 1 ? (
              <h1>No Manga Found..</h1>
            ) : (
              <div className="manga_box">
                {AllManga.map((ele) => {
                  return (
                    <MangaCard
                      key={ele?._id}
                      image={ele?.MangaCover}
                      name={ele?.MangaTitle}
                      read={ele?._id}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
