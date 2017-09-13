import { createStore } from 'redux'
import guessGame from './reducers/guessGame'

const store = createStore(guessGame, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store