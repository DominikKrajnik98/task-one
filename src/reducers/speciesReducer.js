const speciesReducer = (state = { count: 0, names: [], next: '' }, action) => {
  switch (action.type) {
    case 'INIT_SPECIES':
      return action.data
    case 'ADD_SPECIES':
      return {
        count: action.data.count,
        names: [...state.names, ...action.data.names],
        next: action.data.next,
      }
    default:
      return state
  }
}

export default speciesReducer
