import React from "react";

function Pic(props) {
  let src="http://lorempixel.com/400/200/sports/"+{props.num}
  return (
    <div className="pic">
      <img src="http://lorempixel.com/400/200/sports/"+{props.num} alt="Pic"/>
    </div>
  )
}

export default Pic;
