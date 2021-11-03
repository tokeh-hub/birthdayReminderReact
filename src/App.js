import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import info from './info.js';

var clicked = false;

function App() {
  const [people,setPeople] = useState(info())
  

  const handleButton = () => {
    clicked = true;
    setPeople([]);
  }

  const alertMessage = {
    visibility: clicked? 'visible' : 'hidden'
  }
  
  return (
    <body>
      <h1 style={alertMessage} >Refresh Browser to see Birthdays</h1>
    <div className='container'>
            <p>{people.length} Birthdays Today</p>  
            <List people={people} gender='female'/>
            <button onClick={() => handleButton()}>Clear All</button>
    </div>
  </body>
  )
}
export default App;
