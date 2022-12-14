import logo from './logo.svg';
import './App.css';
import {ClickButton} from './components/ClickButton.js';
import React from 'react';
// import { Clock } from './components/Clock';


// const numbers =[10, 15, 20, 25, 30, 40, 45];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numbers:[10, 15, 20, 25, 30, 40, 45]
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <Clock/> */}
          <ClickButton/>
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
  }
  

export default App;
