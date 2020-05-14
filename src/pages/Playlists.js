import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Playlist from '../components/Playlist'

class Playlists extends React.Component {

    state = {
        playlists: []
    };

    componentDidMount() {

        const categoryId = this.props.match && this.props.match.params ?
            this.props.match.params.id : null;

        if (categoryId !== null && categoryId !== undefined) {
            const token = localStorage.getItem('token');
            const parsedToken = JSON.parse(token);

            fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${parsedToken.token}`
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
               {/*<h1>{categoryName}</h1>*/}
                <section>
                    {this.state.playlists.map(playlist => {
                        return (
                            <Playlist
                                name={playlist.name}
                                id={playlist.id}
                                image={playlist.images}
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