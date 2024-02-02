import React from 'react'

const input = () => {
  return (
    <div className=''>
        <form action="">
            <input 
                type='text' 
                placeholder='Input Code'
                className='border border-solid font-bold border-black px-2 text-[12px] mx-2 w-[300px] h-[30px] rounded-md'    
            ></input>
            <button className='btn btn-sm bg-black text-white text-[13px] px-3 py-1 rounded-md '>Send</button>
        </form>
    </div>
  )
}

export default input