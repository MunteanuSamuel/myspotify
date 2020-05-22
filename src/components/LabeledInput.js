import React from 'react';
import '../PagesStyle/Login.css'


class LabeledInput extends React.Component {
    state = {};

    onChangeHandler = e => {
        console.log(e.target.value);
        const value = e.target.value;

        this.props.change(this.props.id, value);

        this.setState({
            value: value
        });
    };

    render() {
        console.log("LabeledInput inside render");

        const style = {
          marginBottom: '10px',
          color: '#929929',
          fontSize: '18px',
          fontFamily: 'roboto'
        };

        return (
            <div className='input-group labeled-input'>
                <label
                    htmlFor={this.props.id}
                    style={style}
                >
                    {this.props.label}
                </label>
                <input
                    className="form-control"
                    type="text"
                    id={this.props.id}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    onChange={this.onChangeHandler}>
                </input>
            </div>
        )
    }
}

export default LabeledInput;


