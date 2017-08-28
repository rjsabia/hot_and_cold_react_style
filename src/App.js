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
    this.runGame = this.runGame.bind(this)
    
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

    if(guess % 1 != 0){

      alert('Please input whole number');
    }
    else if( guess < 1 || guess > 100){

      alert('Please enter a number between 1 and 100');
    }
    else {

      if(Math.abs(secret - guess) == 0){
        
        document.getElementById("feedback").value = "You did it, you won!";
      
      } 
      else if(Math.abs(secret - guess) <= 10){
        
        document.getElementById("feedback").value = 'Smokin Hot!!!';
      
      } 
      else if(Math.abs(secret - guess) <= 20 && Math.abs(secret - guess) > 10){
        
        document.getElementById("feedback").value = 'Your Hot!';
      
      } 
      else if(Math.abs(secret - guess) <= 30 && Math.abs(secret - guess) > 20){
        
        document.getElementById("feedback").value = 'Warming up';
      
      } 
      else if(Math.abs(secret - guess) <= 40 && Math.abs(secret - guess) > 30){
        
        document.getElementById("feedback").value = 'Your cold, come on'; 

      }
      else if(Math.abs(secret - guess) <= 50 && Math.abs(secret - guess) > 40){
        
        document.getElementById("feedback").value = 'Ice cold man!';
        
     }
      else {
        
        document.getElementById("feedback").value = 'Subzero freezing';
    
      }
    }
  }

  runGame(){


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
          <h3 id="feeback"></h3>
        </div>
      </div>
    );
  }
}

export default App;
