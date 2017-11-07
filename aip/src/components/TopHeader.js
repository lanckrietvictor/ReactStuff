import React from "react";

function TopHeader() {
  return (
    <div className="topHeader">
      <div className="logo">
        <img src="https://source.unsplash.com/random" alt="App Logo" id="logo"/>
      </div>
      <div className="signIn">
        <h1 className="floatRight">
          <i className="fa fa-smile-o" aria-hidden="true"></i>
          Sign In
        </h1>
      </div>
    </div>
  )
}

export default TopHeader;
