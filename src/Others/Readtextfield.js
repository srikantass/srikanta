import React, { useState } from 'react';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <label>
        Type something:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default MyComponent;
