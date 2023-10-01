import React, { useState, useRef, useEffect } from 'react'
import Barcode from 'react-jsbarcode';
import "./Barcode.css"
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import image1 from "../images/234.png"
import { useReactToPrint } from 'react-to-print';
import PleaseWaitPopup from '../Barcode/PleaseWaitPopup';
import '../Barcode/PleaseWaitPopup.css';


function Barcodetemp() {

    const componentPDF = useRef();
    const [sertype, setSertype] = useState('');
    const [eightchar, setEightchar] = useState('');
    const [numofbars, serNumofbars] = useState('');
    const [eightchararray, setEightchararray] = useState([]);
    const [eightchartemp, setEightchartemp] = useState(0)
    const [articlenumber, setAritclenumber] = useState([]);
    const [passwordError, setPasswordError] = useState('');
    const [passwordError2, setPasswordError2] = useState('');
    const [passwordError3, setPasswordError3] = useState('');
    const [showPleaseWait, setShowPleaseWait] = useState(false);

    const splitIntoColumns = (array, columns) => {
        const result = [];
        const itemsPerColumn = Math.ceil(array.length / columns);

        for (let i = 0; i < columns; i++) {
            result.push(array.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
        }

        return result;
    };


    const handleeightchar = (e) => {
        setEightchartemp(Number(e.target.value.replace(/\D/g, '')));
        setEightchar(Number(e.target.value.replace(/\D/g, '')));
        if (isDisabled == false) {
            setIsDisabled(true)
        }

    };

    const handlenumofbars = (e) => {
        serNumofbars(e.target.value.replace(/\D/g, ''));
        if (isDisabled == false) {
            setIsDisabled(true)
        }
    };

    const text2focus = useRef(null);
    const text3focus = useRef(null);

    const focustext2 = () => {
        // Focus the dropdown menu
        text2focus.current.focus();
        text2focus.current.select();
    }

    const focustext3 = () => {
        // Focus the dropdown menu
        text3focus.current.focus();
        text3focus.current.select();
    }


    const performCalculation = (number) => {

        const numberString = number.toString();

        let digit1 = parseInt(numberString[0] * 8);
        let digit2 = parseInt(numberString[1] * 6);
        let digit3 = parseInt(numberString[2] * 4);
        let digit4 = parseInt(numberString[3] * 2);
        let digit5 = parseInt(numberString[4] * 3);
        let digit6 = parseInt(numberString[5] * 5);
        let digit7 = parseInt(numberString[6] * 9);
        let digit8 = parseInt(numberString[7] * 7);

        let ninthdigit = (11 - ((digit1 + digit2 + digit3 + digit4 + digit5 + digit6 + digit7 + digit8) % 11));

        if (ninthdigit === 10) {
            ninthdigit = 0;
        }
        else if (ninthdigit === 11) {
            ninthdigit = 5;
        }

        number = (`${sertype}${number}${parseInt(ninthdigit)}IN`);


        return number;
    };


    const columns = splitIntoColumns(articlenumber, 3);

    const handleKeyDown = (e) => {

        if (e.key === 'Tab' || e.key === 'Enter') {

            setPasswordError('');

            if (eightchartemp.toString().length === 8) {

                //setIsDisabled(!isDisabled);                
            }
            else {
                alert("Enter correct digits");

                focustext2();
            }
        }
        else {
            setPasswordError("Use TAB or ENTER key after entering");
        }
    };

    const [isDisabled, setIsDisabled] = useState(true);

    const handleKeyDown2 = (e) => {
        if (e.key === 'Tab' || e.key === 'Enter') {
            setPasswordError2('');
        }
        else {
            setPasswordError2("Use TAB or ENTER key after entering");
        }
    };

    const handleKeyDown3 = (e) => {
        if (e.key === 'Tab' || e.key === 'Enter') {
            setIsDisabled(!isDisabled);
            setPasswordError3('');
            buttonclick();
        }
        else {
            setPasswordError3("Use TAB or ENTER key after entering");
        }
    };


    const generatepdf = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "Barcode List",
        onAfterPrint: () => alert("Exported to PDF successfully.")
    });

    const buttonclick = () => {

        setShowPleaseWait(true);

        const numCount = parseInt(numofbars); // Change this to generate a different number of elements
        const actualnumber = parseInt(eightchartemp);
        const numbers1 = Array.from({ length: numCount }, (_, i) => (actualnumber + i));
        setEightchararray(numbers1);

        const updatedNumbers = eightchararray.map(number => performCalculation(number));

        setAritclenumber(updatedNumbers);

        setShowPleaseWait(false);
    };

    const handleclick = () => {

        if (sertype.toString().length === 2) {
            if (eightchartemp.toString().length === 8) {

                buttonclick();
            }
            else {
                alert("Enter correct digits");

                focustext2();
            }
        }
        else {

            alert("Entet Correct Service type.")

        }
    };


    const rows = [];
    const columnsPerRow = 3;

    for (let i = 0; i < articlenumber.length; i += columnsPerRow) {
        const rowItems = articlenumber.slice(i, i + columnsPerRow);
        const columns = rowItems.map((item, index) => (
            <td key={index}><div className='align1'><img className='ems' src={image1} alt='Example1'></img></div>{<Barcode value={item} options={{ format: 'code128', displayValue: true, height: 30, width: 1.5, fontSize: 15 }} renderer="svg" />}</td>
        ));

        rows.push(
            <tr key={i / columnsPerRow}>
                {columns}
            </tr>
        );
    }



    return (
        <center>
            <div style={{ marginTop: "10px", width: "500px", border: "1px solid black", borderRadius: "5px" }}>
                <center>
                    <div style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
                        <div style={{ margin: "10px", marginright: "0px", textAlign: "right", width: "200px" }}>
                            <h1>Enter Service Type :</h1>
                        </div>

                        <div style={{ margin: "10px", marginleft: "0px", textAlign: "left", width: "200px" }}>
                            <input type="text"
                                onChange={(e) => setSertype(e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase())}
                                value={sertype}
                                maxLength="2"
                                onKeyDown={handleKeyDown2}
                                //ref={inputRef}
                                style={{ width: "100px", textAlign: "center", border: "1px solid gray", borderRadius: "5px" }}
                            ></input>
                            <div> <span className="error">{passwordError2}</span></div>
                        </div>
                    </div>

                    <div style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
                        <div style={{ margin: "10px", marginright: "0px", textAlign: "right", width: "200px" }}>
                            <h1>Enter 1st eight Characters :</h1>
                        </div>

                        <div style={{ margin: "10px", marginleft: "0px", textAlign: "left", width: "200px" }}>
                            <input maxLength="8"
                                type="text"
                                value={eightchar}
                                onChange={handleeightchar}
                                onKeyDown={handleKeyDown}
                                ref={text2focus}
                                style={{ width: "100px", textAlign: "center", border: "1px solid gray", borderRadius: "5px" }}></input>
                            <div> <span className="error">{passwordError}</span></div>
                        </div>
                    </div>

                    <div style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
                        <div style={{ margin: "10px", marginright: "0px", textAlign: "right", width: "200px" }}>
                            <h1>Number of Barcodes :</h1>
                        </div>

                        <div style={{ margin: "10px", marginleft: "0px", textAlign: "left", width: "200px" }}>
                            <input maxLength="4"
                                type="text"
                                value={numofbars}
                                onChange={handlenumofbars}
                                onKeyDown={handleKeyDown3}
                                ref={text3focus}
                                style={{ width: "100px", textAlign: "center", border: "1px solid gray", borderRadius: "5px" }}></input>
                            <div> <span className="error">{passwordError3}</span></div>
                        </div>
                    </div>

                    <div style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
                        <div style={{ margin: "10px", textAlign: "center", width: "400px" }}>
                            <button style={{ marginleft: "30px", backgroundColor: "lightgray", paddingLeft: "20px", paddingRight: "20px", border: "1px solid black", borderRadius: "3px" }}
                                onClick={handleclick}
                                disabled={isDisabled}>Generate</button>
                        </div>
                    </div>


                </center>
            </div>

            <div ref={componentPDF} className="table-container" style={{ marginTop: "10px", width: "100%" }}>
                <table className="scrollable-table" id="barcodetable">
                    {/* <thead style={{ textAlign: "center" }}>
                        <tr >
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                        </tr>
                    </thead> */}
                    {/* <tbody>
                        {eightchararray.map((items, index) => (
                            <tr style={{ textAlign: "center" }}>
                                <td>{index + 1}</td>
                                <td>{items}</td>
                                <td >{<Barcode value={items} options={{ format: 'code128', displayValue: false, height: 30, width: 1.5, fontSize: 15 }} renderer="svg" />}</td>
                            </tr>
                        ))}

                    </tbody> */}

                    {/* <tbody>
                        {columns[0].map((item, index) => (
                            <tr key={index}>
                                <td><div className='align1'><img className='ems' src={image1} alt='Example1'></img></div>{<Barcode value={item} options={{ format: 'code128', displayValue: true, height: 30, width: 1.5, fontSize: 15 }} renderer="svg" />}</td>
                                <td><div className='align1'><img className='ems' src={image1} alt='Example1'></img></div>{<Barcode value={columns[1][index]} options={{ format: 'code128', displayValue: true, height: 30, width: 1.5, fontSize: 15 }} renderer="svg" />}</td>
                                <td><div className='align1'><img className='ems' src={image1} alt='Example1'></img></div>{<Barcode value={columns[2][index]} options={{ format: 'code128', displayValue: true, height: 30, width: 1.5, fontSize: 15 }} renderer="svg" />}</td>
                            </tr>
                        ))}
                    </tbody> */}

                    <tbody>
                        {rows}
                    </tbody>

                </table>
            </div>
            <div style={{ margin: "10px" }}>
                <button
                    className='btn2'
                    onClick={generatepdf}
                    style={{ marginleft: "30px", backgroundColor: "lightgray", paddingLeft: "20px", paddingRight: "20px", border: "1px solid black", borderRadius: "3px" }}>Export to PDF</button>
                <PleaseWaitPopup show={showPleaseWait} />
            </div>

        </center>
    )
}

export default Barcodetemp;