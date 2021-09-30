import React from 'react'
import Dropdown from './Dropdown'
import SearchBox from './SearchBox'

export default function InputSection() {
    return (
        <div className="inputs">
            <SearchBox/>
            <Dropdown placeholder='Species'/>
            <Dropdown placeholder='Homeworld'/>
            <Dropdown placeholder='Status'/>
        </div>
    )
}
