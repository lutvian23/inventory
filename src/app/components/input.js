'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const input = () => {
  const [itemCode, setItemCode] = useState("")
  const router = useRouter();
  const handlesubmit = async (e) => {
    e.preventDefault();
    if(!itemCode) {
      alert("The item code must be in completely!")
    }

    try {
      const res = await fetch('http://localhost:3000/api/inouts', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          itemCode
        })
      });
      if(res.ok) {
        router.refresh('/')
        setItemCode('')
      }
    } catch (error) {
      console.log(`handling error : ${error.message}`)
      
    }
  }
  return (
    <div className=''>
        <form onSubmit={handlesubmit}>
            <input 
                type='text' 
                placeholder='Input Code'
                className='border border-solid font-bold border-black px-2 text-[12px] mx-2 w-[300px] h-[30px] rounded-md'    
                onChange={(e) => setItemCode(e.target.value)} value={itemCode} 
            ></input>
            <button className='btn btn-sm bg-black text-white text-[13px] px-3 py-1 rounded-md '>Send</button>
        </form>
    </div>
  )
}

export default input