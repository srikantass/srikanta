import React, { useState } from 'react';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase(); // Convert to uppercase
    setInputValue(value);
  }

  return (
    <div>
      <label>
        Type lowercase characters:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default MyComponent;
