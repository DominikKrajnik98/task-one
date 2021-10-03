import React from 'react'
import { useDispatch } from 'react-redux'
import {
  toogleCharacterStatus,
  removeCharacter,
} from '../actions/characterActions'

export default function ModalMenu(props) {
  const dispatch = useDispatch()
  const handleDeactivation = () => {
    dispatch(toogleCharacterStatus(props.name))
    props.onClose()
  }

  const handleRemove = () => {
    dispatch(removeCharacter(props.name))
    props.onClose()
  }

  return (
    <div className="modal-menu">
      <button type="button" onClick={handleDeactivation}>
        Active/Deactivate character
      </button>
      <button type="button" onClick={handleRemove}>
        Remove character
      </button>
    </div>
  )
}
