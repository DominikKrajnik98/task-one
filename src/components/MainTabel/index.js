import React from 'react'
import THead from './THead'

export default function MainTable() {
    return (
        <div className="tabel-container">
            <table>
                <THead/>
                <tbody>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                </tbody> 
            </table> 
        </div>
    )
}
