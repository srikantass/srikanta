import React, { useState } from "react";
import "../Login/Login.css";
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';


// const Url = "http://192.168.1.49:3001/usermaster/login";
const Url = "http://192.168.1.49:3001/getSchedules";
export default function Login() {


    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userDetails, setUserDetails] = useState(
        {
            username: '',
            password: ''
        }
    );
    const [isValid, setValid] = useState(true);

    const navigate = useNavigate();

    //to Check Email pattern
    const handleEmailChange = (e) => {
        setUserDetails({ ...userDetails, username: e.target.value });
        if (!userDetails.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)) {
            setEmailError('Please enter a valid email address');

        } else {
            setEmailError('');
            setValid(passwordError === '');
        }

    };

    //to check the password  pattern
    const handlePasswordChange = (e) => {
        setUserDetails({ ...userDetails, password: e.target.value });
        if (!userDetails.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
            setPasswordError('Password must have at least 6 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');

        } else {
            setPasswordError('');
            setValid(emailError === '');
        }

    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid) {
            axios.post(Url, userDetails).then((response) => {
                toast.success(`Welcome ${userDetails.username}`);
                if (response.status === 200) {
                    navigate("/Ivps")
                }
            })
                .catch((error) => {
                    console.log(error);
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    setPasswordError(error.response.data);
                    toast.error(error.response.data);
                })
        }
        else {
            alert("Enter Valid Details");

        }
    };

    return (
        <div>

            <div className="cont1">
                <center>
                    <div>
                        <h1 className="heading">Login Page</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <TextField onChange={handleEmailChange} value={userDetails.email} required id="user-name" label="User Name" variant="outlined" size="small" />
                                {/* <input type="text" value={userDetails.email}  /> */}
                                <div>
                                    <span className="error">{emailError}</span></div>
                            </div>

                            <br>
                            </br>
                            <div>
                                <TextField onChange={handlePasswordChange} value={userDetails.password} required id="password" label="Password" variant="outlined" type="Password" size="small" />
                                {/* <input type="password" value={userDetails.password} onChange={handlePasswordChange} required /> */}
                                <div> <span className="error">{passwordError}</span></div>
                            </div>
                         
                            <br>
                            </br>
                            <div className="btns">
                                {/* <Button  type="submit" className="loginbtn" variant="contained" size="large">     Login    </Button> */}

                                <div class="d-grid gap-2 col-5 mx-auto" >
                                    <button className="loginbtn1" class="btn btn-primary" type="submit" >Login</button>

                                </div>
                                <div class="d-grid gap-2 col-5 mx-auto">

                                    <button class="btn btn-primary" type="submit"><Link className="signup1" to="/Signup">Signup</Link></button>
                                </div>

                            </div>
                        </form>
                    </div>
                </center>
            </div>

        </div>
    );

}
