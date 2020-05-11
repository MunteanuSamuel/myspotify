import React from 'react';
import './Login.css'


class LabeledInput extends React.Component {
    state = {};

    /*constructor(props) {
        super(props);
        this.state.value = this.props.defaultValue;
        console.log("LabeledInput inside constructor");
    }*/

   /* static getDerivedStateFromProps(props, state) {
        console.log("LabeledInput inside getDerivedStateFromProps", props, state);
        return null;
    }

    componentDidMount() {
        console.log("LabeledInput inside componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LabeledInput inside shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LabeledInput inside getSnapshotBeforeUpdate", prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LabeledInput inside componentDidUpdate", prevProps, prevState, snapshot);
    }

    componentWillMount() {
        console.log("LabeledInput inside componentWillMount");
    }*/

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


