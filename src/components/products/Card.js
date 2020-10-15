import React from "react";

const Card = (props) => {
  return (
    <div className="px-4 p-2 hover:bg-blue-100">
      <div className="text-sm">{props.title}</div>
      <img src={props.image} alt={props.title} />
      <div className="text-sm">{props.price}</div>
      <div className="text-sm">{props.description}</div>
    </div>
  );
};

export default Card;
