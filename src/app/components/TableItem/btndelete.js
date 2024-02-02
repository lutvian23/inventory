'use client'
import React from 'react'
import {HiOutlineTrash} from 'react-icons/hi'
import { useState } from 'react'
import Trash from '../../../../public/icons-trash.gif'
import Image from 'next/image'

const BtnDelete = (id) => {
    const [modal, setModal] = useState(false);

    function handleChange() {
        setModal(!modal);
    }
    
    async function deleteItem(id) {
        await fetch(`http://localhost:3000/api/items?id=${id}` , {
            method: "DELETE",
        });
    }
  return (
    <>
        <button onClick={handleChange} className='text-red-500'><HiOutlineTrash size={18} /></button>
        <input type='checkbox' checked={modal} className='modal-toggle' onChange={handleChange} />
        <div className='modal'>
            <div className='modal-box'> 
            <div className='text-center font-bold text-red-500 text-[30px]'>Are you sure ?</div>
                <div className='flex justify-center my-9'>
                    <Image
                        src={Trash}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <button onClick={handleChange} className='btn'>Close</button>
                    <button onClick={deleteItem(id)} className='btn btn-error'>Oke</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default BtnDelete