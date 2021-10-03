import React from 'react'
import ControlButton from './ControlButton'
import { useSelector } from 'react-redux'
import { ReactComponent as ArrowLeft } from '../../../assets/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/arrow-right.svg'

export default function ControlPanel() {
  const pageCount = useSelector(state => state.characters.totalCount) / 10
  console.log(pageCount)

  return (
    <div className="control-panel">
      <ControlButton icon={<ArrowLeft />} />
      <ControlButton icon="1" />
      <ControlButton icon="2" />
      <ControlButton icon="3" />
      {pageCount > 6 && (
        <ControlButton icon="..." specialCss="control-button-dots" />
      )}
      <ControlButton icon="7" />
      <ControlButton icon="8" />
      <ControlButton icon="9" />
      <ControlButton icon={<ArrowRight />} />
    </div>
  )
}
