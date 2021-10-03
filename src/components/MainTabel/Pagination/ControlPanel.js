import React from 'react'
import ControlButton from './ControlButton'
import { useSelector,useDispatch } from 'react-redux'
import { ReactComponent as ArrowLeft } from '../../../assets/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/arrow-right.svg'
import {increaseCurrentPage, decreaseCurrentPage, setCurrentPage} from '../../../actions/currentPageActions'
import {getAnotherPageOfCharacters} from '../../../actions/characterActions'

export default function ControlPanel() {
  const CHARACTERS_PER_VIEW = 10
  const pageCount = Math.ceil(
    useSelector(state => state.characters.totalCount) / CHARACTERS_PER_VIEW
  )
	const dispatch = useDispatch()

  const currentPage = useSelector(state => state.currentPage)

  const setPageNumber = number => {
    dispatch(setCurrentPage(number))
    dispatch(getAnotherPageOfCharacters(number))
  }

  const increasePageNumber = () => {
    if(currentPage<pageCount){
			dispatch(increaseCurrentPage())
      dispatch(getAnotherPageOfCharacters(currentPage + 1))
		}
  }

  const decreasePageNumber = () => {
    if(currentPage>1){
			dispatch(decreaseCurrentPage())
      dispatch(getAnotherPageOfCharacters(currentPage - 1))
		}
  }

  return (
    <div className="control-panel">
      <ControlButton icon={<ArrowLeft />} handleClick={decreasePageNumber} />
      <ControlButton
        icon={
          currentPage === 1
            ? 1
            : currentPage === pageCount
            ? currentPage - 2
            : currentPage - 1
        }
        specialCss={currentPage === 1 ? 'control-button-active' : ''}
        handleClick={setPageNumber}
      />
      {pageCount >= 2 && (
        <ControlButton
          icon={
            currentPage === 1
              ? 2
              : currentPage === pageCount
              ? currentPage - 1
              : currentPage
          }
          specialCss={
            currentPage !== pageCount && currentPage !== 1
              ? 'control-button-active'
              : ''
          }
          handleClick={setPageNumber}
        />
      )}

      {pageCount >= 3 && (
        <ControlButton
          icon={
            currentPage === 1
              ? 3
              : currentPage === pageCount
              ? currentPage
              : currentPage + 1
          }
          specialCss={currentPage === pageCount ? 'control-button-active' : ''}
          handleClick={setPageNumber}
        />
      )}
      {pageCount >= 4 && currentPage + 1 < pageCount && (
        <ControlButton icon="..." specialCss="control-button-dots" />
      )}

      {pageCount >= 6 && currentPage + 3 < pageCount && (
        <ControlButton icon={pageCount - 2} handleClick={setPageNumber} />
      )}
      {pageCount >= 5 && currentPage + 2 < pageCount && (
        <ControlButton icon={pageCount - 1} handleClick={setPageNumber} />
      )}
      {pageCount >= 4 && currentPage + 1 < pageCount && (
        <ControlButton icon={pageCount} handleClick={setPageNumber} />
      )}
      <ControlButton icon={<ArrowRight />} handleClick={increasePageNumber} />
    </div>
  )
}
