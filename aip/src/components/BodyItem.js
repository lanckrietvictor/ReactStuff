import React from "react";

function BodyItem(props) {
  return(
    <div className="bodyItem">
      <div className="bodyLogo">
        <img src={props.img} alt="Logo" className="itemLogo"/>
      </div>
      <div className="bodyText">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  )
}



export default BodyItem;
