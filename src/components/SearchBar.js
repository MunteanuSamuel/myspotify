
import React, {useEffect, useState} from "react";

import Artist from "./Artist";


const SearchBar = () => {

    const [artists, setArtists] = useState([]);
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        searchArtist();
    }, [query]);


    const token = localStorage.getItem('token');
    const parsedToken = JSON.parse(token);

    const type = 'artist';


    const searchArtist = async () => {
        if (token !== null && token !== undefined && query.length > 0) {
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
            const dataMap = data.artists.items.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    popularity: item.popularity
                };
            });
            setArtists(dataMap);
            console.log(dataMap);
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
                    <button onClick={getSearch} className="btn my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="row searched__artist">
                    {artists.map(artist => {
                        return (
                        <Artist
                            id={artist.id}
                            name={artist.name}
                            popularity={artist.popularity}
                        />
                            )})}
                </div>
            </div>

        )

};

export default SearchBar;

