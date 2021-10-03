import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { initializeCharacters } from '../../actions/characterActions'
import ControlPanel from './Pagination/ControlPanel'
import TBody from './TBody'
import THead from './THead'

export default function MainTable() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeCharacters())
        
    }, [dispatch])
    
    return (
        <div className="tabel-container">
            <table>
                <THead/>
                <TBody/>
            </table> 
            <ControlPanel/>
        </div>
    )
}
