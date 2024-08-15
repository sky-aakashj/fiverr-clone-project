import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.cat}</span>
        <span className="title">{item.username}</span>
      </div>
    </Link>
  );
};

export default CatCard;
