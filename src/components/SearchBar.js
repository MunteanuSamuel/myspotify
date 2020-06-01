import React from "react";


class SearchBar extends React.Component {
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
                    className="search__bar"
                    type="text"
                    id={this.props.id}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}>
                </input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar;



