import React from "react";
import "./css/Photo.css";

export default function Photo(props) {
  if (props.photo.length > 0) {
    return (
      <div className="Photo container">
        <div className="row">
          {props.photo.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid image"
                    alt={photo.url}
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
