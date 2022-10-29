import React from "react";
// {useState} is a reacr hook which helps us to use states without using class in rfc
import { useState } from "react";

export default function TextContainer(props) {
  const [text, setText] = useState("Enter text to here");

  // Making our textbox an editable text box
  const handleChnage = (e) => {
    setText(e.target.value);
  };
const upperCaseClick = ()=>{
    let upperCaseText = text;
    setText(upperCaseText.toUpperCase())
}

const lowerCaseClick = ()=>{
    let lowerCaseText = text;
    setText(lowerCaseText.toLowerCase())
}

const clearTextClick = ()=>{
    let clearText = "";
    setText(clearText)
}

const copyTextClick = ()=>{
    let copyText = text;
 
    navigator.clipboard.writeText(copyText);
}

  return (
    <>
      <div className="container my-3">
        <h4 className="my-2">{props.heading}</h4>
        <textarea
          className="form-control"
          rows="8"
          value={text}
          onChange={handleChnage}
        ></textarea>
        <button
          onClick={upperCaseClick}
          type="button"
          className="btn btn-primary my-3 mx-2"
        >
          Convert to Upper Case
        </button>
        <button onClick={lowerCaseClick} type="button" className="btn btn-primary my-3 mx-2">
          Convert to Lower Case
        </button>
        <button type="button" className="btn btn-primary my-3 mx-2">
          Convert to Tilte Case
        </button>
        <button onClick = {clearTextClick} type="button" className="btn btn-primary my-3 mx-2">
          Clear Text
        </button>
        <button onClick = {copyTextClick} type="button" className="btn btn-primary my-3 mx-2">
          Copy to Clipboard
        </button>
        <button type="button" className="btn btn-primary my-3 mx-2">
          Remove Extra Spaces
        </button>
        <h4>Your Text Summary</h4>
        <p> Words Count : Characters : </p>
        <p>Approx 3 mins for complete reading</p>
        <h5>Preview</h5>
      </div>
    </>
  );
}
