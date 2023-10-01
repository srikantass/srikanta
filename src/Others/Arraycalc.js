import React, { useState } from 'react';

const NumberCalculator = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const performCalculation = (number) => {
  
    return number; // For example, doubling the number
  };

  const calculateNumbers = () => {
    const updatedNumbers = numbers.map(number => performCalculation(number));
    setNumbers(updatedNumbers);
  };

  return (
    <div>
      <button onClick={calculateNumbers}>Perform Calculation</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberCalculator;
