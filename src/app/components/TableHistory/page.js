// 'use client'
// import React, { useState } from 'react';
import Link from 'next/link';
import Update from './update';

const table = ({timestamp, itemCode, location, name, racks, bin}) => {
    return (
        <>
            <td className='border border-gray-200 truncate'>{timestamp}</td>
            <td className='border border-gray-200 truncate'>{itemCode}</td>
            <td className='border border-gray-200 truncate'>{name}</td>
            <td className='border border-gray-200 truncate'>{racks}</td>
            <td className='border border-gray-200 truncate'>{location}</td>
            <td className='border border-gray-200 truncate'>{bin}</td>
            <td className='border border-gray-200 truncate'>
                <Update />
            </td>
        </>
    )
}
export default table;