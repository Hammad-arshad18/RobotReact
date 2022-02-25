import React from "react";

const SearchBox = ({ search }) => {
  return (
    <div className={"ma3"}>
      <input
        className={"pa3 ba2 br3  bg-lightest-blue"}
        type={"text"}
        placeholder={"Search Robotics"}
        onChange={search}
      />
    </div>
  );
};

export default SearchBox;
