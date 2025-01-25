import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlerDecreaseStep() {
    setStep((prevStep) => prevStep - 1);
  }

  function handlerIncreaseStep() {
    setStep((prevStep) => prevStep + 1);
  }

  function handlerDecreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function handlerIncreaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function calculateNewDate() {
    const currentDate = new Date();
    const days = count * step;
    currentDate.setDate(currentDate.getDate() + days);

    if (count === 0) {
      return `Today is ${currentDate.toDateString()}`;
    }
    if (count > 0) {
      return `${days} day(s) from today is ${currentDate.toDateString()}`;
    }
    if (count < 0) {
      return `${Math.abs(
        days
      )} day(s) ago today was ${currentDate.toDateString()}`;
    }
  }

  return (
    <div>
      <h1>Date calculation</h1>
      <div>
        <button onClick={handlerDecreaseStep}>-</button>
        <span className="step">Step (days) {step}</span>
        <button onClick={handlerIncreaseStep}>+</button>
      </div>
      <div>
        <button onClick={handlerDecreaseCount}>-</button>
        <span className="step">Count: {count}</span>
        <button onClick={handlerIncreaseCount}>+</button>
      </div>
      <p className="display">{calculateNewDate()}</p>
    </div>
  );
}
