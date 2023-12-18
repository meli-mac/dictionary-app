import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        {props.example.map(function (example, index) {
          return <em key={index}>{example}</em>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
