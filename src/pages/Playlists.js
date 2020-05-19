
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Playlist from '../components/Playlist'
import {checkAndReturnToken} from "../Utils";

class Playlists extends React.Component {

    state = {
        playlists: []
    };

    componentDidMount() {

        const categoryId = this.props.match && this.props.match.params ?
            this.props.match.params.id : null;

        if (categoryId !== null && categoryId !== undefined) {
            const token = checkAndReturnToken(this.props.history);

            if (token === null) {
                return;
            }

            fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result);
                return result.json();
            }).then(data => {
                const playlists = data.playlists.items.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        image: item.images && item.images.length > 0 ?
                            item.images[0].url : ''
                    };
                });
                this.setState(
                    {playlists: playlists})
            });
        }
    }

    render() {

        const categoryName = this.props.location && this.props.location.state ?
            this.props.location.state.categoryName : 'Default';

        return (
            <div>
               <h1>{categoryName}</h1>
                <section>
                    {this.state.playlists.map(playlist => {
                        return (
                            <Playlist
                                key={playlist.name}
                                name={playlist.name}
                                id={playlist.id}
                                image={playlist.image}
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



/*
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Playlist from '../components/Playlist'
import {checkAndReturnToken} from "../Utils";

class Playlists extends React.Component {

    state = {
        playlists: []
    };

    componentDidMount() {

        const categoryId = this.props.match && this.props.match.params ?
            this.props.match.params.id : null;

        if (categoryId !== null && categoryId !== undefined) {
            const token = checkAndReturnToken(this.props.history);

            if (token === null) {
                return;
            }

           const getPlaylists = async () => {
                const playlists = await fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
                   method: 'GET',
                   headers: {
                       Authorization: `Bearer ${token}`
                   }
               });
                const response = await playlists.json();
                response.items.map(item => {
                       return {
                           id: item.id,
                           name: item.name,
                           description: item.description,
                           image: item.images && item.images.length > 0 ?
                               item.images[0].url : ''
                       };
                });
                this.setState(
                    {playlists: response})

           };

            getPlaylists();
        }
    }

    render() {

        const categoryName = this.props.location && this.props.location.state ?
            this.props.location.state.categoryName : 'Default';

        return (
            <div>
                <h1>{categoryName}</h1>
                <section>
                    {this.state.playlists.map(playlist => {
                        return (
                            <Playlist
                                key={playlist.name}
                                name={playlist.name}
                                id={playlist.id}
                                image={playlist.image}
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
*/
