import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import Search from "./Search";

function Header() {
  return (
    <div className="header">
      <TopHeader/>
      <BottomHeader/>
      <Search/>
    </div>
  )
}

export default Header;
