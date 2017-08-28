import React from 'react'

const Intro = ({userName}) => {
	
	return(
		<div id="intro">
			<h1>Hello {userName.name} want to play a game?</h1>
			<button id="play-button" onClick={() => {

				document.getElementById("guess-form").style.display = 'block';
				document.getElementById("intro").style.display = 'none';

			}}>

			Lets play</button>
		</div>
	)

}

export default Intro