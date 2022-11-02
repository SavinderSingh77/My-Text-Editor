import "./App.css";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  document.body.style.background = "linear-gradient(#BCC5CE, #939FAE)";
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
const [mode,setMode] = useState("white")
  const toggleMode = ()=>{
    if(mode == 'white'){
    setMode('black')

    }else{
      setMode('white')

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
