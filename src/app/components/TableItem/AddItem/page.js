'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const page = () => {
    const [modal,setModal] = useState(false);
    
    function handleChange() {
        setModal(!modal);
    }
    
    const [itemCode, setItemCode] = useState("")   
    const [name, setName] = useState("")   
    const [bin, setBin] = useState("")   
    const [racks, setRacks] = useState("")   
    
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        //VALDATION
        if (!itemCode || !name || !bin || !racks) {
            alert("The form must be filled in completely!");
        }

        try {
            const res = await fetch("http://localhost:3000/api/items", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    itemCode,
                    name,
                    bin,
                    racks
                }),
                
            });
            if(res.ok) {
                router.refresh('/items');
                handleChange();

            }else {
                throw new Error("Failed to create item");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <button onClick={handleChange} className="btn btn-outline btn-sm w-[100px] btn-accent">Add</button>
    <input type='checkbox' checked={modal} onChange={handleChange} className='modal-toggle'/>
    <div className='modal'>
        <div className='modal-box'>
            <form className='m-1' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <div className='font-semibold'>Code Item</div>
                        <input onChange={(e) => setItemCode(e.target.value)} value={itemCode} type="text" autoFocus placeholder="Enter Code" className="input input-bordered w-[100%]" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-semibold'>Name</div>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter Name" className="input input-bordered w-[100%]" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-semibold'>Bin</div>
                        <input onChange={(e) => setBin(e.target.value)} value={bin} type="number" placeholder="Enter Bin" className="input input-bordered w-[100%]" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-semibold'>Racks</div>
                        <input onChange={(e) => setRacks(e.target.value)} value={racks} type="number" placeholder="Enter Racks" className="input input-bordered w-[100%]" />
                    </div>
                    <div className='w-full flex justify-between'>
                        <button type='button' onClick={handleChange} className='btn'>Close</button>
                        <input type="submit" value="Submit" className="btn bg-blue-500" />  
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default page