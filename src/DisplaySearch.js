import React from "react";
import Audio from "./Audio.js";
import PartOfSpeech from "./PartOfSpeech.js";
import "./css/DisplaySearch.css";

export default function DisplaySearch(props) {
  return (
    <div className="DisplaySearch">
      <h1 className="word">{props.result.word}</h1>
      <hr className="horizontalLine" />
      <h3>
        {props.result.phonetics[0].text}
        {"  "}•{"  "}
        <Audio audio={props.result.phonetics[0].audio} />
      </h3>
      {props.result.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <PartOfSpeech meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
