import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Search } from '../../assets/search.svg'
import {getCharactersWithNameFilter,resetCharacterFilter}  from '../../actions/characterActions'

export default function SearchBox() {
  const [isVisible, setIsVisible] = useState(true)
  const dispatch = useDispatch()

  async function handleChange(e) {
    const searchFraze = e.target.value
    if (searchFraze === '') {
      await dispatch(resetCharacterFilter())
      setIsVisible(true)
    } else {
      await dispatch(getCharactersWithNameFilter(searchFraze))
      setIsVisible(false)
    }
  }
  return (
    <div className="search-box">
      <input type="text" placeholder="Search" onChange={handleChange} />
      {isVisible && <Search className="search-icon" />}
    </div>
  )
}
