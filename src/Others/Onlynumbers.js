import React, { useState } from 'react';

function Onlynumbers() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Use a regular expression to remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');

    setInputValue(numericValue);
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

export default Onlynumbers;
