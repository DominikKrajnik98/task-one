import React, { useState } from 'react'
import Select, { components } from 'react-select'
import { ReactComponent as ArrowDown } from '../../assets/arrow_down.svg'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const customStyles = {
  valueContainer: provided => ({
    ...provided,
    color: '#484F53',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#484F53',
    margin: '0px',
  }),
  container: provided => ({
    ...provided,
    height: '40px',
  }),
  control: provided => ({
    ...provided,
    height: '40px',
    width: '110px',
    background: '#FFFFFF',
    border: '1px solid #BAC6D8',
    color: '#484F53',
    borderRadius: '5px',
  }),
}

const ValueContainer = ({ children, getValue, ...props }) => {
  let values = getValue()
  // Keep standard placeholder and input from react-select
  const childsToRender = React.Children.toArray(children).filter(
    child =>
      ['Input', 'DummyInput', 'Placeholder'].indexOf(child.type.name) >= 0
  )

  return (
    <components.ValueContainer {...props} className="dropdown">
      {values.length > 0 && (
        <div className="placeholder"> {props.selectProps.placeholder} </div>
      )}
      {childsToRender}
    </components.ValueContainer>
  )
}

const Option = props => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{' '}
        <label>{props.label}</label>
      </components.Option>
    </div>
  )
}

export default function Dropdown(props) {
  const [selectedOption, setSelectedOption] = useState(null)

  function handleChange(selectedOption) {
    console.log(`Option selected:`, selectedOption)
    setSelectedOption(selectedOption)
  }

  return (
    <div className="dropdown">
      <Select
        value={selectedOption}
        placeholder={props.placeholder}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option,
          ValueContainer,
          ClearIndicator: () => '',
          IndicatorSeparator: () => '',
          DropdownIndicator: () => <ArrowDown className="arrow-dropdown" />,
        }}
        onChange={handleChange}
        options={options}
        isSearchable={false}
        styles={customStyles}
      />
    </div>
  )
}
