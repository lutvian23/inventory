'use client'
import React from 'react'
import {HiOutlineTrash} from 'react-icons/hi'
import { useState } from 'react'
import Trash from '../../../../public/icons-trash.gif'
import Image from 'next/image'
import {useRouter} from 'next/navigation'


const BtnDelete = (id) => {

    const [modal, setModal] = useState(false);
    const router = useRouter();

    function handleChange() {
        setModal(!modal);
    }
    
    const deleteItem = async (id) => {
        const valueId = id.id
        try {
            const apiUrl = "http://localhost:3000/api/items?id=";
            const res = await fetch(apiUrl + valueId, {
                method: "DELETE",
                cache: "no-store"
            });
    
            if (!res.ok) {
                throw new Error('Failed to delete item');
            }else {
                router.refresh('/items');
                handleChange();
                const result = await res.json();
                console.log(result);
            }
            
        } catch (error) {
            console.error('Error deleting item:', error.message);
        }
    };
    
    
  return (
    <>
        <button onClick={handleChange} className='text-red-500'><HiOutlineTrash size={25} /></button>
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
                <div className='flex justify-between w-full'>
                    <button onClick={handleChange} className='btn btn-warning'>Close</button>
                    <button onClick={() => deleteItem(id)} className='btn btn-error'>Oke</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default BtnDelete