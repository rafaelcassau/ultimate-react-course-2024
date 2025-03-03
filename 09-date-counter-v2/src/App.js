import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleChangeRangeStep(e) {
    setStep(e.target.value);
  }

  function handleChangeInputCount(e) {
    let count = e.target.value;
    if (!count) {
      count = 0;
    }
    setCount(count);
  }
  function handleDecreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleIncreaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
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
        <input
          className="step"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={handleChangeRangeStep}
        />
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <input type="text" value={count} onChange={handleChangeInputCount} />
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <p className="display">{calculateNewDate()}</p>
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}
