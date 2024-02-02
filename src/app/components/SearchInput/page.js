import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center h-[10%] items-center'>
          <input 
            type='text' 
            placeholder='Searching items'
            className='border border-solid font-bold border-gray-400 px-2 text-[10px] mx-2 w-[300px] h-[25px] rounded-md'    
          ></input>
          <button className='btn btn-sm'>Oke</button>
    </div>
  )
}

export default page