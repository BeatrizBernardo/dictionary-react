import React from "react";
import "./css/DisplaySearch.css";

export default function DisplaySearch(props) {
  return (
    <div className="DisplaySearch">
      <h1 className="search">{props.data}</h1>
      <hr className="horizontalLine" />
    </div>
  );
}
