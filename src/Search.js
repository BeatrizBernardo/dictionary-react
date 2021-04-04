import React, { useState } from "react";
import DisplaySearch from "./DisplaySearch.js";
import { DualRing } from "react-loading-io";
import "./css/Search.css";

export default function Search() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);
  }

  function getData(event) {
    setData(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="group-form col-auto search-form">
        <input
          type="text"
          className="form-control search-field"
          id="inputSearch"
          placeholder="Search on dictionary..."
          onChange={getData}
        />
        <button className="btn search-button" type="submit">
          Search
        </button>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <DisplaySearch data={data} />
      </div>
    );
  } else {
    return (
      <div className="Search">
        {form}
        <div className="container">
          <div className="loading">
            <DualRing size={100} color="#381731" speed={3.5} />
          </div>
        </div>
      </div>
    );
  }
}
