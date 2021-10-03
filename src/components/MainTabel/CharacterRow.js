import React from 'react'
import { ReactComponent as Active } from '../../assets/active.svg'
import { ReactComponent as Deactivated } from '../../assets/deactivated.svg'

export default function CharacterRow({ character }) {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        {character.name}
        <br />
        <span className="species">
          {character.species[0] ? character.species : 'Unspecified'}
        </span>
      </td>
      <td>{character.birthYear}</td>
      <td>{character.homeworld}</td>
      <td>
        <ul>
          {character.vehiclesAndStarships.map(vehicle => (
            <li key={character.name + vehicle}>{vehicle}</li>
          ))}
        </ul>
      </td>
      <td>
        {character.status === 'Active' ? (
          <div className ="character-status">
            <Active className="status-icon"/> Active
          </div>
        ) : (
          <div className ="character-status">
            <Deactivated className="status-icon"/> Deactivated
          </div>
        )}
      </td>
      <td>Action</td>
    </tr>
  )
}
