import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from "./components/NavBar";

import About from './pages/About';
import Categories from './pages/Categories';
import ErrorBoundary from "./pages/ErrorBoundary";
import Login from './pages/Login';
import SpotifyCallBack from "./pages/SpotifyCallBack";
import Tracks from './pages/Tracks';
import SearchBar from "./components/SearchBar";

function App() {

    return (
        <div className="App">
            <ErrorBoundary>
                <NavBar
                />
                <main>
                    <Switch>
                        <Route
                            path="/"
                            exact={true}
                            render={() => (
                                <div
                                className='home__wrapper'>
                                    <h3 className='home__title'>Home page</h3>
                                    <p>
                                        Welcome to MySpotify App. Enjoy listening to your favourite music.
                                        You can search for an artist or go check the most wanted categories,
                                        chose a playlist and listen to our finest list of tracks.
                                    </p>

                                    <div className='home__search'>
                                        <SearchBar/>
                                    </div>
                                </div>)}
                        />
                        <Route
                            path="/about"
                            component={About}
                        />
                        <Route
                            path="/login"
                            component={Login}
                        />
                        <Route
                            path="/categories*"
                            component={Categories}
                        />
                        <Route
                            path="/playlists/:id"
                            component={Tracks}
                        />
                        <Route
                            path="/callback"
                            component={SpotifyCallBack}
                        />
                    </Switch>
                </main>
            </ErrorBoundary>
        </div>
    );
}

export default App;