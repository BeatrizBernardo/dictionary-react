import React from "react";
import "./css/PartOfSpeech.css";
import Definitions from "./Definitions";

export default function PartofSpeech(props) {
  /* setMeaning({
            partOfSpeech: meaning.data[0].meanings[0].partOfSpeech,
            definition: meaning.data[0].meanings[0].definitions[0].definition,
            example: meaning.data[0].meanings[0].definitions[0].example,
            synonyms: meaning.data[0].meanings[0].definitions[0].synonyms,
          });*/
  return (
    <div className="PartOfSpeech container">
      <h2 className="speech">{props.meaning.partOfSpeech}</h2>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Definitions definition={definition} />
          </div>
        );
      })}
    </div>
  );
}
