import React, { useState } from "react";

function App() {

    const [numbers, setNumbers] = useState([]);
    const [afternumber, setAfternumber] = useState([]);

    const generatenumbers = () => {
        const numCount = 10; // Change this to generate a different number of elements
        const actualnumber = 12345678;
        const sertype = "EK";
        const country = "IN;"
        const numbers1 = Array.from({length: numCount}, (_, i) => (actualnumber + i));
        setNumbers(numbers1);           
    }

    

    const calcnumbers = () => {
        let digit1 = 0
        let digit2 = 0;
        const numberString = "";

        {numbers.map((item, index) => (            
            alert(item[0])
          ))}
    }

    return (
        <div>
        <button onClick={generatenumbers}>Generate Numbers</button>
        <button onClick={calcnumbers}>Calculate Numbers</button>
        <ul>
          {numbers.map((item) => (
            <li >{item}</li>
          ))}
        </ul>
      </div>
    )

}

export default App;