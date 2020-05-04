import React from "react";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CardCategory = ({categorie}) => {
    return (
        <div id="carduri">
      <span>
        <FontAwesomeIcon
            icon={faHome}
        />
      </span>
            <p>{categorie}</p>
        </div>
    );
};

export default CardCategory;