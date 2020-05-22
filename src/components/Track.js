import React from 'react';

import '../ComponentsStyle/Track.css';

const Track = (props) => {

    return (
        <li>
            <section
                onClick={() => {
                    props.pickTrack(props.id);
                }}
                className={"track__wrapper " + ( props.isTrackPicked ? 'track__wrapper--selected' : '')}
            >
                <section className="track__main">
                    <h3>
                        { props.name }
                    </h3>
                    <section>
                        <ol className="artist__wrapper">
                            {
                                props.artists.map(artist => {
                                    return (
                                        <li className="artist">
                                            { artist }
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </section>
                </section>
                <p className="track__duration">
                    {
                        props.duration.toFixed(2)
                    }
                </p>
            </section>
        </li>
    );
};

export default Track;