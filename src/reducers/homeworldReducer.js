const homeworldReducer = (
  state = { count: 0, names: [], next: '' },
  action
) => {
  switch (action.type) {
    case 'INIT_HOMEWORLD':
      return action.data
    case 'ADD_HOMEWORLD':
      return {
        count: action.data.count,
        names: [...state.names, ...action.data.names],
        next: action.data.next,
      }
    default:
      return state
  }
}

export default homeworldReducer
