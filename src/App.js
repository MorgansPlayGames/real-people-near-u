import axios from "axios";
import Card from './components/Card.js';
import Jumbotron from './components/Jumbotron.js';
import './App.css';
import React, { useState, useEffect} from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function App() {
 
const [userArray, setUserArray] = useState([]);
const [sortState, setSortState] = useState(1);

    const sort = (sortBy) => {
      setSortState(sortBy)
      console.log(sortBy)
      const arr = userArray;
      let sortedArray = [];
      switch(sortBy){
        case 1: sortedArray = arr.sort((a, b) => a.name.first.localeCompare(b.name.first));
          break;
        case 2: sortedArray = arr.sort((a, b) => a.name.last.localeCompare(b.name.last));
          break;
        case 3: sortedArray = arr.sort((a, b) => a.login.password.localeCompare(b.login.password));
          break;
        default: sortedArray = arr; 
      }
      setUserArray(sortedArray)
    }


    useEffect(() => {
      axios.get("https://randomuser.me/api/?results=10").then
      (response => {
        setUserArray(response.data.results)

      }).catch((err) => console.log(err));
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.pngfind.com/pngs/m/48-484905_pink-heart-clipart-png-transparent-background-heart-clipart.png" width="50%" height="50%" alt="logo" />
        <p>
          
        </p>
        
        <Jumbotron />
        <nav className="navbar">
          <ToggleButtonGroup type="radio" name="sorty" value={sortState} onChange={sort}>
            <ToggleButton value={1}>First Name</ToggleButton>
            <ToggleButton value={2}>Last Name</ToggleButton>
            <ToggleButton value={3}>Password</ToggleButton>
          </ToggleButtonGroup>
        </nav>
      </header>
      <div className = "col">
        {userArray.map((item => <Card person={item}/>))}
      </div>
        
      
    </div>
  );
}

export default App;
