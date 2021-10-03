const initalCheckboxes = {
  headerCheckbox: false,
  checkboxes: Array(10).fill(false),
}

const checkboxesReducer = (state = initalCheckboxes, action) => {
  switch (action.type) {
    case 'CHANGE_SINGLE_CHECKBOX':
      const checkboxes = state.checkboxes.map((checkbox, index) =>
        index === action.index ? !checkbox : checkbox
      )
      return {
        headerCheckbox: false,
        checkboxes,
      }
    case 'CHANGE_ALL_CHECKBOXES':
      return {
        headerCheckbox: action.value,
        checkboxes: state.checkboxes.map(checkbox => action.value),
      }
    default:
      return state
  }
}

export default checkboxesReducer
