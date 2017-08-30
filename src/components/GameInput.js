import React from 'react'

const GameInput = ({processUserguess, secretNum, feedback, playing, guessCount, newGame}) => {

	return(

		<div>

		{playing ? <h1>{feedback}</h1> : ''}


			
			<form id="guess-form" onSubmit={(event) => {
				event.preventDefault()

				const userGuess = event.target.userGuess.value

				processUserguess(userGuess, secretNum, feedback)

				event.target.userGuess.value = ''

			}}>
				<h3>Guess counter: {guessCount}</h3>
				<label className="guess-input">Enter a number between 0 and 100</label>
				<input placeholder="Enter your guess here" type="number" name="userGuess" className="input-bar"/>
				<button className="name-button">Guess</button>
			</form>

			{playing ? <button className="play-button" onClick={ (event) => {

				newGame()

			}}>New Game</button> : ''}

		</div>

	)}

export default GameInput