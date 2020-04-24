import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const learnReactDescription = 'Learn React from Scoala IT';
  const reactTutorialUrl = 'https://www.w3schools.com/REACT/default.asp';
  const getGithubProfile = () => 'https://github.com/MunteanuSamuel';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={ () => { console.log("I was clicked"); }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href= {reactTutorialUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          { learnReactDescription }
        </a>
        <a
            className="App-link"
            href= {getGithubProfile()}
            target="_blank"
            rel="noopener noreferrer"
        >
        My github profile
        </a>

      </header>
    </div>
  );
}

export default App;
