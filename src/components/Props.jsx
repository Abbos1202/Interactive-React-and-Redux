import React from "react";

const Props = (props) => {

  return (
    <div className="container">
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <p>{props.liked}</p>
        <p>{props.produced}</p>
    </div>
  );
};

export default Props;
