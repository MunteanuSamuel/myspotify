import React from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBar/>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"><FontAwesomeIcon
                            icon={faHome}
                        /> Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Categories">Categories</Link>
                       {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>*/}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
       /* <div className="App-header">
            <nav>
                <ul className="nav-item">
                    <li className="nav-item">
                         <Link to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/About"}>About</Link>
                    </li>
                    <li className="nav-item">
                         <Link to={"/Login"}>Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Categories"}>Categories</Link>
                    </li>
                </ul>
            </nav>
        </div>*/
    );
};

export default NavBar;