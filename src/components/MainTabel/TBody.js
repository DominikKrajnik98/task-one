import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeSingleCheckbox } from '../../actions/checkboxesAction'
import CharacterRow from './CharacterRow'

export default function TBody() {
  const characters = useSelector(state => state.characters.listOfCharacters)
  const checkboxes = useSelector(state => state.checkboxes.checkboxes)
  const dispatch = useDispatch()

  const changeCheckbox = index => {
    dispatch(changeSingleCheckbox(index))
  }
  return (
    <tbody>
      {characters.map((character, index) => (
        <CharacterRow
          character={character}
          key={character.name}
          checkboxValue={checkboxes[index]}
          changeCheckbox={() => changeCheckbox(index)}
          index={index}
        />
      ))}
    </tbody>
  )
}
