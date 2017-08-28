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
      guess: '',
      secretNum: ''

    }

    this.addUsername = this.addUsername.bind(this)
    this.generateSecretNum = this.generateSecretNum.bind(this)
    this.processUserguess = this.processUserguess.bind(this)
    
  }

  addUsername(name){
      console.log(name)

      const theName = {
        name
      }

      this.state.userName = theName

      this.setState({userName: this.state.userName})
  }

  generateSecretNum(){

    const secretNum = {
      secret: Math.floor((Math.random() * 100) + 1)
    }

    this.state.secretNum = secretNum

    this.setState({secretNum: this.state.secretNum})

    console.log(secretNum)

  }

  processUserguess(guess, secret){

    console.log(guess)
    console.log(secret)

  }

  render() {
    return (
      <div className="App">
        <div className="face-container">
          <img className="the-face" src={IntroEmoji} /> 
          <Intro userName={this.state.userName} generateSecretNum={this.generateSecretNum} />
          <Greetings /> 
          <AddName addUsername={this.addUsername} userName={this.state.userName} />
          <GameInput processUserguess={this.processUserguess} secretNum={this.state.secretNum} />
        </div>
      </div>
    );
  }
}

export default App;
