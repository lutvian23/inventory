import React from 'react'

const information = async () => {
  const resB1 = await fetch('http://localhost:3000/api/rakperbin/rakbin1', {
    cache: 'no-store',
  })
  const resB2 = await fetch('http://localhost:3000/api/rakperbin/rakbin2', {
    cache: 'no-store',
  })
  const resB3 = await fetch('http://localhost:3000/api/rakperbin/rakbin3', {
    cache: 'no-store',
  })

  const resT = await fetch("http://localhost:3000/api/rakperbin/temporary", {
    method: "GET",
    cache: 'no-store',
  });
  const rakBinT = await resT.json();
  const rakBin1 = await resB1.json();
  const rakBin2 = await resB2.json();
  const rakBin3 = await resB3.json();


  return (
    <>
    <div className=" h-[100%] text-[20px] flex flex-col justify-center gap-5 box-border">
      
      {/* BIN 1 */}
      <div className='rounded-md box-border flex justify-between w-[100%] border-solid border-2 border-blue-900 h-[20%]'>   
      <div className='p-2 h-[100%] w-[92%] grid grid-cols-10 gap-2 overflow-x-visible no-scrollbar overflow-scroll'>
        {rakBin1.arrayQty.map(arrayQty => {
          return (
          <div key={arrayQty.racks} className='flex items-center w-fit gap-2'>
            {/* WARNA */}
            {arrayQty.item != "" ? ( <div id='' className='w-[10px] h-[10px] box-border bg-red-500'></div> ) : ( <div id='' className='w-[10px] h-[10px] box-border bg-white'></div> )}
            {/* ANGKA */}
            <div className='text-white'>{arrayQty.racks}</div>
          </div>
          )
        })}
        </div>
        <div className='h-full w-[8%] bg-blue-900 flex items-center'>
          <div className='rotate-90 font-bold text-2xl text-white'>BIN 1</div>
        </div>
      </div>

      {/* BIN 2 */}
      <div className='rounded-md box-border flex justify-between border-solid border-2 border-blue-900 h-[20%]'>   
      <div className='p-2 h-[100%] w-[92%] grid grid-cols-10 gap-2 overflow-x-visible no-scrollbar overflow-scroll'>
        {rakBin2.arrayQty.map(arrayQty => {
          return (
          <div key={arrayQty.racks} className='flex items-center w-fit gap-2'>
            {/* WARNA */}
            {arrayQty.item != "" ? ( <div id='' className='w-[10px] h-[10px] box-border bg-red-500'></div> ) : ( <div id='' className='w-[10px] h-[10px] box-border bg-white'></div> )}
            {/* ANGKA */}
            <div className='text-white'>{arrayQty.racks}</div>
          </div>
          )
        })}
        </div>
        <div className='h-full w-[8%] bg-blue-900 flex items-center'>
          <div className='rotate-90 font-bold text-2xl text-white'>BIN 2</div>
        </div>
      </div>

      {/* BIN 3 */}
      <div className='rounded-md box-border flex justify-between border-solid border-2 border-blue-900 h-[20%]'>   
      <div className='p-2 h-[100%] w-[92%] grid grid-cols-10 gap-2 overflow-x-visible no-scrollbar overflow-scroll'>
        {rakBin3.arrayQty.map(arrayQty => {
          return (
          <div key={arrayQty.racks} className='flex items-center w-fit gap-2'>
            {/* WARNA */}
            {arrayQty.item != "" ? ( <div id='' className='w-[10px] h-[10px] box-border bg-red-500'></div> ) : ( <div id='' className='w-[10px] h-[10px] box-border bg-white'></div> )}
            {/* ANGKA */}
            <div className='text-white'>{arrayQty.racks}</div>
          </div>
          )
        })}
        </div>
        <div className='h-full w-[8%] bg-blue-900 flex items-center'>
          <div className='rotate-90 font-bold text-2xl text-white'>BIN 3</div>
        </div>
      </div>

      {/* TEMPORARY STORAGE */}
      <div className='rounded-md box-border flex justify-between border-solid border-2 border-red-700 h-[20%]'>   
      <div className='p-2 h-[100%] w-[92%] grid grid-cols-10 gap-2 overflow-x-visible no-scrollbar overflow-scroll'>
        {rakBinT.arrayQty.map(arrayQty => {
          return (
          <div key={arrayQty.racks} className='flex items-center w-fit gap-2'>
            {/* WARNA */}
            {arrayQty.item != "" ? ( <div id='' className='w-[10px] h-[10px] box-border bg-red-500'></div> ) : ( <div id='' className='w-[10px] h-[10px] box-border bg-white'></div> )}
            {/* ANGKA */}
            <div className='text-white'>{arrayQty.racks}</div>
          </div>
          )
        })}
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