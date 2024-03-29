import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// col-3 ka mtlb kitne parts me divide krna chahte ho
function App() {
  return (
    <>
      <div className="grid grid-cols-1     md:grid-cols-3">
        <div className="bg-cyan-500">hi</div>
        <div className="bg-purple-500">hi</div>
        <div className="bg-cyan-500">hi</div>
      </div>
     
    </>
  );
}

export default App;
