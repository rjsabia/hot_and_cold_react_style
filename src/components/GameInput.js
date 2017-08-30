import React from 'react'

const GameInput = ({processUserguess, secretNum, feedback, playing}) => {

	return(

		<div>

		{playing ? <h1>{feedback}</h1> : ''}
			
			<form id="guess-form" onSubmit={(event) => {
				event.preventDefault()

				const userGuess = event.target.userGuess.value

				processUserguess(userGuess, secretNum, feedback)

				event.target.userGuess.value = ''

			}}>
				
				<label>Enter a number between 0 and 100</label>
				<input placeholder="Enter your guess here" type="number" name="userGuess"/>
				<button>Guess</button>
			</form>

		</div>

	)}

export default GameInput