export const newGame = () => {
	return {
		type: 'NEW_GAME'
	}

}

export const startGame = () => {
	return {
		type: 'START_GAME',
		playing: true
	}

}

export const addUsername = (userName) => {
	return {
		type: 'ADD_USERNAME',
		userName
	}

}

export const generateSecretNum = () => {
	return {
		type: 'SECRET_NUM',
		secretNum: Math.floor((Math.random() * 100) + 1)
	}

}

export const processUserguess = (guess, feedback) => {
	console.log(feedback)
	return {
		type: 'PROCESS_USERGUESS',
		guess,
		feedback
	}

}