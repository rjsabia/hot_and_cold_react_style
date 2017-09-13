const initialState = {
	userName: '',
    secretNum: '',
    guesses: [],
    feedback: 'Im thinking of a number between 0 and 100, can you guess it!',
    playing: false,
    guessCount: ''
}

const guessGame = (state = initialState, action) => {
	switch (action.type) {
		case 'START_GAME':
			return Object.assign({}, state, {
				playing: action.playing
			})

		case 'ADD_USERNAME':
			return Object.assign({}, state, {
				userName: action.userName
			})

		case 'SECRET_NUM':
			return Object.assign({}, state, {
				secretNum: action.secretNum
			})

		case 'PROCESS_USERGUESS':
			return {
				...state,
				guess: action.guess,
				feedback: action.feedback,
				guesses: [...state.guesses, action.guess]
			}

		case 'NEW_GAME':
			return {
				...state,
				guesses: [],
		      	secretNum: Math.floor((Math.random() * 100) + 1),
		      	feedback: 'Im thinking of a number between 0 and 100, can you guess it!',
		      	guessCount: ''
			}

		default:
			return state
	}
}

export default guessGame