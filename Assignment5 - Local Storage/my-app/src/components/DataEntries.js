import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
//I installed 'npm install react-icons-kit' for delete button symbol

export default function DataEntries({data, deleteEntry}) { 
  return data.map(d =>(
        
        <tr  key={d.email}>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.city}</td>
            <td></td>
            <td></td>
            <td className="delete-btn" onClick={()=>deleteEntry(d.email)}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
  
}

