import React from "react";

const Scrool = (props) => {
  return (
    <div style={{ overflowY: "scroll", height: "600px" }}>{props.children}</div>
  );
};

export default Scrool;
