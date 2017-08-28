import React from 'react'

const AddName = ({addUsername, userName}) => {

	return(

		<form id="name-form" onSubmit={(event) => {

			event.preventDefault()

			const userName = event.target.userName.value

			//add function here
			addUsername(userName)

			document.getElementById("greeting").style.display = 'none';
			document.getElementById("name-form").style.display = 'none';
			document.getElementById("intro").style.display = 'block';

			event.target.userName.value = ''
		}}>

			<label>Who do I have the pleasure of speaking to: </label>	
			<input className="input-bar" type="text" name="userName" placeholder="Enter your name..."/>
			<button id="name-button">Submit</button>

		</form>
	)
}

export default AddName