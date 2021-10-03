import { BASIC_URL } from '../utils/urls'

const mainUrlReducer = (state = BASIC_URL, action) => {
  switch (action.type) {
    case 'SET_MAIN_URL':
      return action.url
    default:
      return state
  }
}
export default mainUrlReducer
