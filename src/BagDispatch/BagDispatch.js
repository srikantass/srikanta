import React, { useState, useRef } from 'react'
import { FiSave } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import "./Navbar.css"
import Logo from "../images/India_Post.png"
import Checkbox from '@mui/material/Checkbox'
import { pink } from '@mui/material/colors';

const BagDispatch = () => {

    const [bagData, setBagData] = useState({
        scheduleName: '',
        fromOffice: '',
        bagNumber: '',
        DespatchtoOffice: '',
        ClosedtoOffice: '',
        ScheduleID: '',
        UserID: '',
        SetNo: '',
        BagType: ''
    });

    const [selectedValue, setSelectedValue] = useState('Select One');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setBagData({ ...bagData, scheduleName: event.target.value })
    }

    const dropdownRef = useRef(null);
    const focusdrop = () => {
        // Focus the dropdown menu
        dropdownRef.current.focus();
        const clcikdrop = () => {
            // Focus the dropdown menu
            dropdownRef.current.click();
    }
}



        // State to store the list of bag items
        const [bagItems, setBagItems] = useState([]);
        const [totalbags, setTotalbags] = useState(0);
        const [checkedRows, setCheckedRows] = useState([]);

        function handleCheckboxChange(id) {
            setCheckedRows(prevCheckedRows => {
                if (prevCheckedRows.includes(id)) {
                    return prevCheckedRows.filter(rowId => rowId !== id);
                } else {
                    return [...prevCheckedRows, id];
                }
            });
        }


        const handleBagNumberChange = (e) => {
            const value = e.target.value;
            if (value.length === 13) {
                setBagData({ ...bagData, bagNumber: value.toUpperCase() });
            } else {
                setBagData({ ...bagData, bagNumber: value });
            }
        };

        function handleReadCheckedRows() {
            const selectedRowsData = bagItems.filter(row => checkedRows.includes(row.id));
            console.log(selectedRowsData);
        }

        function handleSelectAll() {
            if (checkedRows.length === bagItems.length) {
                setCheckedRows([]);
            } else {
                setCheckedRows(bagItems.map(row => row.id));
            }
        }


        const handleSubmit = (e) => {
            e.preventDefault();
            const newItem = { ...bagData };
            if (selectedValue === "Select One") {
                alert("Select Schedule Name")
                // focusdrop();
                clcikdrop();
                
            }
            else {

                console.log({selectedValue})
                setBagItems([...bagItems, newItem]);

                setBagData({
                    scheduleName: '',
                    fromOffice: '',
                    bagNumber: '',
                    DespatchtoOffice: '',
                    ClosedtoOffice: '',
                    ScheduleID: '',
                    UserID: '',
                    SetNo: '',
                    BagType: ''
                });
            }
            // Clear the form fields

        };


        let totalbagnum = 0;

        const [isCheckAll, setIsCheckAll] = useState(false);
        const [isCheck, setIsCheck] = useState([]);

        const handleClick = e => {
            const { id, checked } = e.target;
            setIsCheck([...isCheck, id]);
            if (!checked) {
                setIsCheck(isCheck.filter(item => item !== id));
            }
        };




        const renderTableRows = () => {
            return bagItems.map((item, index) => (
             
                <tr key={index}>
                    <td>
                        <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />                                              {/* <input

                    {/* <input
                        id={`checkbox-${index}`}
                        label={`checkbox${index}`}
                        type="checkbox"
                        value=""
                        handleClick={handleClick}
                        isChecked={isCheck.includes(index)}
                        // onChange={() => handleCheckboxChange(item.id)}
                        // checked={checkedRows.includes(item.id)}
                        className="px-3 py-2 bg-gray-100 accent-red-500 border-gray-300 rounded dark:focus:ring-red-600"
                    /> */}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 font-medium">{totalbagnum = index + 1}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.bagNumber}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.scheduleName}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.fromOffice}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.DespatchtoOffice}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.ClosedtoOffice}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.ScheduleID}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.UserID}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.SetNo}</td>
                    <td className="whitespace-nowrap px-3 py-2">{item.BagType}</td>
                </tr>

            ));


        };


        return (
            <>
                <div >
                    <div>
                        <div className=' bg-amber-300 h-100 inline-flex items-center ml-6 mr-6'>
                            <img className="logo" src={Logo} alt=""></img>
                            <h2 className='font-bold text-2xl text-gray-500'>India Post Visibility System 2.0</h2>
                        </div>
                    </div>
                </div>




                <div className='h-max ml-80'>

                    <div className='h-8 border-b-2 border-gray-400 mb-2.5 text-xl font-bold mr-6 text-gray-600'>Bag Despatch</div>
                    <form onSubmit={handleSubmit} >

                        <div className='flex pb-1'>
                            <div className='w-36 p-1'>
                                <label className="pr-2 mt-2 font-semibold text-gray-400">Schedule Name</label>
                            </div>
                            <div className='w-64'>
                                <select onChange={handleChange} ref={dropdownRef} className=" focus:border-red-600 border p-1 border-gray-500 rounded-md font-semibold text-gray-500 focus:outline-none hover:border-sky-500 shadow-xl autof" autoFocus>
                                    <option value="Select One" selected>Select One</option>
                                    <option value="MumbaiNSH_PuneNSH_DMMS" >
                                        MumbaiNSH_PuneNSH_DMMS
                                    </option>
                                    <option value="Pune_Bangluru_AIR">Pune_Bangluru_AIR</option>
                                    <option value="itme1">Item 3</option>


                                </select>
                            </div>
                            <div className='w-36 p-1'>
                                <label className="p-2 font-semibold text-gray-400">From Office</label>
                            </div>
                            <div className='w-48'>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={bagData.fromOffice}
                                    onChange={(e) => setBagData({ ...bagData, fromOffice: e.target.value })}
                                    className=" border-gray-500 border p-1 rounded-md focus:border-sky-500 focus:outline-none shadow-xl"
                                />
                            </div>

                        </div>



                        <div className='flex py-1 border-b-2 mr-6 border-gray-400 pb-2'>
                            <div className='w-36 p-1'>
                                <label className=" pr-2 font-semibold text-gray-400">Bag Number</label></div>
                            <div className='w-64'>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={bagData.bagNumber}
                                    onChange={(e) => setBagData({ ...bagData, bagNumber: e.target.value })}
                                    className=" border-gray-500 border p-1 rounded-md focus:border-sky-500 focus:outline-none shadow-xl"
                                />
                            </div>
                            <div className='w-36 p-1'>
                                <label className=" pl-2 font-semibold text-gray-400 p-3">Schedule ID:</label> </div>
                            <div className='w-48'>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={bagData.ScheduleID}
                                    onChange={(e) => setBagData({ ...bagData, ScheduleID: e.target.value })}
                                    className=" border-gray-500 border p-1 rounded-md focus:border-sky-500 focus:outline-none shadow-xl"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-red-700 w-24 h-8 ml-16  text-white text-sm font-semibold rounded hover:bg-red-800"
                            >
                                Enter
                            </button>

                        </div>


                        <div className='flex py-2 '>
                            <div className='w-36 p-1'>
                                <label className=" pr-2 mt-2 font-semibold text-gray-400"></label></div>
                            <div className='w-64'>

                            </div>
                            <div className='w-36 p-1'> <label className=" p-2 font-semibold text-gray-400">To Office</label></div>
                            <div className='w-48'>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={bagData.DespatchtoOffice}
                                    onChange={(e) => setBagData({ ...bagData, DespatchtoOffice: e.target.value })}
                                    className=" border-gray-500 border p-1 rounded-md focus:border-sky-500 focus:outline-none shadow-xl"
                                />
                            </div>
                        </div>

                        <div className='flex py-2 '>
                            <div className='w-36 p-1'>
                                <label className=" pr-2 mt-2 font-semibold text-gray-400">Closed to</label></div>
                            <div className='w-64'>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={bagData.ClosedtoOffice}
                                    onChange={(e) => setBagData({ ...bagData, ClosedtoOffice: e.target.value })}
                                    className=" border-gray-500 border p-1 rounded-md focus:border-sky-500 focus:outline-none shadow-xl"
                                />
                            </div>
                            <div className='w-36 p-1'> <label className=" p-2 font-semibold text-gray-400">User ID</label></div>
                            <div className='w-48'>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={bagData.UserID}
                                    onChange={(e) => setBagData({ ...bagData, UserID: e.target.value })}
                                    className=" border-gray-500 border p-1 rounded-md focus:border-sky-500 focus:outline-none shadow-xl"
                                />
                            </div>
                        </div>


                        <div className='flex py-2 '>
                            <div className='w-36 p-1'>
                                <label className=" pr-2 mt-2 font-semibold text-gray-400">Set No</label></div>
                            <div className='w-64'>
                                <input
                                    type="text"
                                    placeholder=""
                                    value={bagData.SetNo}
                                    onChange={(e) => setBagData({ ...bagData, SetNo: e.target.value })}
                                    className=" border-gray-500 border p-1 rounded-md focus:border-sky-500 focus:outline-none shadow-xl"
                                />
                            </div>
                            <div className='w-36 p-1'> <label className=" p-2 font-semibold text-gray-400">Bag Type</label></div>
                            <div className='w-48'>
                                <select className=" border p-1 border-gray-500 rounded-md font-semibold text-gray-500 focus:outline-none focus:border-sky-500 shadow-xl" autoFocus>
                                    <option value="item1" selected>
                                        Register Post
                                    </option>
                                    <option value="item2">Speed Post</option>
                                    <option value="item3">Register Parcel</option>
                                </select>
                            </div>
                        </div>



                    </form>

                    <div class="flex flex-col h-64  ">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 w-10/12 mt-2 shadow-xl rounded-lg">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table className="min-w-full text-center text-sm font-light">
                                        <thead className="border-b bg-neutral-300 font-medium dark:border-neutral-300 dark:text-neutral-800">
                                            <tr>
                                                <th className="w-30">
                                                    <Checkbox
                                                        sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />                                              {/* <input

                                                    id="default-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    handleClick={handleSelectAll}
                                                    isChecked={isCheckAll}
                                                    className="px-3 py-2 bg-gray-100 accent-red-500 border-gray-300 rounded dark:focus:ring-red-600"
                                                />
                                                Select All */}
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    Sr
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    BagNumber
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    Name of Schedule
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    From Office
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    To Office
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    Closed To
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    Schecule ID
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    User ID
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    Set No
                                                </th>
                                                <th scope="col" className="px-3 py-2">
                                                    Bag Type
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>{renderTableRows()}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='p-2 '><label className=' font-semibold text-gray-400'>Total Bags : {totalbagnum}</label></div>


                    <div className='inline-flex space-x-3'>

                        <div onClick={handleReadCheckedRows} className='bg-red-700 w-28 h-8 m-auto relative flex justify-center items-center hover:bg-red-800 rounded'>
                            <div className='text-white mr-2'><FiSave /></div>
                            <div className="text-center text-white text-sm font-semibold leading-tight">Save</div>
                        </div>

                        <div className='bg-red-700 w-28 h-8 m-auto relative flex justify-center items-center hover:bg-red-800 rounded'>
                            <div className='text-white mr-2'> <AiTwotoneDelete /></div>
                            <div className="text-center text-white text-sm font-semibold leading-tight">Delete</div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    export default BagDispatch;