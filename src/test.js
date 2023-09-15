import React, { useState } from 'react';

// Child component for individual checkboxes
const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

// Parent component
function App() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName],
    });
  };

  const handleCheckAllChange = () => {
    const areAllChecked = Object.values(checkboxes).every((value) => value === true);
    const updatedCheckboxes = {};

    for (const key in checkboxes) {
      updatedCheckboxes[key] = !areAllChecked;
    }

    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div>
      <h1>Checkboxes</h1>
      <label>
        <input
          type="checkbox"
          checked={Object.values(checkboxes).every((value) => value === true)}
          onChange={handleCheckAllChange}
        />
        Check All
      </label>

      <Checkbox
        label="Checkbox 1"
        checked={checkboxes.checkbox1}
        onChange={() => handleCheckboxChange('checkbox1')}
      />
      <Checkbox
        label="Checkbox 2"
        checked={checkboxes.checkbox2}
        onChange={() => handleCheckboxChange('checkbox2')}
      />
      <Checkbox
        label="Checkbox 3"
        checked={checkboxes.checkbox3}
        onChange={() => handleCheckboxChange('checkbox3')}
      />
    </div>
  );
}

export default App;
