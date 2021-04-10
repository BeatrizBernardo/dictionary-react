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
      {props.definition.synonyms && (
        <div>
          <h2 className="subtitle">Synonyms</h2>
          <hr className="secondHorizontalLine" />
          <table className="container">
            <tbody>
              <tr>
                {props.definition.synonyms.map((syn, index) => (
                  <td key={index}>
                    <p>{syn}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {props.definition.antonyms && (
        <div>
          <h2 className="subtitle">Antonyms</h2>
          <hr className="secondHorizontalLine" />
          <table className="container">
            <tbody>
              <tr>
                {props.definition.antonyms.map((ant, index) => (
                  <td key={index}>
                    <p>{ant}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
