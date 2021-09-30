import {React} from 'react'
import InputSection from './InputSection/InputSection'
import MainTable from './MainTabel'

export default function StarWarsTablePage() {

    return(
        <div className="content">
            <InputSection/>
            <MainTable/>
        </div>
    )
}