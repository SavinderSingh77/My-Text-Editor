import "./App.css";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";

function App() {



  return (
    <>
      <Navbar title="My Text Editor" home="Home" about="About Us"  />
      <TextContainer heading = "Enter Text to Analyze" />
    </>
  );
}

export default App;
