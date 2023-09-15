import React, { useRef } from 'react';

const MyComponent = () => {
  const dropdownRef = useRef(null);

  const handleClick = () => {
    // Simulate a click event on the dropdown
    dropdownRef.current.click();
  };

  return (
    <div>
      <button onClick={handleClick}>Click Dropdown</button>
      <select ref={dropdownRef}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default MyComponent;
