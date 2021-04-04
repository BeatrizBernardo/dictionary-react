import React from "react";
import "./css/DisplaySearch.css";

export default function DisplaySearch(props) {
  return (
    <div className="DisplaySearch">
      <h1 className="search">{props.meaning.word}</h1>
      <hr className="horizontalLine" />
      <h3>{props.meaning.partOfSpeech}</h3>
      <h3>{props.meaning.text}</h3>
      <h2>Definition</h2>
      <hr className="secondHorizontalLine" />
      <p>{props.meaning.definition}</p>
      <p>{props.meaning.example}</p>
      <h2>Synonyms</h2>
      <hr className="secondHorizontalLine" />

      {props.meaning.synonyms.map((i) => (
        <p>{props.meaning.synonyms[i]}</p>
      ))}
    </div>
  );
}
