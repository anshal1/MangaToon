import React, { useState } from "react";
import { useContext } from "react";
import Mycontext from "../Context/Context";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const c = useContext(Mycontext);
  const { isScrolled, setcategories } = c;
  const [display, setdisplay] = useState("categories");
  const [name, setname] = useState("");
  const Search = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5154136085msh01c144c95ca355dp130597jsncc2599e99240",
        "X-RapidAPI-Host": "manga-scrapper.p.rapidapi.com",
      },
    };

    fetch(`https://manga-scrapper.p.rapidapi.com/search/${name}/`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className={isScrolled}>
        <div className="brand_name">
          <Link to="/">
            <h1>Mr.Toon</h1>
          </Link>
        </div>
        <div className="home">
          <p
            id="main_category"
            onClick={() => {
              setdisplay("categories_display");
              if (display === "categories_display") {
                setdisplay("categories");
              }
            }}
          >
            Geners{" "}
            <span id={display}>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Action
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Adventure
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Comedy
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Romance
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Horror
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Mystery
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Ecchi
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Drama
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Gender Bender
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Fantasy
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Isekai
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Harem
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Medical
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Martial Arts
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Parody
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                School
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Slice of Life
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                SuperHero
              </li>
              <li
                onClick={(e) => {
                  setcategories(e.target.innerHTML);
                }}
              >
                Thriller
              </li>
            </span>
          </p>
        </div>
        <div className="search">
          <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />
          <i class="fa-solid fa-magnifying-glass" onClick={Search}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
