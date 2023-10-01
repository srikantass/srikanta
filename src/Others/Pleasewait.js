import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  const startProcess = () => {
    setLoading(true);

    // Simulating a time-consuming process
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Assuming the process takes 3 seconds
  };

  return (
    <div>
      <h1>React App</h1>
      <button onClick={startProcess}>Start Process</button>
      {loading && <div className="overlay">Please wait...</div>}
    </div>
  );
}

export default App;
