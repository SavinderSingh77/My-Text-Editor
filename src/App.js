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
  const [search, searchText] = useState("")
  const searchBar = (text)=>{
    // console.log(text)
    searchText(text)
    }



  return (
    <>
      <Navbar title="My Text Editor" home="Home" about="About Us"  toggleMode = {toggleMode} mode ={mode} searchBar = {searchBar}/>
      <Alert alert={alert} />
      <TextContainer showAlert = {showAlert} heading="Enter Text to Analyze" mode = {mode} showSearch = {search} />
    </>
  );
}

export default App;
