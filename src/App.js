import "./App.css";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  window.addEventListener('load', () => {
    document.body.style.background = "linear-gradient(#BCC5CE, #939FAE)";
  });
  // document.body.style.background = "linear-gradient(#BCC5CE, #939FAE)";
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
const [mode,setMode] = useState("linear-gradient(#BCC5CE, #939FAE)");

 
  const toggleMode = ()=>{
    if(mode === "linear-gradient(#BCC5CE, #939FAE)"){
    setMode('black')
    document.body.style.background = "black";
    console.log('hello')


    }else{
      setMode("linear-gradient(#BCC5CE, #939FAE)")
      document.body.style.background = "linear-gradient(#BCC5CE, #939FAE)";

    }
  }


  return (
    <>
      <Navbar title="My Text Editor" home="Home" about="About Us"  toggleMode = {toggleMode}/>
      <Alert alert={alert} />
      <TextContainer showAlert = {showAlert} heading="Enter Text to Analyze" />
    </>
  );
}

export default App;
