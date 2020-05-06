import React from "react";
import CardCategory from "../CardCategory";
import {Link} from "react-router-dom";

const Categories = () => {
    return (
        <div className="Categories">
            <h1>Categories Page</h1>
            <Link className="linkCategorie" to="/categories/category">
                Categorie
            </Link>
        </div>
    )
};

export default Categories;