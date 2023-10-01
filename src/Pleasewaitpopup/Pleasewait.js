import React, { useState } from 'react';
import PleaseWaitPopup from '../Pleasewaitpopup/PleaseWaitPopup';
import '../Pleasewaitpopup/PleaseWaitPopup.css';

function App() {
  const [showPleaseWait, setShowPleaseWait] = useState(false);

  const startLongProcess = () => {
    setShowPleaseWait(true);

    // Simulate a long process
    setShowPleaseWait(false);
  };

  return (
    <div>
      <button onClick={startLongProcess}>Start Long Process</button>
      <PleaseWaitPopup show={showPleaseWait} />
    </div>
  );
}

export default App;
