import React from "react";
import {Link} from "react-router-dom";

class Playlist extends React.Component {
    componentDidMount() {
        console.log('playlist' + JSON.stringify(this.props));
    }

    render() {
        return (
            <Link
                to={{
                    pathname: `/tracks/${this.props.id}`,
                    state: {playlistName: this.props.name,
                            playlistImage: this.props.image}
                }}
            >
                <div>
                    <img src={this.props.image} alt={`Playlist ${this.props.name}`}/>
                    <h3>{this.props.name}</h3>
                </div>
            </Link>
        )
    }

}

export default Playlist