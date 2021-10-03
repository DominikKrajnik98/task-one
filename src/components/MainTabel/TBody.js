import React from 'react'
import { useSelector } from 'react-redux'
import CharacterRow from './CharacterRow'

export default function TBody() {
  const characters = useSelector(state => state.characters.listOfCharacters.slice(0,6))
  return (
    <tbody>
      {characters.map(character => (
        <CharacterRow character={character} key={character.name}/>
      ))}
    </tbody>
  )
}
