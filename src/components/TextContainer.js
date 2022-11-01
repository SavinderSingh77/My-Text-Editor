import React from "react";
// {useState} is a reacr hook which helps us to use states without using class in rfc
import { useState } from "react";
import './TextContainer.css'
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

const bgClick = ()=>{
  document.getElementsByClassName("form-control")[0].style.background = 'rgba(255, 255, 255, 0.23)'
}
  return (
    <>
      <div className="container my-3">
        <h4 className="my-2">{props.heading}</h4>
        <textarea 
          className="form-control"
          rows="8"
          value={text}
          onClick = {bgClick}
          onChange={handleChnage}
          style = {{background: `rgba(255, 255, 255, 0.23)`}}
        ></textarea>
        <button
          onMouseEnter={upperCaseClick}
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
        <p> Words Count : {wordCount()} Characters :{text.length}</p>
        <p>Approx {Number.parseFloat(wordCount()*0.0067).toFixed(3)} mins for complete reading</p>
        <h4>Preview</h4>
        <p>
          {text === ""
            ? "Enter some text in the textbox to preview it here"
            : text}
        </p>
   
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000b76" fill-opacity="1" d="M0,192L34.3,170.7C68.6,149,137,107,206,112C274.3,117,343,171,411,208C480,245,549,267,617,234.7C685.7,203,754,117,823,117.3C891.4,117,960,203,1029,240C1097.1,277,1166,267,1234,218.7C1302.9,171,1371,85,1406,42.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>
    </>
  );
}
