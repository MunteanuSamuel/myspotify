
import React from "react";
import LabeledInput from "../LabeledInput";


class Login extends React.Component {

    state = {
        'client-id': '',
        'client-secret': ''
    };

        onClickHandler = () => {
            const params ={
                client_id: this.state["client-id"],
                response_type: 'token',
                redirect_uri: 'http://localhost:3000/callback'
            };
            let queryString = '';
            Object.keys(params)
                .forEach(key => {
                    queryString += queryString !== '' ? '&' : '';
                    queryString += encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
                });
            window.location.href = `https://accounts.spotify.com/authorize?${queryString}`;
        };


        onChangeHandler = (id, value) => {
          const state = {...this.state};
          state[id] = value;

          this.setState(state);
        };


    render () {
        return (
            <div>
                <LabeledInput
                id="client-id"
                label="Client ID"
                placeholder={"Client ID"}
                change={this.onChangeHandler}
                />
                <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Login</button>

            </div>
        )
    }
}

export default Login;
