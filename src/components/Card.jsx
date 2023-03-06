import React from "react";
import "../public/css/Card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <p className="card-title">{props.title}</p>
      <p className="card-body">{props.body}</p>
    </div>
  );
};
