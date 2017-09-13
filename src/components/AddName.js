import React from 'react'
import { connect } from 'react-redux'
import { addUsername } from '../actions'

class AddName extends React.Component {

	render(){

		return(

		<form id="name-form" onSubmit={(event) => {

			event.preventDefault()

			const userName = this.input.value

			console.log(userName)

			this.props.addUsername(userName)

			document.getElementById("greeting").style.display = 'none';
			document.getElementById("name-form").style.display = 'none';
			document.getElementById("intro").style.display = 'block';

		}}>

			<label>Who do I have the pleasure of speaking to: </label>	
			<input className="input-bar" type="text" placeholder="Enter your name..." ref={element => this.input = element} />
			<button className="name-button">Submit</button>

		</form>
	)

	}
}

const mapStateToProps = (state) => {
	return{
		userName: state
	}
}

const mapDispatchToProps = (dispatch) => ({
	addUsername: (userName) => dispatch(addUsername(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddName)