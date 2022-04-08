import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setCount(count + e);
  };
  return (
    <div>
      <h1 style={{ color: count % 2 === 1 ? "red" : "green" }}>
        Counter: {count}
      </h1>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        sub 1
      </button>
      <button
        onClick={() => {
          handleChange((count * 2) / 2);
        }}
      >
        double
      </button>
    </div>
  );
};
