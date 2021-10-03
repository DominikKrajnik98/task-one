import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAllCheckboxes } from '../../actions/checkboxesAction'
import { ReactComponent as ArrowSort } from '../../assets/arrow_sort.svg'

export default function THead(props) {
  const checkedHead = useSelector(state => state.checkboxes.headerCheckbox)
  const dispatch = useDispatch()

  const checkboxTrigger = () => {
    const checkedHeadNow = checkedHead
    dispatch(changeAllCheckboxes(!checkedHeadNow))
  }

  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            checked={false || checkedHead}
            onChange={checkboxTrigger}
          />
        </th>
        <th>
          Name{' '}
          {
            <span className="position-right">
              <ArrowSort />
            </span>
          }
        </th>
        <th>
          Born{' '}
          {
            <span className="position-right">
              <ArrowSort className="postion-right" />
            </span>
          }
        </th>
        <th>
          Homeworld{' '}
          {
            <span className="position-right">
              <ArrowSort />
            </span>
          }
        </th>
        <th>
          Vehicels and Starships{' '}
          {
            <span className="position-right">
              <ArrowSort />
            </span>
          }
        </th>
        <th>
          Status{' '}
          {
            <span className="position-right">
              <ArrowSort />
            </span>
          }
        </th>
        <th>Actions</th>
      </tr>
    </thead>
  )
}
