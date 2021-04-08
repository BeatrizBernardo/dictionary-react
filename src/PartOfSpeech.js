import React from "react";
import "./css/PartOfSpeech.css";

export default function PartofSpeech(props) {
  /* setMeaning({
            partOfSpeech: meaning.data[0].meanings[0].partOfSpeech,
            definition: meaning.data[0].meanings[0].definitions[0].definition,
            example: meaning.data[0].meanings[0].definitions[0].example,
            synonyms: meaning.data[0].meanings[0].definitions[0].synonyms,
          });*/
  return (
    <div className="PartOfSpeech">
      {console.log(props.meaning)}
      <h2 className="subtitle">{props.meaning.partOfSpeech}</h2>
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
