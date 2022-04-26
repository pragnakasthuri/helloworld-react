import React from 'react';
import './App.css';
import logo from "./assets/img/BL-Logo.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title : 'Hello from Bridgelabz'
    }
  }
  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      <img src = {logo}
       alt= "The BridgeLabz logo"/>
      </div>
    );
  }
}
export default App;
