import React from 'react';
import './LabeledInput.css'


/*const LabeledInput = ({user, label, placeholder}) => {
    let value = "";
    function handleChange (event){
        let inputText = event.target.value;
        console.log(inputText);
        return inputText;
    }
    return (
        <div>
        <label
            htmlFor={user.id}
        >
            {label}
        </label>
        <input
        type="text"
        id={user.id}
        value={value}
        placeholder={placeholder}
        onChange={this.handleChange}>
        </input>
</div>
    )
};*/

class LabeledInput extends React.Component {
    state = {
      value: "",
    };

    constructor(props) {
        super(props);
        this.state.value = this.props.placeholder;
        console.log("LabeledInput inside constructor");
    }

    static getDerivedStateFromProps(props, state) {
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
    }

    handleChange = e => {
        //let inputText = e.target.value;
        console.log(e.target.value);
        this.setState({
            value: e.target.value
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
            <div className={'input-group labeled-input'}>
                <label
                    htmlFor={this.props.id}
                    style={style}
                >
                    {this.props.label}
                </label>
                <input
                    className={"form-control"}
                    type={"text"}
                    id={this.props.id}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    defaultValue={"default"}
                    onChange={this.handleChange}>
                </input>
                <span>
                    <i className="fas fa-home"></i>
                </span>
            </div>
        )
    }
}

export default LabeledInput;


