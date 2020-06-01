import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from "./components/NavBar";

import About from './pages/About';
import Categories from './pages/Categories';
import Login from './pages/Login';
import SpotifyCallBack from "./pages/SpotifyCallBack";
import Tracks from './pages/Tracks';

function App() {

    return (
        <div className="App">
            <NavBar
            />
            <main>
                <Switch>
                    <Route
                        path="/"
                        exact={true}
                        render={() => (<div>Home page</div>)}
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
        </div>
    );
}

export default App;