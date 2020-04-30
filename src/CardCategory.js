import React from "react";


const CardCategory = ({categorie, icon}) => {
    return (
        <div id="carduri">
      <span>
        <div>{icon}</div>
      </span>
            <p>{categorie}</p>
        </div>
    );
};

export default CardCategory;