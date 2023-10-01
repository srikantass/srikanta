import React, { useState } from 'react';

function DigitSum() {
  const [inputNumber, setInputNumber] = useState('');
  const [sum, setSum] = useState(null);

  const sumDigits = () => {
    const numberString = inputNumber.toString();
    const digitArray = numberString.split('').map(Number);
    const digitSum = digitArray.reduce((acc, curr) => acc + curr, 0);
    setSum(digitSum);
  };

  return (
    <div>
      <input 
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button onClick={sumDigits}>Sum Digits</button>

      {sum !== null && (
        <p>Sum of Digits: {sum}</p>
      )}
    </div>
  );
}

export default DigitSum;
