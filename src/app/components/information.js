import React from 'react'

const information = () => {
  return (
    <>
    <div className=" h-[100%] text-[20px] flex flex-col justify-center gap-5 box-border">
      
      {/* BIN 1 */}
      <div className='rounded-md box-border flex justify-between w-[100%] border-solid border-2 border-blue-900 h-[20%]'>   
        <div className='p-2 h-[100%] w-[92%] grid grid-rows-2 grid-cols-12'>
          <div className='flex items-center w-fit gap-2'>
            <div className=' w-[10px] h-[10px] box-border bg-white'></div>
            <div className='text-white'>1</div>
          </div>
          <div className='flex items-center w-fit gap-2'>
            <div className=' w-[10px] h-[10px] box-border bg-red-600'></div>
            <div className='text-white'>2</div>
          </div>
        </div>
        <div className='h-full w-[8%] bg-blue-900 flex items-center'>
          <div className='rotate-90 font-bold text-2xl text-white'>BIN 1</div>
        </div>
      </div>

      {/* BIN 2 */}
      <div className='rounded-md box-border flex justify-between border-solid border-2 border-blue-900 h-[20%]'>   
        <div className='p-2 w-[92%]'>
          <div className='w-[20px] h-[20px] box-border bg-white'>
            
          </div>
        </div>
        <div className='h-full w-[8%] bg-blue-900 flex items-center'>
          <div className='rotate-90 font-bold text-2xl text-white'>BIN 2</div>
        </div>
      </div>

      {/* BIN 3 */}
      <div className='rounded-md box-border flex justify-between border-solid border-2 border-blue-900 h-[20%]'>   
        <div className='p-2 w-[92%]'>
          <div className='w-[20px] h-[20px] box-border bg-white'>
            
          </div>
        </div>
        <div className='h-full w-[8%] bg-blue-900 flex items-center'>
          <div className='rotate-90 font-bold text-2xl text-white'>BIN 3</div>
        </div>
      </div>

      {/* TEMPORARY STORAGE */}
      <div className='rounded-md box-border flex justify-between border-solid border-2 border-red-700 h-[20%]'>   
        <div className='p-2 w-[92%]'>
          <div className='w-[20px] h-[20px] box-border bg-white'>
            
          </div>
        </div>
        <div className='h-full w-[8%] bg-red-700 flex items-center justify-center'>
        <div className='rotate-90 font-bold text-2xl text-white'>TS</div>
        </div>
      </div>

    </div>
    </>
  )
}

export default information