import React from 'react';
import '../ComponentsStyle/Login.css'


class LoginInput extends React.Component {
    state = { };

    onChangeHandler = e => {
        console.log(e.target.value);
        const value = e.target.value;

        this.props.change(this.props.id, value);

        this.setState({
            value: value
        });
    };


    render() {
        console.log("LoginInput inside render");

        const style = {
          marginBottom: '10px',
          color: '#21D4FD',
          fontSize: '18px',
          fontFamily: 'roboto'
        };

        return (
            <div className='input__group labeled__input'>
                <label
                    htmlFor={this.props.id}
                    style={style}
                    className="input__label"
                >
                    {this.props.label}
                </label>
                <input
                    className="form__control"
                    type="text"
                    id={this.props.id}
                    value={this.state.value || ''}
                    placeholder={this.props.placeholder}
                    onChange={this.onChangeHandler}>
                </input>
            </div>
        )
    }
}

export default LoginInput;


