import React from "react";
import '../ComponentsStyle/Artist.css'

const Artist = ({ name, id , popularity, }) => {
    return (
        <div className="search__wrapper">
                <section className="search__card">
                    <a className="search__link" href={`https://open.spotify.com/artist/${id}`} target="_blank">
                        <h3 className="search__name">{name}</h3>
                        <p className="search__popularity">Popularity {popularity}</p>
                    </a>
                </section>
        </div>
    )
};

export default Artist;