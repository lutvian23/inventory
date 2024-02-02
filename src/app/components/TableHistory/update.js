'use client'
import { useState } from 'react';
import React from 'react';
import {HiPencilAlt} from 'react-icons/hi';

const Update = () => {
    const [modal,setModal] = useState(false);

    function handleChange() {
        setModal(!modal)
    }

  return (
    <>
        <button onClick={handleChange}><HiPencilAlt size={24}/></button>  
        <input type='checkbox' checked={modal} onChange={handleChange} className='modal-toggle'/>
        <div className='modal'>
            <div className='modal-box'>
                <label></label>
                <button onClick={handleChange} className='btn'>Close</button>
            </div>
        </div>
    </>
  )
}

export default Update