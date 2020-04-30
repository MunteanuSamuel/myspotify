import React from 'react';
import logo from './logo.svg';
import './App.css';
import LabeledInput from './LabeledInput'

function App() {

  const learnReactDescription = 'Learn React from Scoala IT';
  const reactTurorialUrl = 'https://www.w3schools.com/REACT/default.asp';

  const getGithubProfile = () => 'https://github.com/mmioana/webdevelopment-02';

  return (
      <div className="App">
        <header className="App-header">
          <a href="/categories">Link to another page</a>
          <LabeledInput
              id="client-id"
              label="Client Id"
              placeholder="Client Id Placeholder"
              defaultValue="Default"
          />
        </header>
      </div>
  );
}

export default App;

