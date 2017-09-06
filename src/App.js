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
      secretNum: '',
      guesses: [],
      feedback: 'Im thinking of a number between 0 and 100, can you guess it!',
      playing: false,
      guessCount: ''

    }

    this.addUsername = this.addUsername.bind(this)
    this.generateSecretNum = this.generateSecretNum.bind(this)
    this.processUserguess = this.processUserguess.bind(this)
    this.startGame = this.startGame.bind(this)
    this.newGame = this.newGame.bind(this)
    
  }

  newGame(){
    this.setState({
      guesses: [],
      secretNum: Math.floor((Math.random() * 100) + 1),
      feedback: 'Im thinking of a number between 0 and 100, can you guess it!',
      guessCount: ''

    })

  }

  startGame(){
    this.setState({playing: true})

  }

  addUsername(userName){

      this.setState({userName})
  }

  generateSecretNum(){

    const secretNum = Math.floor((Math.random() * 100) + 1)

    this.setState({secretNum})

    // console.log(secretNum)

  }

  processUserguess(guess, secret, feedback){

    // console.log(guess)
    // console.log(secret)

    guess = parseInt(guess, 10);

        const difference =  Math.abs(secret - guess);

        // console.log(difference)

        if(guess % 1 !== 0){

          alert('Please input whole number');
        }
        else if( guess < 1 || guess > 100){

          alert('Please enter a number between 1 and 100');
        }

        else{

          if (difference >= 50) {
              
              feedback = 'You\'re Ice Cold...';

          }
          else if (difference >= 30) {
              
              feedback = 'You\'re Cold...';

          }
          else if (difference >= 10) {
              
              feedback = 'You\'re Warm';

          }
          else if (difference >= 1) {
              
              feedback = 'You\'re Hot!';

          }
          else {
              
              feedback = 'You got it!';

          }

        }
        // console.log(this.state.guesses.length)

        const guessCount = this.state.guesses.length + 1

        this.setState({
            
            feedback,
            
            guesses: [...this.state.guesses, guess],

            guessCount

        });

        // console.log(feedback)
    }

  render() {
    return (
      <div className="App">
        <div className="face-container">
          <img className="the-face" src={IntroEmoji} alt="emojo face" /> 
          <Intro userName={this.state.userName} generateSecretNum={this.generateSecretNum} startGame={this.startGame} />
          <Greetings /> 
          <AddName addUsername={this.addUsername} userName={this.state.userName} />
          <GameInput processUserguess={this.processUserguess} newGame={this.newGame} secretNum={this.state.secretNum} feedback={this.state.feedback} playing={this.state.playing} guessCount={this.state.guessCount} />
        </div>
      </div>
    );
  }
}

export default App;
