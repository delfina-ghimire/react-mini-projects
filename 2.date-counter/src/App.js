import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [stepCount, setStepCount] = useState(1);
  const [count, setCount] = useState(0);

  let date = new Date("june 21 2027");
  date.setDate(date.getDate() + stepCount);

  function handleStepPrev() {
    // if (stepCount > 0)
    setStepCount((prev) => prev - 1);
  }

  function handleStepNext() {
    setStepCount((prev) => prev + 1);
  }

  function handleCountPrev() {
    //if (count > 0)
    setCount((prev) => prev - stepCount);
  }

  function handleCountNext() {
    setCount((prev) => prev + stepCount);
  }
  return (
    <div>
      <div className="stepCount">
        <input
          type="range"
          min="0"
          max="10"
          value={stepCount}
          onChange={(e) => setStepCount(Number(e.target.value))}
        />
        <h4> {`Step: ${stepCount}`} </h4>
      </div>
      <div className="stepCount">
        <input
          type="type"
          value={stepCount}
          onChange={(e) => setStepCount(Number(e.target.value))}
        />
        <h4> {`Step: ${stepCount}`} </h4>
      </div>
      <div className="step">
        <button onClick={handleStepPrev}> - </button>
        <h4> {`Step: ${stepCount}`} </h4>
        <button onClick={handleStepNext}> + </button>
      </div>
      <div className="step">
        <button onClick={handleCountPrev}> - </button>
        <h4> {`Count: ${count}`} </h4>
        <button onClick={handleCountNext}> + </button>
      </div>
      <p>
        <span>
          {" "}
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days from ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}
