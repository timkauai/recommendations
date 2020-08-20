import React from "react";
import "./App.css";

//import components
import Nav from "./components/Nav";
import Rec from "./components/Rec";

function App() {
  const recTitle = "SABA IS THE BEST ARTIST";
  return (
    <div className="App">
      <Nav />
      <Rec recTitle={recTitle} />
    </div>
  );
}

export default App;
