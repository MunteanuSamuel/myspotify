import React from 'react';
import { withRouter } from 'react-router-dom';
import Track from "../components/Track";
import Player from "../components/Player";
import {checkAndReturnToken} from "../Utils";
import '../PagesStyle/Tracks.css';

class Tracks extends React.Component {

    state = {
        tracks: [],
        currentTrackId: null
    };

    componentDidMount() {
        try {

            const playlistId = this.props.match && this.props.match.params ?
                this.props.match.params.id : null;

            if (playlistId) {

                const token = checkAndReturnToken(this.props.history);
                if (token === null) {
                    return;
                }


                const getTracks = async () => {
                    const tracks = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=20`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    const tracksResp = await tracks.json();
                    const tracksMap = tracksResp.items.map(item => {
                        const track = item.track ? item.track : {};
                        return {
                            id: track.id,
                            name: track.name,
                            duration: track.duration_ms ?
                                track.duration_ms / 60000 : 0,
                            artists: track.artists ?
                                track.artists.map(artist => {
                                    return artist.name;
                                }) : []
                        }
                    });
                    this.setState({
                        tracks: tracksMap
                    });

                };
                getTracks();
            }
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch tracks')
        } finally {
            console.log('I am at the end of tracks');
            this.setState({
                isLoading: false
            })
        }
    }

    onTrackClickedHandler = (id) => {
        this.setState({
            currentTrackId: id
        })
    };

    render() {
        const playlistName = this.props.location && this.props.location.state ?
            this.props.location.state.playlistName : 'Default';

        return (
            <div>
                <h1>
                    {
                        playlistName
                    }
                </h1>
                <section className="content__wrapper">
                    <section className="section__tracks">
                        <ul className="tracks__wrapper">
                            { this.state.tracks.map((track, index) => {

                                const isTrackPicked = track.id === this.state.currentTrackId;

                                return (
                                    <Track
                                        key={`Track ${track.name} ${index}`}
                                        pickTrack={this.onTrackClickedHandler}
                                        id={track.id}
                                        name={track.name}
                                        artists={track.artists}
                                        duration={track.duration}
                                        isTrackPicked={isTrackPicked}
                                    />
                                )
                            })}
                        </ul>
                    </section>
                    <section className="section__player">
                        <Player
                            trackId={this.state.currentTrackId}
                        />
                    </section>
                </section>
            </div>
        )

        /*return (
            <div>
                <h1>{playlistName}</h1>
                <div>
                    <ul>
                    { this.state.tracks.map(track => {
                        return (
                            <section
                                onClick={(event) => {
                                    this.onTrackClickedHandler(track.id);
                                }}
                            >
                                <h3>{ track.name }</h3>
                                <section>
                                    <ul>
                                        {
                                            track.artists.map(artist => {
                                                return (
                                                    <ol>
                                                        { artist }
                                                    </ol>
                                                )
                                            })
                                        }
                                    </ul>
                                </section>
                                <p>
                                    {
                                        track.duration.toFixed(2)
                                    }
                                </p>
                            </section>
                        )
                    })}
                    </ul>
                </div>
                <section>
                    <Player
                        trackId={this.state.currentTrackId}
                    />
                </section>
            </div>
        )*/
    }
}

export default withRouter(Tracks);