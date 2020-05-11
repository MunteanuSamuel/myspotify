import React from 'react';
import './App.css';
import './NavBar.css';
import About from './pages/About';
import Login from './pages/Login';
import Category from "./pages/category";
import NavBar from "./NavBar"
import Categories from "./pages/Categories";
import {Route, Switch} from 'react-router-dom'
import SpotifyCallBack from "./pages/SpotifyCallBack";

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
              <Route path={"/callback"} component={SpotifyCallBack}/>
          </Switch>
      </div>
  );
}

export default App;

