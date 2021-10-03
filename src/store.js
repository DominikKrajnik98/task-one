import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import characterReducer from './reducers/characterReducer'
import nameFilterReducer from './reducers/nameFilterReducer'
import currentPageReducer from './reducers/currentPageReducer'

const reducer = combineReducers({
  characters: characterReducer,
  nameFilter: nameFilterReducer,
  currentPage: currentPageReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
