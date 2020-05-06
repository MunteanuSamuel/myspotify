import React from "react";


class LabeledInput extends React.Component {
    state = {
        value: "",
    };

    handleChange = e => {
        //let inputText = e.target.value;
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    };

    render() {

        return (
            <form className={'form-inline my-2 my-lg-0'}>
                <input
                    className="search-bar"
                    type="text"
                    id={this.props.id}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    defaultValue={"default"}
                    onChange={this.handleChange}>
                </input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

export default LabeledInput;


/*
const SearchBar = () => {

   const handleChange = e => {
        //let inputText = e.target.value;
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    };

    return(
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
};

export default SearchBar;*/
