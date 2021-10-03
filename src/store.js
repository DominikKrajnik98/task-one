import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import characterReducer from './reducers/characterReducer'
import currentPageReducer from './reducers/currentPageReducer'
import mainUrlReducer from './reducers/mainUrlReducer'
import speciesReducer from './reducers/speciesReducer'
import homeworldReducer from './reducers/homeworldReducer'
import checkboxesReducer from './reducers/checkboxesReducer'

const reducer = combineReducers({
  characters: characterReducer,
  currentPage: currentPageReducer,
  mainUrl: mainUrlReducer,
  species: speciesReducer,
  homeworld: homeworldReducer,
  checkboxes: checkboxesReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
