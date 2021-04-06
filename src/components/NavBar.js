import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../ComponentsStyle/NavBar.css'


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
                if (user !== undefined) {
                    return `logged as ${user}`
                }else{
                    return <Link className="loggin__link" to="/Login"><button className="loggin__btn">Login</button></Link>
                }
        };

    return (
        <nav className="navbar__component navbar-expand-lg navbar-light bg-light">

            <section className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="list__container navbar-nav">
                    <li className="nav__item">
                        <Link className="nav__link" to="/"><FontAwesomeIcon
                            icon={faHome}
                        /> Home</Link>
                    </li>

                    <li className="nav__item">
                        <Link className="nav__link" to="/Categories">Categories</Link>
                    </li>

                    <li className="nav__item">
                        <Link className="nav__link" to="/Contact">Contact</Link>
                    </li>

                    <li className="nav__item">
                        {disableLogin()}
                    </li>
                </ul>
            </section>
        </nav>
    );
};


export default NavBar;