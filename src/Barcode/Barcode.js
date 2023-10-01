import { useState } from 'react';
import Barcode from 'react-jsbarcode';
import "./Barcode.css"
import Button from "@mui/material/Button"

// npm install react-jsbarcode
// https://github.com/lindell/JsBarcode/wiki/Options
// import Barcode from 'react-jsbarcode';

function App() {

  const [barcodevaluetemp, setBarcodevaluetemp] = useState('SS');
  const [barcodevalue, setBarcodevalue] = useState('ss');
  const [isChecked, setIsChecked] = useState(false);
  const [showtext, setShowtext] = useState("false")

  const barcodelist = ["RK123456789IN", "CK986750968IN", "EZ543678978IN"];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (isChecked === false) {
      setShowtext("true");
    }
    else {
      setShowtext("false");

    }
  }

  function Click() {
    if (barcodevalue === "") {
      setBarcodevalue("Barcode Here");
    }
    else {
      setBarcodevalue(barcodevaluetemp);
    }
  }

 
  return (

    <div className='body1'>
      <div>
 
        <br></br>
        <input
          type="text"
          placeholder="Enter Barcode Value"
        
          onChange={(e) => setBarcodevaluetemp(e.target.value)}
          className=" border-gray-500 border p-1 rounded-md focus:border-sky-500 focus:outline-none shadow-xl"
        />
        {/* <input type="text" onChange={(e) => setBarcodevaluetemp(e.target.value)}></input> */}
        <br></br>
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label>Show Text</label>
        </div>
        <Button variant="contained" onClick={Click}>Generate Barcode</Button>
        {/* <Button onClick={Click}>Show </Button> */}
        <div>

        {/* <div>{barcodelist}</div> */}
         
          {barcodelist.map((barlist, index)=><div key={index}>{<Barcode value={barlist} options={{ format: 'code128', displayValue: showtext, height: 40, width: 1.5, fontSize: 15 }} renderer="svg" />}</div>)}


        </div>
      </div>

    </div>



  )
}

export default App;