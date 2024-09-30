import React from "react";
import "./style.scss";

const LeaderCard = ({ leader }) => {
  return (
    <div className="leader-card">
      <div className="leader-card__image-wrapper">
        <img
          src={leader.img}
          alt={leader.name}
          className="leader-card__image"
        />
      </div>
      <div className="leader-card__content">
        <h2 className="leader-card__name text-lg font-bold ">{leader.name}</h2>
        <h3 className="leader-card__position font-semibold ">
          {leader.position}
        </h3>
      </div>
    </div>
  );
};

export default LeaderCard;
