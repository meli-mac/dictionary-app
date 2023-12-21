import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition: {definition.definition}</strong>
            <br />
            <br />
            <strong>Example: </strong>
            <Example example={definition.example} />
            <br />
            <br />
            <strong>Synonyms: </strong>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
