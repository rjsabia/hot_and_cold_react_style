import React, { Component } from 'react';
import './App.css';
import IntroEmoji from './intro_emoji.jpg';
import Greetings from './components/Greetings.js'
import AddName from './components/AddName.js'
import Intro from './components/Intro.js'
import GameInput from './components/GameInput'

class App extends Component {

  constructor(){
    super()

    this.state = {
      userName: '',

    }

    this.addUsername = this.addUsername.bind(this)
    
  }

  addUsername(name){
      console.log(name)

      const theName = {
        name
      }

      this.state.userName = theName

      this.setState({userName: this.state.userName})
  }

  render() {
    return (
      <div className="App">
        <div className="face-container">
          <img className="the-face" src={IntroEmoji} /> 
          <Intro userName={this.state.userName} />
          <Greetings /> 
          <AddName addUsername={this.addUsername} userName={this.state.userName} />
          <GameInput />
        </div>
      </div>
    );
  }
}

export default App;
