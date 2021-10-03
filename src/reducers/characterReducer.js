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
    case 'GET_ANOTHER_PAGE_OF_CHARACTERS':
      return action.characters
    case 'UPDATE_CHARACTERS':
      return {
        ...state,
        listOfCharacters: action.characters,
      }
    case 'UPDATE_CHARACTER_NAME':
      const newCharacters = state.listOfCharacters.map((character, index) =>
        index === action.index ? { ...character, name: action.name } : character
      )
      return { ...state, listOfCharacters: newCharacters }
    case 'TOGGLE_CHARACTER_STATUS':
      const charactersWithNewStatus = state.listOfCharacters.map(character =>
        character.name === action.name
          ? {
              ...character,
              status: character.status === 'Active' ? 'Deactivated' : 'Active',
            }
          : character
      )
      return { ...state, listOfCharacters: charactersWithNewStatus }
    case 'REMOVE_CHARACTER':
      const charactersAfterRemoval = state.listOfCharacters.filter(
        character => character.name !== action.name
      )
      return {
        ...state,
        listOfCharacters: charactersAfterRemoval,
      }
    default:
      return state
  }
}

export default characterReducer
