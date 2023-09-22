import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Use a regular expression to remove non-lowercase letters
    const lowercaseValue = value.replace(/[^a-z]/g, '');

    setInputValue(lowercaseValue);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
    </div>
  );
}

export default App;
