import React from "react";
// {useState} is a reacr hook which helps us to use states without using class in rfc
import { useState } from "react";
export default function TextContainer(props) {
  const [text, setText] = useState("");

  // Making our textbox an editable text box
  const handleChnage = (e) => {
    setText(e.target.value);
  };
  const upperCaseClick = () => {
    let upperCaseText = text;
    setText(upperCaseText.toUpperCase());
   
  };

  const lowerCaseClick = () => {
    let lowerCaseText = text;
    setText(lowerCaseText.toLowerCase());
  };

  const clearTextClick = () => {
    let clearText = "";
    setText(clearText);
  };

  const copyTextClick = () => {
    let copyText = text;
    navigator.clipboard.writeText(copyText);
    alert("Text Copied to Clipboard");
  };

  const removeSpacesClick = () => {
    let arr = text.split(" ");
    console.log(arr);
    let arrNew = [];
    arr.forEach((element) => {
      if (element === "") {
        return;
      } else {
        arrNew.push(element);
      }
    });
    setText(arrNew.join(" "));
  };

  const titleCaseClick = () => {
    let arr = text.split(" ");
    console.log(arr);
    let arrNew = [];
    arr.forEach((element) => {
      if (element === "") {
        return;
      } else {
        arrNew.push(element);
      }
    });
    let str = "";
    arrNew.forEach((e) => {
      str += e[0].toUpperCase() + e.slice(1).toLowerCase() + " ";
    });
    setText(str.slice(0, str.length - 1));
  };
  const wordCount = () => {
    let arr1 = text.split(" ");
    let words = [];
    arr1.forEach((e) => {
      if (e === "") {
        return;
      } else {
        words.push(e);
      }
    });

    return words.length;
  };
wordCount();
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
        <button
          onClick={lowerCaseClick}
          type="button"
          className="btn btn-primary my-3 mx-2"
        >
          Convert to Lower Case
        </button>
        <button
          onClick={titleCaseClick}
          type="button"
          className="btn btn-primary my-3 mx-2"
        >
          Convert to Tilte Case
        </button>
        <button
          onClick={clearTextClick}
          type="button"
          className="btn btn-primary my-3 mx-2"
        >
          Clear Text
        </button>
        <button
          onClick={copyTextClick}
          type="button"
          className="btn btn-primary my-3 mx-2"
        >
          Copy to Clipboard
        </button>
        <button
          onClick={removeSpacesClick}
          type="button"
          className="btn btn-primary my-3 mx-2"
        >
          Remove Extra Spaces
        </button>
        <h4>Your Text Summary</h4>
        <p> Words Count : {wordCount()} Characters :{text.length} </p>
        <p>Approx {Number.parseFloat(wordCount()*0.0067).toFixed(3)} mins for complete reading</p>
        <h5>Preview</h5>
        <p>
          {text === ""
            ? "Enter some text in the textbox to preview it here"
            : text}
        </p>
      </div>
    </>
  );
}
