import React, { useState } from "react";
import DisplaySearch from "./DisplaySearch.js";
import { DualRing } from "react-loading-io";
import "./css/Search.css";
import axios from "axios";
export default function Search() {
  const lang = [
    { id: 0, cod: "en_US", language: "English (US)" },
    { id: 1, cod: "hi", language: "Hindi" },
    { id: 2, cod: "es", language: "Spanish" },
    { id: 3, cod: "fr", language: "French" },
    { id: 4, cod: "ja", language: "Japanese" },
    { id: 5, cod: "ru", language: "Russian" },
    { id: 6, cod: "en_GB", language: "English (UK)" },
    { id: 7, cod: "de", language: "German" },
    { id: 8, cod: "it", language: "Italian" },
    { id: 9, cod: "ko", language: "Korean" },
    { id: 10, cod: "pt-BR", language: "Brazilian Portuguese" },
    { id: 11, cod: "ar", language: "Arabic" },
    { id: 12, cod: "tr", language: "Turkisk" },
  ];
  const [word, setWord] = useState("");
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [language, setLanguage] = useState({
    cod: lang[0].cod,
    language: lang[0].language,
  });

  let Url = "https://api.dictionaryapi.dev/api/v2/entries";

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `${Url}/${language.cod}/${word}`;

    let apiKey = "563492ad6f91700001000001fbdc42f6de70481dbd73d77f850a60f4";
    let apiPexel = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;

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

    axios
      .get(apiPexel, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(function (response) {
        setPhoto(response.data.photos);
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
        <div className="dropdown">
          <button
            className="btn search-button dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {language.language}
          </button>
          <div className="dropdown-menu show" aria-labelledby="dropdownMenu2">
            {lang.map(function (lan) {
              return (
                <button
                  className="dropdown-item"
                  type="button"
                  key={lan.id}
                  onClick={function () {
                    setLanguage({ cod: lan.cod, language: lan.language });
                  }}
                >
                  {lan.language}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <DisplaySearch result={result} photo={photo} />
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
