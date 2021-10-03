export const restetCurrentPage = () => {
  return {
    type: 'RESET_CURRENT_PAGE',
  }
}

export const increaseCurrentPage = () => {
  return {
    type: 'INCREASE_CURRENT_PAGE',
  }
}

export const decreaseCurrentPage = () => {
  return {
    type: 'DECREASE_CURRENT_PAGE',
  }
}

export const setCurrentPage = number => {
  return {
    type: 'SET_CURRENT_PAGE',
    number,
  }
}
