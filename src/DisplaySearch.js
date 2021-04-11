import React from "react";
import Audio from "./Audio.js";
import PartOfSpeech from "./PartOfSpeech.js";
import Photo from "./Photo.js";
import "./css/DisplaySearch.css";

export default function DisplaySearch(props) {
  return (
    <div className="DisplaySearch">
      <h1 className="word">{props.result.word}</h1>
      <hr className="horizontalLine" />
      <h3>
        {props.result.phonetics[0].text !== undefined && (
          <span>{props.result.phonetics[0].text}</span>
        )}

        {props.result.phonetics[0].text !== undefined &&
          props.result.phonetics[0].audio && (
            <span>
              {"  "}•{"  "}
            </span>
          )}

        {props.result.phonetics[0].audio && (
          <Audio audio={props.result.phonetics[0].audio} />
        )}
      </h3>
      <h3 className="origin">
        {props.result.origin !== undefined && (
          <span>
            <strong>Origin:</strong>
            {props.result.origin}
          </span>
        )}
      </h3>

      <Photo photo={props.photo} />

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
