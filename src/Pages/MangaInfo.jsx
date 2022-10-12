import React, { useEffect, useState } from "react";
import "../Style/MangaInfo.css";
import keys from "./Key";
import { useLocation, useNavigate } from "react-router-dom";
const MangaInfo = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [MangaData, setMangaData] = useState({});
  let chp = [];
  const [Chapter, setChapter] = useState([]);
  const MangaInfo = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": keys.first,
        "X-RapidAPI-Host": keys.second,
      },
    };

    fetch(
      `https://manga-scrapper.p.rapidapi.com/series/${location.pathname.slice(
        7
      )}/?provider=asura`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMangaData(response.data))
      .catch((err) => console.error(err));
  };
  const Chapters = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5154136085msh01c144c95ca355dp130597jsncc2599e99240",
        "X-RapidAPI-Host": "manga-scrapper.p.rapidapi.com",
      },
    };

    fetch(
      `https://manga-scrapper.p.rapidapi.com/series/${location.pathname.slice(
        7
      )}/chapters/?provider=asura&page=2`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.data.series.length; i++) {
          const ChapterWise = response.data.series.find((ele) => {
            return ele.ChapterOrder === i;
          });
          if (ChapterWise) {
            chp[i] = ChapterWise;
          }
        }
        setChapter(chp);
        console.log(response.data.series);
    })
      .catch((err) => {
        if(err){
            alert("You have used your monthly subscription of the API");
        }
      });
  };
  useEffect(() => {
    MangaInfo();
    Chapters();
  }, []);

  return (
    <>
      <div className="main_info_container">
        <div className="infoContainer">
          <div className="cover">
            <img src={MangaData?.MangaCover} alt="" id="first_img" />
            <div className="info">
              <h1>{MangaData?.MangaTitle}</h1>
              <p className="sypnosis">{MangaData?.MangaSynopsis}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="heading">
          <h1>Chapters</h1>
        </div>
        <div className="chapters">
          {Chapter.map((e) => {
            return (
              <p key={e.ChapterNumber} onClick={()=>{navigate(`/manga/read/${e._id}/${location.pathname.slice(
                7
              )}`)}}>
                <span>{e.ChapterNumber}</span> {e.ChapterTitle}{" "}
                <span id="date">{e.ChapterDate}</span>
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MangaInfo;
