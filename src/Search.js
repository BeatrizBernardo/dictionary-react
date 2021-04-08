import React, { useState } from "react";
import DisplaySearch from "./DisplaySearch.js";
import { DualRing } from "react-loading-io";
import "./css/Search.css";
import axios from "axios";

export default function Search() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let Url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `${Url}${word}`;
    axios
      .get(apiUrl)
      .then(function (response) {
        setResult(response.data[0]);

        setLoaded(true);
      })
      .catch(function (error) {
        setLoaded(false);
        alert(
          "Sorry! Can't find the word that you are looking. Please try again!"
        );
      });
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="group-form col-auto search-form">
        <input
          type="text"
          className="form-control search-field"
          id="inputSearch"
          placeholder="Search on dictionary..."
          onChange={getWord}
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
        <DisplaySearch result={result} />
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
