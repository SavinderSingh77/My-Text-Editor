import React from "react";
// {useState} is a reacr hook which helps us to use states without using class in rfc
import { useState } from "react";
import "./TextContainer.css";
export default function TextContainer(props) {
  document.body.style.transition = '1s';
  let btns = document.getElementsByClassName("btn");
  btns = Array.from(btns);
  // console.log(props.mode);
  // console.log(btns)
  btns.forEach((el) => {
    if (props.mode === "light") {
      el.classList.add("button-style-dark");
      el.classList.remove("button-style-light");
    } else {
      el.classList.add("button-style-light");
      el.classList.remove("button-style-dark");
    }
  });

  const [text, setText] = useState("");

  // Making our textbox an editable text box
  const handleChnage = (e) => {
    setText(e.target.value);
  };
  const upperCaseClick = () => {
    let upperCaseText = text;
    setText(upperCaseText.toUpperCase());
    props.showAlert("Text converted to Upper Case", "success");
  };

  const lowerCaseClick = () => {
    let lowerCaseText = text;
    setText(lowerCaseText.toLowerCase());
    props.showAlert("Text converted to Lower Case", "success");
  };

  const clearTextClick = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text Cleared", "success");
  };

  const copyTextClick = () => {
    let copyText = document.getElementsByTagName("textarea")[0];
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const removeSpacesClick = () => {
    let arr = text.split(" ");
    // console.log(arr);
    let arrNew = [];
    arr.forEach((element) => {
      if (element === "") {
        return;
      } else {
        arrNew.push(element);
      }
    });
    setText(arrNew.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const titleCaseClick = () => {
    let arr = text.split(" ");
    // console.log(arr);
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
    props.showAlert(" Text converted to Title Case", "success");
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

  const bgClick = () => {
    
    if (props.mode === "light") {
      
      document.getElementsByClassName("form-control")[0].style.background =
        "rgba(255, 255, 255, 0.23)";
    } else {
      document.getElementsByClassName("form-control")[0].style.background =
        "rgb(197 193 193)";
    }
  }
let searchText = props.showSearch;

const kk = ()=>{

  if(text === ""){
   return 'enter text here'
 
  }
  else{
    let para = document.getElementById('paragraph')
    if(text.includes(props.showSearch) && props.showSearch !== ""){
      // console.log(text.replace(props.showSearch,'555'))
    
    //  console.log(spn.append(props.showSearch))
    var regexValue = new RegExp( `(${props.showSearch})`, 'ig');
    let b = <p style = {{color:'red'}}>{props.showSearch}</p>
    
    // console.log(para.innerHTML)
    para.innerHTML = para.innerHTML.toLowerCase().replace(regexValue,` ***${b.props.children}*** `)
    // console.log(b.props.children)
    
  return para.innerHTML.toLowerCase()
    }else{
      const para = document.getElementById('paragraph');
      return text;
    }
  
  };

}



  
  return (
    <>
      <div className="container my-3" style = {{transition:'1s'}}>
        <h4
          className="my-2"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.heading}
        </h4>
        <textarea
          className="form-control"
          rows="8"
          value={text}
          onClick={bgClick}
          onChange={handleChnage}
          style={{
            background:
              props.mode === "light"
                ? `rgba(255, 255, 255, 0.23)`
                : "rgb(197 193 193)",
            color: "#000000bf",
            fontSize: "1.3rem",
          }}
        ></textarea>
        <button
          className="btn  button-style-dark my-3 mx-2"
          type="button"
          onClick={upperCaseClick}
        >
          Convert to Upper Cases
        </button>
        <button
          onClick={lowerCaseClick}
          type="button"
          className="btn  button-style-dark my-3 mx-2"
        >
          Convert to Lower Case
        </button>
        <button
          onClick={titleCaseClick}
          type="button"
          className="btn  button-style-dark my-3 mx-2"
        >
          Convert to Tilte Case
        </button>
        <button
          onClick={clearTextClick}
          type="button"
          className="btn  button-style-dark my-3 mx-2"
        >
          Clear Text
        </button>
        <button
          onClick={copyTextClick}
          type="button"
          className="btn  button-style-dark my-3 mx-2"
        >
          Copy to Clipboard
        </button>
        <button
          onClick={removeSpacesClick}
          type="button"
          className="btn  button-style-dark my-3 mx-2"
        >
          Remove Extra Spaces
        </button>
        <h4 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Your Text Summary
        </h4>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {" "}
          Words Count : {wordCount()} Characters :{text.length}
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          Approx {Number.parseFloat(wordCount() * 0.0067).toFixed(3)} mins for
          complete reading
        </p>
        <h4 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview 
        </h4>
        <p id = "paragraph" style={{ color: props.mode === "light" ? "black" : "white" }}>
          
          {/* "Enter Text in the Textbox to preview it here !" */} 
        {kk()}
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2c296e"
          fill-opacity="1"
          d="M0,224L40,229.3C80,235,160,245,240,218.7C320,192,400,128,480,101.3C560,75,640,85,720,122.7C800,160,880,224,960,245.3C1040,267,1120,245,1200,202.7C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div id="bg-svg">
        <footer
          style={{
            background: props.mode === "light" ? `black` : "#e4e4e4",
            color: props.mode === "light" ? "white" : "black",
            transition:'1s'
          }}
        >
          Copyright &#169; 2022 SaviSingh.com
        </footer>
      </div>
    </>
  );
}
