import React from "react";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className={"bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-2"}>
      <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />\
      <div className={"tc"}>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
