import React from 'react'
import { ReactComponent as Minus } from '../../assets/minus.svg'

export default function ActionButton({ text }) {
  return (
    <button type="button" className="action-button">
      <Minus className="minus-icon" />
      <span>{text}</span>
    </button>
  )
}
