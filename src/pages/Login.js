import React from "react";
import LabeledInput from "../LabeledInput";


class Login extends React.Component {

    state = {
        'client-Id': '',
        'client-Secret': ''
    };

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts123')
        //     .then(result => {
        //
        //         if (result.status < 200 || result.status >= 300) {
        //             return Promise.reject(`Error encountered with status ${result.status}`);
        //         }
        //
        //         return result.json()
        //     })
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${btoa('CLIENT_ID:CLIENT_SECRET')}`
                }),
                credentials: 'include',
            }).then(result => {
                console.log(result)
            });
        }

        onClickHandler = () => {
            const params ={
                client_id: this.state["client_id"],
                response_type: 'token',
                redirect_url: 'http://localhost:3000/callback'
            }
            let queryString = '';
            Object.keys(params)
                .forEach(key => {
                    queryString += queryString !== '' ? '&' : '';
                    queryString += encodeURIComponent + '=' + encodeURIComponent(params[key])
                })
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
                id="clinet-id"
                label="Client ID"
                placeholder={"Client ID"}
                change={this.onChangeHandler}
                />
                {/*<LabeledInput
                id="client secret"
                label="Client Secret"
                placeholder="Client Secret"
                change={this.onChangeHandler}
                />*/}

                <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Login</button>

            </div>
        )
    }
}

export default Login;