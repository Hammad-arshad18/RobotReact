import React from "react";
import Card from "./card";

const CardComponent = (props) => {
  const { robots } = props;
  const cardArray = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardComponent;
