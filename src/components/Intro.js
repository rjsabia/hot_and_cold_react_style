import React from 'react'

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

export default Intro