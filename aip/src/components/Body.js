import React from "react";
import BodyItem from "./BodyItem";

function Body() {
  return (
    <div className="body">
      <BodyItem
        img="https://source.unsplash.com/random"
        title="Test"
        content=""
      />
      <BodyItem/>
      <BodyItem/>
      <BodyItem/>
      <BodyItem/>
      <BodyItem/>
    </div>)
}

export default Body;
