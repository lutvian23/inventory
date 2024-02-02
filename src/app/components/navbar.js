import React from 'react';
import Link from 'next/link';

const navbar = () => {
  return (
    <>
    <div className="h-[10%] box-border bg-[#002EFF] px-4 justify-between flex w-full items-center">      
      <Link href={'/'} className='font-bold text-3xl text-white'>SULZER INVENTORY</Link>
      <ul className='text-white flex gap-2 w-[200px] items-center font-semibold text-[17px] mr-[80px]'>
        <li><Link href={'/items'} className='hover:bg-blue-900 transition-all duration-300 py-2 px-4 hover:rounded-md'>ITEM</Link></li>
        <li><Link href={'/racks'} className='hover:bg-blue-900 transition-all duration-300 py-2 px-4 hover:rounded-md'>RACKS</Link></li>
      </ul>
    </div>
    </>
  )
}

export default navbar