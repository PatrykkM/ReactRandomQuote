import React, { useEffect, useState } from "react";
import "./App.scss";

const App = () => {
  const [advice, setAdvice] = useState(``);
  const URLAPI = "https://api.adviceslip.com/advice";
  const fetchData = () => {
    fetch(URLAPI)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((error) => {
        console.log(error );
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="backgroundAdivce">
          <div className="advice">{advice}</div>
        </div>
        <button onClick={fetchData} className="GlitchBtn">
          Random Quote
        </button>
      </div>
    </>
  );
};

export default App;
