import React from 'react'
import Image from 'next/image'
import Sadface from '../../public/sadface.gif'

const NotFound = () => {
  return (
    <div className='w-[100%] flex justify-center items-center h-[90%] bg-white'>
        <div className='flex flex-col justify-center'>
            <Image
            src={Sadface}
            width={300}
            height={300}
            ></Image>
            <div className='font-bold text-[30px] -mt-3s'>404 PAGE NOT FOUND</div>
        </div>
    </div>
  )
}

export default NotFound