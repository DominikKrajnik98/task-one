const currentPageReducer = (state = 1, action) => {
  switch (action.type) {
    case 'RESET_CURRENT_PAGE':
      return 1
    case 'INCREASE_CURRENT_PAGE':
      return state + 1
    case 'DECREASE_CURRENT_PAGE':
      return state - 1
    case 'SET_CURRENT_PAGE':
      return action.number
    default:
      return state
  }
}

export default currentPageReducer
