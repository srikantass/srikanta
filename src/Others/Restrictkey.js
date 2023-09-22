import React, { useState } from 'react';

function Restrictkey() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key == 'a') {
      e.preventDefault();
      alert("This key is not allowed.")
    }
  };

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
        <label>Type Text here:</label>
      <input style={{borderColor: "lightgray"}}
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown} 
      />
    </div>
  );
}

export default Restrictkey;
