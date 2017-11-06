import React from "react";

function Description (props){
  return (
  <div className="description">
    <div className="title">
      <h1>{props.title}</h1>
    </div>
    <div className="subtext">
      <p>
        {props.content}
      </p>
    </div>
    </div>
  )
}

export default Description;
