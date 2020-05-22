import React from 'react';
import './App.css';
import './ComponentsStyle/NavBar.css';
import About from './pages/About';
import Login from './pages/Login';
import Category from "./components/Category";
import NavBar from "./components/NavBar"
import Categories from "./pages/Categories";
import {Route, Switch} from 'react-router-dom'
import SpotifyCallBack from "./pages/SpotifyCallBack";
import Playlists from "./pages/Playlists";
import Tracks from "./pages/Tracks";

function App() {
  return (
      <div className="App">
          <NavBar />
          <Switch>
              <Route path={"/"} exact={true} render={ () => <div>Home Page</div>}/>
              <Route path={"/about"} component={About}/>
              <Route path={"/login"} component={Login}/>
              <Route path={"/categories"} exact component={Categories}/>
              <Route path={"/categories/:id"} component={Category}/>
              <Route path={"/playlists/:id"} component={Playlists}/>
              <Route path={"/tracks/:id"} component={Tracks}/>
              <Route path={"/callback"} component={SpotifyCallBack}/>
          </Switch>
      </div>
  );
}

export default App;

