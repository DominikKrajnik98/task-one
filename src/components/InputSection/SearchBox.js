import { React, useState } from 'react'
import { ReactComponent as Search } from '../../assets/search.svg'

export default function SearchBox() {
  const [isVisible, setIsVisible] = useState(true)

  function handleChange(e) {
    e.target.value === '' ? setIsVisible(true) : setIsVisible(false)
  }
  return (
    <div className="search-box">
      <input type="text" placeholder="Search" onChange={handleChange} />
      {isVisible && <Search className="search-icon" />}
    </div>
  )
}
