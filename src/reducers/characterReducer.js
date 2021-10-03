const initialState = {
  totalCount: 0,
  listOfCharacters: [
    {
      name: '',
      birthYear: '',
      homeworld: '',
      species: [],
      vehiclesAndStarships: [],
    },
  ],
}
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_CHARACTERS':
      return action.characters
    default:
      return state
  }
}

export default characterReducer
