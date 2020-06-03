/*import React from "react";


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

export default SearchBar;*/



import React, {useEffect, useState} from "react";

import Artist from "./Artist";


const SearchBar = () => {

    const [artists, setArtists] = useState('');
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        searchArtist();
    }, []);

    const token = localStorage.getItem('token');
    const parsedToken = JSON.parse(token);

    const type = 'artist';



    const searchArtist = async () => {
        if (token !== null && token !== undefined && input.length > 0) {
            console.log(query);
            console.log(input);
            const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${parsedToken.token}`
                    }
                }
            );

            const data = await response.json();
            setArtists(data);
        }
    };

    const updateSearch = e => {
        setInput(e.target.value);
        console.log(input)
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(input);
        console.log(query);
        setInput('');
    };


    return (
        <div>
            <form className={'form-inline my-2 my-lg-0'}>
                <input
                    className="search__bar"
                    type="text"
                    value={input}
                    onChange={updateSearch}>
                </input>
                <button onClick={getSearch} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div className="searched__artist">
                {/*{artists.map(item => {
                    return (
                    <Artist
                        key={item.id}
                        name={item.name}
                        image={item.images[0]}
                        popularity={item.popularity}
                    />
                        )})}*/}
            </div>
        </div>

    )
};

export default SearchBar;

