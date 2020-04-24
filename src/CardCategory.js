import React from "react";

const CardCategory = ({categorie, icon}) => {
    return (
        <div className="card_category">
      <span>
        <div>{icon}</div>
      </span>
            <p>{categorie}</p>
        </div>
    );
};

export default CardCategory;