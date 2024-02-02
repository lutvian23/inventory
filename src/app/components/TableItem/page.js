import React from 'react'
import TableValue from './tablevalue';

const page = async () => {
    const res = await fetch("http://localhost:3000/api/items", {
        cache: 'no-store',
    });
    const item = await res.json();

  return (
    <>    
    <div className="overflow-x-auto mt-2">
        <table className="table">
            {/* head */}
            <thead>
            <tr className="bg-white text-black">
                <th>No</th>
                <th>Code</th>
                <th>Name</th>
                <th>Bin</th>
                <th>Racks</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody className='text-white'>
            {item.items && item.items.length > 0 && item.items.map(items => {
                return (
                <tr key={items._id}>
                  <TableValue id={items._id} itemCode={items.itemCode} name={items.name} bin={items.bin} racks={items.racks}/>
                </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default page