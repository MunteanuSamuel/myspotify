
import React from "react";
import LoginInput from "../components/LoginInput";
import '../ComponentsStyle/Login.css';

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
            <div className="loggin__wrapper">
                <section className="loggin__box">
                    <LoginInput
                        id="client-id"
                        label="Client ID"
                        placeholder={"Client ID"}
                        change={this.onChangeHandler}
                    />
                    <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Login</button>
                </section>
            </div>
        )
    }
}

export default Login;
