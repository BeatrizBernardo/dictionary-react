import React from "react";
import Audio from "./Audio.js";
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
        <Audio audio={props.meaning.audio} />
      </h3>
      <h2 className="subtitle">Definitions</h2>
      <hr className="secondHorizontalLine" />
      {props.meaning.definition && (
        <p>
          <strong>definition: </strong>
          {props.meaning.definition}
        </p>
      )}
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
