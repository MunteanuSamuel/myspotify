import React from "react";

const Artist = ({key, name, image, popularity}) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={`image for ${name}`}></img>
            <p>{popularity}</p>
        </div>
    )
};

export default Artist;