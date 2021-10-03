import React from 'react'
import ActionButton from './ActionButton'
import Dropdown from './Dropdown'
import SearchBox from './SearchBox'

export default function InputSection() {
    return (
        <div className="inputs">
            <SearchBox/>
            <Dropdown placeholder='Species'/>
            <Dropdown placeholder='Homeworld'/>
            <Dropdown placeholder='Status'/>
            <ActionButton text="Deactivate characters"/>
            <ActionButton text="Remove characters"/>
        </div>
    )
}
