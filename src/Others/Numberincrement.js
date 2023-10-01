import React, { useState } from 'react';

function NumberComponent() {
  // Step 1: Initialize state
  const [number, setNumber] = useState(0);

  // Step 3: Create an increment function
  const incrementNumber = () => {
    // Step 4: Update the state
    setNumber(prevNumber => prevNumber + 1);
  };

  return (
    <div>
      {/* Step 2: Render the number */}
      <p>Number: {number}</p>
      <button onClick={incrementNumber}>Increment</button>
    </div>
  );
}

export default NumberComponent;
