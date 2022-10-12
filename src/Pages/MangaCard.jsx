import React from "react";
import "../Style/MangaCard.css";
import {useNavigate} from "react-router-dom";
const MangaCard = ({ image, name, read }) => {
  const navigate = useNavigate()
  const trimName = (name) => {
    if (name.length > 35) {
      return name.slice(0, 35) + "...";
    } else {
        return name;
    }
  };
  const Read=()=>{
    navigate(`/manga/${read}`);
  }
  return (
    <>
      <div className="main_card_container">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="name">
          <h3>{trimName(name)}</h3>
        </div>
        <div className="button">
          <button onClick={Read}>Read Now</button>
        </div>
      </div>
    </>
  );
};

export default MangaCard;
