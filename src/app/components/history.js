import Table from './TableHistory/page';
import Search from './SearchInput/page';

const history = async () => {
  const response = await fetch("http://localhost:3000/api/inouts");
  const history = await response.json();
  return (
      <>
        <div className='text-[18px] font-semibold text-center py-2'>HISTORY</div>
        <Search />
        <div className='px-2 h-[80%] overflow-y-scroll box-border no-scrollbar'>
            <table className='text-[13px] table-auto bg-white'>
              <thead>
                <tr>
                  <th className='border border-gray-200 px-12'>TIMES</th>
                  <th className='border border-gray-200 px-12'>CODE</th>
                  <th className='border border-gray-200 px-8'>ITEM</th>
                  <th className='border border-gray-200 px-2'>RAK</th>
                  <th className='border border-gray-200 px-2'>ACTION</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {history.message.map(message => { 
                  return (
                  <tr key={message._id}>
                    <Table timestamp={message.createdAt} itemCode={message.itemCode} name={message.name} racks={message.racks}/>
                  </tr>
                  )
                })}
  
              </tbody>
            </table>
          </div>
      </>
  ) 
};
export default history;
