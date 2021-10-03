import React from 'react'

export default function ControlButton(props) {
    const css = props.specialCss ? props.specialCss : "control-button"
  return (
    <button type="button" className={css} onClick={props.handleClik}>
      {props.icon}
    </button>
  )
}
