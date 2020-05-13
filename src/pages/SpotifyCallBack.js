import React from "react";
import { withRouter } from "react-router-dom";
import queryString  from "query-string";

class SpotifyCallBack extends React.Component{


    componentDidMount() {
        const hash = this.props.location.hash ? this.props.location.hash : "";
        if (hash) {
            const parsedString = queryString.parse(hash);
            const date = new Date();
            const token = {
              token: parsedString.access_token,
              expiration: date.getTime() + (parsedString.expires_in * 1000)
            };

            localStorage.setItem('token', JSON.stringify(token));
        }
        if (this.props.history) {
            this.props.history.push('/');
        }
    }

    render(){return null;}
}

export default withRouter(SpotifyCallBack);