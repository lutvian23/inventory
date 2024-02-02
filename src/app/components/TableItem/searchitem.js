import React from 'react'
import AddItem from './AddItem/page'

const SearchItem = () => {
  return (
    <>
        <div className='flex items-center justify-between mt-3 w-full '>
          <div></div>
            <form className='flex gap-2'>
                <input type="text" placeholder="Searching Item" className="input input-bordered input-info h-[30px] w-[400px]" />
                <button className="btn btn-sm">Search</button>
            </form>
        <div className='mr-5'>
          <AddItem />
        </div>
        </div>
    </>

    
  )
}

export default SearchItem