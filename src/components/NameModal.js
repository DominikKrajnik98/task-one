import React, { useEffect, useState } from 'react'

export default function NameModal(props) {
  const [inputValue, setInputValue] = useState(props.name)

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  const onChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div id="NameModal" className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={props.onClose}>
          &times;
        </span>
        <p>Enter new character name</p>
        <input
          type="text"
          placeholder={props.name}
          className="modal-input"
          onChange={onChange}
        />
        <button type="button" onClick={() => props.onSave(inputValue)}>
          Save
        </button>
      </div>
    </div>
  )
}
