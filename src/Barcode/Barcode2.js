import React, { useState, useRef } from 'react'

function Barcode() {
    const [sertype, setSertype] = useState('');
    const [eightchar, setEightchar] = useState('');
    const [numofbars, serNumofbars] = useState('');

    const [char1, setChar1] = useState('');
    const [char2, setChar2] = useState('');
    const [char3, setChar3] = useState('');
    const [char4, setChar4] = useState('');
    const [char5, setChar5] = useState('');
    const [char6, setChar6] = useState('');
    const [char7, setChar7] = useState('');
    const [char8, setChar8] = useState('');
    const [ninthnumber, setNinthnumber] = useState('');

    const handleeightchar = (e) => {
        setEightchar(e.target.value.replace(/\D/g, ''));
    };

    const handlenumofbars = (e) => {
        serNumofbars(e.target.value.replace(/\D/g, ''));
    };

    const text2focus = useRef(null);
    const focustext2 = () => {
        // Focus the dropdown menu
        text2focus.current.focus();
        text2focus.current.select();
    }

    const handleclick = () => {

        if (eightchar.length == 8) {
            setChar1(eightchar[0] * 8);
            setChar2(eightchar[1] * 6);
            setChar3(eightchar[2] * 4);
            setChar4(eightchar[3] * 2);
            setChar5(eightchar[4] * 3);
            setChar6(eightchar[5] * 5);
            setChar7(eightchar[6] * 9);
            setChar8(eightchar[7] * 7);

            var ninthnumbertemp = (11 - ((char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8) % 11));

        }
        else
        {
            alert("Enter correct digits");

            focustext2();
        }

       

        if (ninthnumbertemp >= 1 && ninthnumbertemp <= 9) {
            setNinthnumber(ninthnumbertemp);
        }
        else if (ninthnumbertemp === 10) {
            setNinthnumber(0);
        }
        else {
            setNinthnumber(5);
        }
    };


    return (
        <center>
            <div style={{ marginTop: "10px", width: "500px", border: "1px solid black" }}>
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
                                style={{ width: "100px", textAlign: "center", border: "1px solid gray", borderRadius: "5px" }}
                                 ></input>

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
                                ref={text2focus}
                                style={{ width: "100px", textAlign: "center", border: "1px solid gray", borderRadius: "5px" }}></input>
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
                                style={{ width: "100px", textAlign: "center", border: "1px solid gray", borderRadius: "5px" }}></input>
                        </div>
                    </div>

                    <div style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
                        <div style={{ margin: "10px", textAlign: "center", width: "400px" }}>
                            <button style={{ marginleft: "30px", backgroundColor: "lightgray" }}
                                onClick={handleclick}>Generate</button>
                        </div>
                    </div>


                </center>
            </div>

            <div style={{ marginTop: "10px", width: "500px", border: "1px solid black" }}>
                <table>
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Barcode Numbers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ textAlign: "center" }}>
                            <td>{sertype}{eightchar}{ninthnumber}IN</td>
{/* 
                            <td>{char1}</td>
                            <td>{char2}</td>
                            <td>{char3}</td>
                            <td>{char4}</td>
                            <td>{char5}</td>
                            <td>{char6}</td>
                            <td>{char7}</td>
                            <td>{char8}</td> */}
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h1>Check Digit: {ninthnumber}</h1>
                </div>
            </div>
        </center>
    )
}

export default Barcode;