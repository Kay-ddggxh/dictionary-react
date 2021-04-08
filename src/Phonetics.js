import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} className="btn btn-primary">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
