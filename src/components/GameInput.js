import React from 'react'

const GameInput = () => (

	<form id="guess-form">
		
		<label>Enter a number between 0 and 100</label>
		<input placeholder="Enter your guess here" type="number" name="userGuess"/>
		<button>Guess</button>
	</form>

)

export default GameInput