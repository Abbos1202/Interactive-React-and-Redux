import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="bottom">
        <p>{props.liked}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Card;
