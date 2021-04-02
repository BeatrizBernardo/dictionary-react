import React, { useState } from "react";
import DisplaySearch from "./DisplaySearch.js";
import "./css/Search.css";

export default function Search() {
  const [data, setData] = useState(null);
  const [dataTemp, setDataTemp] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setData(dataTemp);
    setLoaded(true);
  }

  function getData(event) {
    setDataTemp(event.target.value);
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
    {
      /** loading animation */
    }
    return (
      <div className="Search">
        {form}
        I'm loading here
      </div>
    );
  }
}
