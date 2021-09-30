import React from 'react'
import { ReactComponent as ArrowSort } from '../../assets/arrow_sort.svg' 

export default function THead() {
    return (
        <thead>
            <tr>
                <th><input type="checkbox"/></th>
                <th>Name {<span className="position-right"><ArrowSort/></span>}</th>
                <th>Born {<span className="position-right"><ArrowSort className="postion-right"/></span>}</th>
                <th>Homeworld {<span className="position-right"><ArrowSort/></span>}</th>
                <th>Vehicels and Starships {<span className="position-right"><ArrowSort/></span>}</th>
                <th>Status {<span className="position-right"><ArrowSort/></span>}</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}
