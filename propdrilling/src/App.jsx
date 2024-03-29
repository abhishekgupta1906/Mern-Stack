import { useState, useContext } from "react";
import { Context } from "./components/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Context.Provider value={count}>
        <Count setCount={setCount} />
      </Context.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(Context);
  return <div>{count}</div>;
}

function Buttons({setCount}) {
  const count = useContext(Context);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
