import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Active } from '../../assets/active.svg'
import { ReactComponent as Deactivated } from '../../assets/deactivated.svg'
import { ReactComponent as EditIcon } from '../../assets/edit.svg'
import { ReactComponent as VerticalMenu } from '../../assets/menu-dot-vertical.svg'
import NameModal from '../NameModal'
import { updateCharacter } from '../../actions/characterActions'
import ModalMenu from '../ModalMenu'

export default function CharacterRow(props) {
  const character = props.character
  const deactivatedStyle =
    character.status === 'Deactivated' ? 'deactivated-rows' : ''
  const deactivatedFont =
    character.status === 'Deactivated' ? 'deactivated-fonts' : ''

  const [openNameModal, setOpenNameModal] = useState(false)
  const [openMenuModal, setOpenMenuModal] = useState(false)
  const dispatch = useDispatch()

  const onSave = name => {
    dispatch(updateCharacter(name, props.index))
  }

  return (
    <tr className={deactivatedStyle}>
      <td>
        <input
          type="checkbox"
          checked={false || props.checkboxValue}
          onChange={props.changeCheckbox}
        />
      </td>
      <td className={deactivatedFont}>
        {character.name}
        <br />
        <span className={'species ' + deactivatedFont}>
          {character.species[0] ? character.species : 'Unspecified'}
        </span>
      </td>
      <td className={deactivatedFont}>{character.birthYear}</td>
      <td>{character.homeworld}</td>
      <td className={deactivatedFont}>
        <ul>
          {character.vehiclesAndStarships.map(vehicle => (
            <li key={character.name + vehicle}>{vehicle}</li>
          ))}
        </ul>
      </td>
      <td>
        {character.status === 'Active' ? (
          <div className="character-status">
            <Active className="status-icon" /> {character.status}
          </div>
        ) : (
          <div className="character-status">
            <Deactivated className="status-icon" /> {character.status}
          </div>
        )}
      </td>
      <td>
        <div className="action-cell">
          <button
            className="table-action-button"
            onClick={() => setOpenNameModal(true)}
          >
            <EditIcon />
          </button>
          <button
            className="table-action-button"
            onClick={() => setOpenMenuModal(!openMenuModal)}
          >
            <VerticalMenu />
          </button>
          {openMenuModal && (
            <ModalMenu
              onClose={() => setOpenMenuModal(!openMenuModal)}
              name={character.name}
            />
          )}
          {openNameModal && (
            <NameModal
              name={character.name}
              onClose={() => setOpenNameModal(false)}
              onSave={onSave}
            />
          )}
        </div>
      </td>
    </tr>
  )
}
