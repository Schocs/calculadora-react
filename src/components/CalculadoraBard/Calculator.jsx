import React, { useState } from "react";

const Calculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [operators, setOperators] = useState([]);
  const [result, setResult] = useState("");

  const handleNumberInput = (event) => {
    const number = event.target.value;
    setNumbers([...numbers, number]);
  };

  const handleOperatorInput = (event) => {
    const operator = event.target.value;
    setOperators([...operators, operator]);
  };

  const handleEqualClick = () => {
    const calculation = numbers.reduce((acc, number, index) => {
      if (index === operators.length - 1) {
        return acc + number;
      } else {
        return acc + operators[index] * number;
      }
    }, 0);
    setResult(calculation);
  };

  return (
    <div>
      <div>
        {numbers.map((number, index) => (
          <input
            type="number"
            placeholder="Number {index + 1}"
            value={number}
            onChange={handleNumberInput}
          />
        ))}
      </div>
      <div>
        {operators.map((operator, index) => (
          <select value={operator} onChange={handleOperatorInput}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
        ))}
      </div>
      <button onClick={handleEqualClick}>=</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;