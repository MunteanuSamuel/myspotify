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
                    return <button className="loggin__btn"><Link className="loggin__link" to="/Login">Login</Link></button>
                }
        };

    return (
        <nav className="navbar__component navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#nav__container" aria-controls="nav__container" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <section className="collapse navbar-collapse" id="nav__container">
                <ul className="list__container navbar-nav">
                    <li className="nav__item">
                        <Link className="nav__link" to="/"><FontAwesomeIcon
                            icon={faHome}
                        /> Home<span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav__item">
                        <Link className="nav__link" to="/Categories">Categories</Link>
                    </li>

                    <li className="nav__item">
                        <Link className="nav__link" to="/About">About</Link>
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