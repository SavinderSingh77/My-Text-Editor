import "./App.css";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {

  document.body.style.transition = "1s";

 
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
const [mode,setMode] = useState("light");
if(mode === "light"){
  document.body.style.transition = "1s";
  document.body.style.background = "linear-gradient(#BCC5CE, #939FAE)";
}
 
  const toggleMode = ()=>{
    if(mode === "light"){
    setMode('black')
    
    document.body.style.background = "rgb(42 40 40)";
    showAlert('Dark Mode Enabled','Success')
    // console.log('hello')
    


    }else{
      setMode("light")
      showAlert('Light Mode Enabled','Success')
      document.body.style.background = "linear-gradient(#BCC5CE, #939FAE)";
      
     

    }
  }
  const searchBar = (text)=>{
    return console.log(text)
    }



  return (
    <>
      <Navbar title="My Text Editor" home="Home" about="About Us"  toggleMode = {toggleMode} mode ={mode} searchBar = {searchBar}/>
      <Alert alert={alert} />
      <TextContainer showAlert = {showAlert} heading="Enter Text to Analyze" mode = {mode} />
    </>
  );
}

export default App;
