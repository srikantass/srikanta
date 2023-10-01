import React, { useState } from 'react';

function DigitReader() {
  const [inputNumber, setInputNumber] = useState('');
  const [digits, setDigits] = useState([]);

  const readDigits = () => {
    const numberString = inputNumber.toString();
    const digitArray = numberString.split('').map(Number);
    setDigits(digitArray);
   
  };

  return (
    <div>
      <input 
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button onClick={readDigits}>Read Digits</button>

      {digits.length > 0 && (
        <div>
          <p>Individual Digits:</p>
          <ul>
            {digits.map((digit, index) => (
              <li key={index}>{digit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DigitReader;
