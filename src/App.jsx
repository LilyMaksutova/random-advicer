import { useState, useEffect } from "react";
import "./App.css";
import { getAdvice } from "./services/api.service";

function App() {
  const defaultAdvice = { id: 0, avice: "" };
  const [advice, setAdvice] = useState(defaultAdvice);

  const cb = () => {
    getAdvice()
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.error(error));
  };
  useEffect(cb, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-800">
      <h2>advice #{advice.id}</h2>
      <p>"{advice.advice}"</p>
      <button onClick={cb}>R</button>
    </div>
  );
}



export default App;
