import React, { useState } from 'react';

const DropdownComponent = () => {
    const [selectedValue, setSelectedValue] = useState('option2');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    function checkone() {
        if (selectedValue === "option1") {
            alert("Please select the correct option")
        }
    }




    return (
        <div>
            <select value={selectedValue} onChange={handleChange}>
                <option value="option1" selected>Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>

            <div>
                <h1>{selectedValue}</h1>
                <button onClick={checkone}>Check</button>
            </div>
        </div>
    );
}

export default DropdownComponent;