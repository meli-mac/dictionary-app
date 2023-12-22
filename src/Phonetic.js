import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a rel="noreferrer" href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <p>{props.phonetic.text}</p>
    </div>
  );
}
