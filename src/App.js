import React from 'react';
import './App.css';
import './NavBar.css';
import About from './pages/About';
import Login from './pages/Login';
import Category from "./pages/category";
import NavBar from "./NavBar"
import Categories from "./pages/Categories";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Switch>
              <Route path={"/"} exact={true} render={ () => <div>Home Page</div>}/>
              <Route path={"/about"} component={About}/>
              <Route path={"/login"} component={Login}/>
              <Route path={"/categories"} component={Categories}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

