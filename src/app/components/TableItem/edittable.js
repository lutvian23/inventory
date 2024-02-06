'use client'
import React from 'react'
import { HiOutlineAdjustments } from 'react-icons/hi'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTable = ({id,itemCode,name,bin,racks}) => {
    const [modal,setModal] = useState(false);
    const router = useRouter();

    function handleChange() {
        setModal(!modal);
    }
    const [newItemCode, setNewItemCode] = useState(itemCode);
    const [newName, setNewName] = useState(name);
    const [newBin, setNewBin] = useState(bin);
    const [newRacks, setNewRacks] = useState(racks);
    const setId = id;

    const updateItem = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://localhost:3000/api/items/';
        const id = setId;
        console.log(apiUrl + id);
        try{
            const res = await fetch(apiUrl + id,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newItemCode,newName,newBin,newRacks}),
            });
            const badan = JSON.stringify({newItemCode,newName,newBin,newRacks})
            console.log(badan);

            if(!res.ok) {
                throw new Error("failed update item")
            }
            handleChange();
            router.refresh('items');
        }catch(error) {
                console.log(`handling error: ${error.message}`)
        }
    }
  return (
      <>
        <button onClick={handleChange}><HiOutlineAdjustments size={25}/></button>
        <input type='checkbox' checked={modal} className='modal-toggle' onChange={handleChange} />

        <div className='modal'>
            <div className='modal-box w-[500px] rounded-none'>
                <div className='flex text-black flex-col gap-2'>
                    <form onSubmit={updateItem}>
                        <div className='flex flex-col gap-2'>
                            <div className='font-semibold'>Code Item</div>
                            <input onChange={(e) => setNewItemCode(e.target.value)} value={newItemCode} type="text" autoFocus placeholder="Enter Code" className="input input-bordered w-[100%]" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='font-semibold'>Name</div>
                            <input onChange={(e) => setNewName(e.target.value)} value={newName} type="text" placeholder="Enter Name" className="input input-bordered w-[100%]" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='font-semibold'>Bin</div>
                            <input onChange={(e) => setNewBin(e.target.value)} value={newBin} type="number" placeholder="Enter Bin" className="input input-bordered w-[100%]" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='font-semibold'>Racks</div>
                            <input onChange={(e) => setNewRacks(e.target.value)} value={newRacks} type="number" placeholder="Enter Racks" className="input input-bordered w-[100%]" />
                        </div>
                        <div className='flex w-full justify-between mt-1'>
                        <button type='button' onClick={handleChange} className='btn btn-warning'>Close</button>
                        <button type='submit' className='btn btn-info'>Oke</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
export default EditTable