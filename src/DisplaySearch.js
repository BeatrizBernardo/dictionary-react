import React from "react";
import "./css/DisplaySearch.css";

export default function DisplaySearch(props) {
  return (
    <div className="DisplaySearch">
      <h1 className="word">{props.meaning.word}</h1>
      <hr className="horizontalLine" />
      <h3>
        {props.meaning.partOfSpeech}
        {"  "}•{"  "}
        {props.meaning.text}
        {"  "}•{"  "}
        <button
          className="btn sound"
          onClick={function () {
            const audio = document.getElementsByClassName("audioFile")[0];
            audio.play();
          }}
        >
          Listen{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-soundwave"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </button>
        <audio className="audioFile" src={props.meaning.audio}></audio>
      </h3>
      <h2 className="subtitle">Definitions</h2>
      <hr className="secondHorizontalLine" />
      <p>
        <strong>definition: </strong>
        {props.meaning.definition}
      </p>
      {props.meaning.example && (
        <p>
          <strong>example: </strong>
          {props.meaning.example}
        </p>
      )}

      <h2 className="subtitle">Synonyms</h2>
      <hr className="secondHorizontalLine" />

      {props.meaning.synonyms.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
}
