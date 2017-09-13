import React from 'react'
import { connect } from 'react-redux'
import { generateSecretNum, startGame} from '../actions'

const Intro = ({userName, generateSecretNum, startGame}) => {
	return(
		<div id="intro">
			<h1>Hello {userName} want to play a game?</h1>
			<button className="play-button" onClick={() => {

				document.getElementById("guess-form").style.display = 'block';
				document.getElementById("intro").style.display = 'none';
				generateSecretNum();
				startGame()
			}}>

			Lets play</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	generateSecretNum: () => dispatch(generateSecretNum()),
	startGame: () => dispatch(startGame())
})


export default connect(null, mapDispatchToProps)(Intro)