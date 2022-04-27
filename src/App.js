import logo from './assets/img/BL-Logo.png';
import React from 'react';
import Home from "./Home.js";
import About from "./About";
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';


class App extends React.Component {
  url="https://www.bridgelabz.com/"
  constructor() {
    super() 
    this.state = {
      userName: '',
      nameError: ''
    }
  }

  onClick = ($event) => {
    window.open(this.url,"_blank");
  }

  
  onNameChange = (event) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value})
    if(nameRegex.test(event.target.value)) {
      this.setState({nameError: ''})
    } else {
      this.setState({nameError: 'Name is Invalid'})
    }
  }

  render() {
    return (
        <div class = 'page-content'>
          <h1>Hello {this.state.userName} from BridgeLabz</h1>
          <img src={logo} onClick={this.onClick} 
            alt="BridgeLabz Logo"/>
        <div>
          <input onChange={this.onNameChange} />
          <span className='error-output'>{this.state.nameError}</span>
        </div>
        <p>At BridgeLabz, we are a tech community of</p>
        <ul>
            <li>Technologists</li>
            <li>Thinkers</li>
            <li>Builders</li>
        </ul>
        <p>
            Working together to keep Tech employability of enginners alive and
            accesible so tech comanies worldwide
            get contributors and creators for technology solutions.
            We believe this act of human collaboration acrosss an employability
            platform is essential to individual growth and our collective future.
        </p>
        <p>
            To know about us, visit <a href = {this.url} onClick={this.onClick}>BridgeLabz </a> 
            to learn even more about our misiion i.e. <strong>Employability to all</strong>.
        </p>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <Switch>
          <Route path="/home" component={Home} exact></Route>
          <Route path="/about" component={About} exact></Route>
        </Switch>
        </div>
    )
  }
} 
export default App;