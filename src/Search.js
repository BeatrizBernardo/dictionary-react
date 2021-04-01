import React from "react";
import "./css/Search.css";

export default function Search() {
  let form = (
    <form>
      <div className="group-form col-auto search-form">
        <input
          type="text"
          className="form-control search-field"
          id="inputSearch"
          placeholder="Search on dictionary..."
        />
        <button className="btn search-button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
  return <div className="Search">{form}</div>;
}
