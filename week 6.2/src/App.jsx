import { useState,useMemo } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";
// {/* <Todo id={1} /> */}
// task 1 input form bnana user se value 1-n tk sum dena ek button hoga wo counter ka value increase krega
// iss code counter change ho rha h,command first line pr firse count compute ho rha h jb ki input value change nhi hua
// to solve this we can use useeffect and useemeno
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  let count=useMemo(function()
  {
    let a=0;
    for (let i =1; i <=inputValue; i++) {
     a=a+i;
      
    }
    return a;

  },[inputValue])


 

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
 
}

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async function (
//       res
//     ) {
//       const json = await res.json();
//       setTodo(json.todo);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>
//     </div>
//   );
// }
export default App;
