import React from 'react'

const GameInput = ({processUserguess, secretNum}) => {

	return(

	<form id="guess-form" onSubmit={(event) => {
		event.preventDefault()

		const userGuess = event.target.userGuess.value

		processUserguess(userGuess, secretNum)

	}}>
		
		<label>Enter a number between 0 and 100</label>
		<input placeholder="Enter your guess here" type="number" name="userGuess"/>
		<button>Guess</button>
	</form>

)}

export default GameInput