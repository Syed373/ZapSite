import React from 'react'

function chats() {
  return (
    <>
    <div id='user_chat' className='p-2 flex justify-end'>
        <div className='bg-background text-foreground p-2 rounded-xl max-w-[90%] text-end'>Lorem .</div>
    </div>
    <div id='ai_chat' className='p-2 flex justify-start'>
        <div className='bg-background text-foreground p-2 rounded-xl max-w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quasi?</div>
    </div>
    </>
  )
}

export default chats