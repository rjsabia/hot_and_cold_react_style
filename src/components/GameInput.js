import React from 'react'

// const GameInput = ({processUserguess, secretNum, feedback, playing, guessCount, newGame}) => {
class GameInput extends React.Component {

	render(){

	return(

		<div>

		{this.props.playing ? <h1>{this.props.feedback}</h1> : ''}


			
			<form id="guess-form" onSubmit={(event) => {
				event.preventDefault()

				// const userGuess = event.target.userGuess.value

				const userGuess = this.input.value

				this.props.processUserguess(userGuess)

				// event.target.userGuess.value = ''

				this.input.value = ''

			}}>
				<h3>Guess counter: {this.props.guessCount}</h3>
				<label className="guess-input">Enter a number between 0 and 100</label>
				<input placeholder="Enter your guess here" type="text" name="userGuess" className="input-bar" ref={element => this.input = element} />
				<button className="name-button">Guess</button>
			</form>

			{this.props.playing ? <button className="play-button" onClick={ (event) => {

				this.props.newGame()

			}}>New Game</button> : ''}

		</div>

	)}

}

export default GameInput