import React from 'react'
import { connect } from 'react-redux'
import { processUserguess, newGame } from '../actions'

class GameInput extends React.Component {

	render(){

	return(

		<div>

		{this.props.playing ? <h1>{this.props.feedback}</h1> : ''}


			
			<form id="guess-form" onSubmit={(event) => {
				event.preventDefault()

				const userGuess = this.input.value

			    const difference =  Math.abs(this.props.secretNum - userGuess);

		        let feedback = ''

		        console.log(difference)

		        if(userGuess % 1 !== 0){

		          alert('Please input whole number');
		        }
		        else if( userGuess < 1 || userGuess > 100){

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

				this.props.processUserguess(userGuess, feedback)

				console.log(feedback)

				this.input.value = ''

			}}>
				<h3>Guess counter: {this.props.guesses.length}</h3>
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

const mapStateToProps = (state) => {
	return{
		userGuess: state.userGuess,
		secretNum: state.secretNum,
		guessCount: state.guessCount,
		feedback: state.feedback,
		guesses: state.guesses,
		playing: state.playing
	}
}

const mapDispatchToProps = (dispatch) => ({
	processUserguess: (userGuess, feedback) => dispatch(processUserguess(userGuess, feedback)),
	newGame: () => dispatch(newGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameInput)