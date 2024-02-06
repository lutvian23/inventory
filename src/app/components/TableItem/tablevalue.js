
import React from 'react'
import BtnDelete from './btndelete'
import EditTable from './edittable'

const TableValue = async ({id,itemCode,name,bin,racks}) => {
  return (
    <>
        <th></th>
        <td>{itemCode}</td>
        <td>{name}</td>
        <td>{bin}</td>
        <td>{racks}</td>
        <td className='flex items-start'>
          <EditTable id={id} itemCode={itemCode} name={name} bin={bin} racks={racks}/>
          <BtnDelete id={id}/>
        </td>
    </>
  )
}

export default TableValue