
import React from 'react'
import BtnDelete from './btndelete'

const TableValue = async ({id,itemCode,name,bin,racks}) => {
  return (
    <>
        <th></th>
        <td>{itemCode}</td>
        <td>{name}</td>
        <td>{bin}</td>
        <td>{racks}</td>
        <td>
          <BtnDelete id={id}/>
        </td>
    </>
  )
}

export default TableValue