import React, { useState } from 'react';

function DigitMultiplier() {
  const [inputNumber, setInputNumber] = useState('');
  const [multiplier, setMultiplier] = useState('');
  const [result, setResult] = useState(null);

  const multiplyDigits = () => {
    const numberString = inputNumber.toString();
    let multipliedResult = '';

    let digit1 = 0;
    let digit2 = 0;
    let digit3 = 0;

    for (let i = 0; i < numberString.length; i++) {
        if(i==0)
        {
            const digit = parseInt(numberString[i]);
            alert(digit)
            digit1 = parseInt(digit * 10);
        }
        if(i==1)
        {
            const digit = parseInt(numberString[i]);
            alert(digit)
            digit2 = parseInt(digit * 20);
        }
        if(i==2)
        {
            const digit = parseInt(numberString[i]);
            alert(digit)
            digit3 = parseInt(digit * 30);
        }

        
      
    }

    setResult(digit1+digit2+digit3);
  };

  return (
    <div>
      <input 
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <input 
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
        placeholder="Enter a multiplier"
      />
      <button onClick={multiplyDigits}>Multiply Digits</button>

      {result !== null && (
        <p>Multiplication Result: {result}</p>
      )}
    </div>
  );
}

export default DigitMultiplier;
