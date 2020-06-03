import React from 'react';
import { withRouter } from 'react-router-dom';


import Playlist from '../components/Playlist'

import {checkAndReturnToken} from "../Utils";


class Playlists extends React.Component {

    state = {
        playlists: [],
        isLoading: false
    };

    componentDidMount() {
        try {
            const categoryId = this.props.match && this.props.match.params ?
                this.props.match.params.id : null;

            if (categoryId !== null && categoryId !== undefined) {
                const token = checkAndReturnToken(this.props.history);

                if (token === null) {
                    return;
                }

                this.setState({
                    isLoading: true
                });

                const getPlaylist = async () => {
                    const playlists = await fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    const playlistsResp = await playlists.json();
                    const playlistsMap = playlistsResp.playlists.items.map(item => {
                        return {
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            image: item.images && item.images.length > 0 ?
                                item.images[0].url : ''
                        };
                    });
                    this.setState(
                        {playlists: playlistsMap})
                };
                getPlaylist();
            }
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch playlists')
        } finally {
            console.log('I am at the end of playlists');
            this.setState({
                isLoading: false
            })
        }
    }

    render() {

        const categoryName = this.props.location && this.props.location.state ?
            this.props.location.state.categoryName : 'Default';

        return (
            <div>
               <h1 className="category__name">{categoryName}</h1>
                <section className="row">
                    {this.state.playlists.map(playlist => {
                        return (
                            <Playlist
                                key={`Playlist ${playlist.id}`}
                                name={playlist.name}
                                id={playlist.id}
                                image={playlist.image}
                                desc={playlist.description}
                            />
                            )
                        })
                    }
                </section>
            </div>
        );
    }
}

export default withRouter(Playlists);
