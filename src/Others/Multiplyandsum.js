import React, { useState } from 'react';

function DigitMultiplier() {
  const [inputNumber, setInputNumber] = useState('');
  const [multiplier, setMultiplier] = useState('');
  const [result, setResult] = useState(null);

  const multiplyAndSum = () => {
    const numberString = inputNumber.toString();
    const multiplierNumber = parseInt(multiplier);

    if (isNaN(multiplierNumber)) {
      setResult(null);
      return;
    }

    const sum = Array.from(numberString).reduce((acc, digit) => {
      const product = parseInt(digit) * multiplierNumber;
      return acc + product;
    }, 0);

    setResult(sum);
  };

  return (
    <div>
      <input 
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <input 
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
      />
      <button onClick={multiplyAndSum}>Multiply and Sum</button>

      {result !== null && (
        <p>Result: {result}</p>
      )}
    </div>
  );
}

export default DigitMultiplier;
