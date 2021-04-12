import React from "react";
import "./css/Definitions.css";

export default function Definitions(props) {
  return (
    <div className="Definitions container">
      {props.definition.definition && (
        <div>
          <h2 className="subtitle">Definitions</h2>
          <hr className="secondHorizontalLine" />
          <p>
            <strong>definition: </strong>
            {props.definition.definition}
          </p>
        </div>
      )}
      {props.definition.example && (
        <p>
          <strong>example: </strong>
          {props.definition.example}
        </p>
      )}

      {console.log(props.definition.synonyms)}
      {props.definition.synonyms && (
        <div>
          <h2 className="subtitle">Synonyms</h2>
          <hr className="secondHorizontalLine" />
          <div className="row container">
            {props.definition.synonyms.map((syn, index) => (
              <div className="col-4" key={index}>
                <p>{syn}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {props.definition.antonyms && (
        <div>
          <h2 className="subtitle">Antonyms</h2>
          <hr className="secondHorizontalLine" />
          <div className="row container">
            {props.definition.antonyms.map((ant, index) => (
              <div className="col-4" key={index}>
                <p>{ant}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
