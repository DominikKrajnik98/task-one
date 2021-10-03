export const changeSingleCheckbox = index => {
  return {
    type: 'CHANGE_SINGLE_CHECKBOX',
    index,
  }
}

export const changeAllCheckboxes = value => {
  return {
    type: 'CHANGE_ALL_CHECKBOXES',
    value,
  }
}
