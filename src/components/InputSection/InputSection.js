import React from 'react'
import ActionButton from './ActionButton'
import Dropdown from './Dropdown'
import SearchBox from './SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { addSpcies } from '../../actions/speciesActions'
import { addHomeworld } from '../../actions/homeworldActions'
import { updateCharacters } from '../../actions/characterActions'
import { changeAllCheckboxes } from '../../actions/checkboxesAction'

export default function InputSection() {
  const species = useSelector(state => state.species)
  const homeworlds = useSelector(state => state.homeworld)
  const characters = useSelector(state => state.characters.listOfCharacters)
  const checkboxes = useSelector(state => state.checkboxes.checkboxes)
  const dispatch = useDispatch()
  const statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Deactived', label: 'Deactived' },
  ]

  const prepareOptions = array => {
    return array.map(name => ({ value: name, label: name }))
  }

  const updateSpecies = () => {
    if (species.names.length < species.count) {
      dispatch(addSpcies(species.next))
    }
  }

  const updateHomeworld = () => {
    if (homeworlds.names.length < homeworlds.count) {
      dispatch(addHomeworld(homeworlds.next))
    }
  }

  const handleDeactivation = () => {
    const updatedSatausCharacters = characters.map((character, index) =>
      checkboxes[index]
        ? {
            ...character,
            status:
              character.status === 'Active' ? 'Deactivated' : 'Active',
          }
        : { ...character, status: character.status }
    )
    dispatch(updateCharacters(updatedSatausCharacters))
    dispatch(changeAllCheckboxes(false))
  }

  const handleRemove = () => {
    const updatedCharactersList = characters.filter(
      (character, index) => !checkboxes[index]
    )
    console.log(updatedCharactersList)
    dispatch(updateCharacters(updatedCharactersList))
    dispatch(changeAllCheckboxes(false))
  }

  return (
    <div className="inputs">
      <SearchBox />
      <Dropdown
        placeholder="Species"
        options={prepareOptions(species.names)}
        updateList={updateSpecies}
        isMutli={true}
      />
      <Dropdown
        placeholder="Homeworld"
        options={prepareOptions(homeworlds.names)}
        updateList={updateHomeworld}
        isMutli={true}
      />
      <Dropdown placeholder="Status" options={statusOptions} isMutli={false} />
      <ActionButton text="Deactivate characters" onClick={handleDeactivation} />
      <ActionButton text="Remove characters" onClick={handleRemove} />
    </div>
  )
}
