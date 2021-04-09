import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        className="btn btn-branding"
      >
        Listen
      </a>

      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
