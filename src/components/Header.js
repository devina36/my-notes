import React from "react";
import Search from "./Search";

function Header({ searchNote }) {
  return (
    <div className="header">
        <h1>Notes</h1>
        <Search searchNote={searchNote} />
    </div>
  );
}

export default Header;
