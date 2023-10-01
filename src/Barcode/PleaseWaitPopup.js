import React from 'react';

const PleaseWaitPopup = ({ show }) => {
  return (
    <div className={`please-wait-popup ${show ? 'active' : ''}`}>
      <div className="popup-content">
        <p>Please wait...</p>
      </div>
    </div>
  );
};

export default PleaseWaitPopup;
