import { useState } from "react";
import { Main } from "./Components/Home/Main";
import { Navbar } from "./Components/Navbar/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {

  const [input, handelInput] = useState("");


  return (
      <div className="">
        {/* Navbar */}
        <Navbar handelInput={handelInput} />

        <Main input={input}  />

      </div>
  );
}

export default App;
