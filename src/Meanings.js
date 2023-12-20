import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />
        <br />
        <strong>Example: </strong>
        <Example example={props.meaning.example} />
        <br />
        <strong>Synonyms: </strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
