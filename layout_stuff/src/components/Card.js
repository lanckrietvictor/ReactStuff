import React from "react";
import Pic from "./Pic";
import Description from "./Description";

function Card (props){
  return(
    <div className="card">
      <Pic number={props.number}/>
      <Description title={props.title} content={props.content}/>
    </div>
  )
}

export default Card;
