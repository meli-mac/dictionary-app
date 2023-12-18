import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.meanings.definition}
        <br />
        <strong>Example: </strong>
        <Example example={props.meanings.example} />
        <br />
        <Synonyms synonyms={props.meanings.synonyms} />
      </p>
    </div>
  );
}
