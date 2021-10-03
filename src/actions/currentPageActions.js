import { getAnotherPageOfCharacters } from './characterActions'

export const restetCurrentPage = () => {
  return {
    type: 'RESET_CURRENT_PAGE',
  }
}

export const increaseCurrentPage = number => {
  return async dispatch => {
    await dispatch(getAnotherPageOfCharacters(number + 1))
    dispatch({
      type: 'INCREASE_CURRENT_PAGE',
    })
  }
}

export const decreaseCurrentPage = number => {
  return async dispatch => {
    await dispatch(getAnotherPageOfCharacters(number - 1))
    dispatch({
      type: 'DECREASE_CURRENT_PAGE',
    })
  }
}

export const setCurrentPage = number => {
  return async dispatch => {
    await dispatch(getAnotherPageOfCharacters(number))
    dispatch({
      type: 'SET_CURRENT_PAGE',
      number,
    })
  }
}
