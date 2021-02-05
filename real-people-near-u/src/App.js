import axios from "axios";
import logo from './logo.svg';
import Card from './components/Card.js';
import Jumbotron from './components/Jumbotron.js';
import './App.css';
import React, { useState, useEffect} from "react";


function App() {
 
const [userArray, setUserArray] = useState([]);

    useEffect(() => {
      axios.get("https://randomuser.me/api/?results=10").then
      (response => {
        const responseArray = response.data.results;
        const sortedArray = responseArray.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
        );
        setUserArray(sortedArray)

      }).catch((err) => console.log(err));
    }, []);
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Ok, Currently editing</p>
        <Jumbotron />
    {userArray.map((item => <Card person={item}/>))}
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
