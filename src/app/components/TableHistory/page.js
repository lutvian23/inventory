'use client'
// import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineTrash } from 'react-icons/hi';
import {useRouter} from 'next/navigation';

const table = ({id, timestamp, itemCode, location, name, racks, bin}) => {
    const router = useRouter();
    const deleteItem = async (id) => {
        var apiUrl = 'http://localhost:3000/api/inouts?id=';
        var idItem = id;
        const res = await fetch(apiUrl + idItem ,{
            method: "DELETE",
            cache: 'no-store',
        })
        if(!res.ok) {
            alert('Failed to delete item')
        }
        console.log("deleted")
        router.refresh('/')
    }
    return (
        <>
            <td className='border border-gray-200 truncate'>{timestamp}</td>
            <td className='border border-gray-200 truncate'>{itemCode}</td>
            <td className='border border-gray-200 truncate'>{name}</td>
            <td className='border border-gray-200 truncate'>{racks}</td>
            <td className='border border-gray-200 truncate'>{location}</td>
            <td className='border border-gray-200 truncate'>{bin}</td>
            <td className='border border-gray-200 truncate'>
                <button onClick={() => deleteItem(id)} className='text-red-500'><HiOutlineTrash size={15}/></button>                
            </td>
        </>
    )
}
export default table;