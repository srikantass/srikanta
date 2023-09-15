import React, { useState, useEffect } from 'react'
import axios from "axios";
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";
import "./Login.css";

const Dashboard = () => {

    const [profile, setProfile] = useState([]);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            setProfile(response.data);

        });

    }, []);

    return (

        <div>
            <h2>User Page</h2>
            {profile.map((user) => (
                <tr key={user.id}>
                    <td> {user.id} </td>
                    <td> {user.name} </td>

                </tr>

            ))}

<Button type="submit" className="backbtn" variant="contained" size="large"><Link to="/">      Back to Login Page     </Link></Button>

        </div>
    );
}

export { Dashboard }