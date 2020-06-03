
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
                    className="search-bar"
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


/*
import React, {useEffect, useState} from "react";



const SearchBar = () => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        getSearch();
    });

    const token = localStorage.getItem('token');
    const parsedToken = JSON.parse(token);

    const handleChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    const getSearch = async () => {
        if (token !== null && token !== undefined) {
            const response = await fetch('https://api.spotify.com/v1/search',
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${parsedToken.token}`
                    }
                }
            );

            const data = await response.json();
            setSearch(data);
        }
    };

    return (
        <form className={'form-inline my-2 my-lg-0'}>
            <input
                className="search__bar"
                type="text"
                value={search}
                onChange={handleChange}>
            </input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
};

export default SearchBar;



*/
