import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../style/NavBar.css'


const NavBar = () => {

    const [user, setUser] = useState('');

    useEffect(() => {
        getUser();
    });

    const token = localStorage.getItem('token');
    const parsedToken = JSON.parse(token);


    const getUser = async () => {
        if (token !== null && token !== undefined) {
            const response = await fetch('https://api.spotify.com/v1/me',
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${parsedToken.token}`
                    }
                }
            );

            const data = await response.json();
            setUser(data.display_name);

        }
    };

        const disableLogin = () => {
                if (token) {
                    console.log(user);
                    return `logged as ${user}`
                }else{
                    return <button><Link className="navBar-link" to="/Login">Login</Link></button>
                }
        };

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <SearchBar/>
            <ul className="nav-container">
                <li className="nav-item active">
                    <Link className="nav-link" to="/"><FontAwesomeIcon
                        icon={faHome}
                    /> Home<span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/Categories">Categories</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>

                <li className="nav-item">
                    {disableLogin()}
                </li>
            </ul>

        </div>

    );
};


export default NavBar;