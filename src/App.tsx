import { useState } from "react";
import { Module03 } from "./components/Module03";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Module03 />
    </div>
  );
}

export default App;
