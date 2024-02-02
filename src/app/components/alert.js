import React from 'react'

const alert = () => {
  return (
    <div className='px-2 w-full h-full'>
      <div className='bg-white overflow-hidden h-[100%] rounded-tl-lg'>
        <div className='text-center font-semibold'>NOTIFICATION</div>
        <div className='h-[100%] overflow-auto no-scrollbar hover:overflow-x-hidden'>

          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default alert