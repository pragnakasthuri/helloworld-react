import logo from './assets/img/BL-Logo.png';
import React from 'react';
import './App.css';

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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
            To know about us, visit <a href = {this.url} onClick={this.onClick}>BridgeLabz </a> 
            to learn even more about our misiion i.e. <strong>Employability to all</strong>.
        </p>
        </div>  
    )
  }
} 
export default App;