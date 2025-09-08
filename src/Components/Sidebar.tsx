import React from 'react'
function Sidebar() {
  return (
    <div className='bg-back h-[90%] w-64 rounded-xl font-mono'>
      <div className='p-4 space-y-2'>
        <div className='flex justify-between items-center p-2'>
          <div><img src="Sidebar.svg" alt="Sidebar Toggle" className='size-5 cursor-pointer' /></div>
          <div>ZapSite</div>
          <div><img src="Search.svg" alt="Search Icon" className='size-5 cursor-pointer' /></div>
        </div>
        <button className='border border-[#353535] p-2 rounded-lg hover:bg-WhenHover text-sm cursor-pointer w-full flex justify-center items-center gap-2'>New Chat <img src="Plus.svg" alt="Plus Icon" /></button>
      </div>
      <div className='border-t border-[#353535] mx-4 flex-1 h-[80%]'>
        <button className='border border-[#353535] mt-2 text-center p-2 rounded-lg text-sm cursor-pointer w-full'>History</button>
      </div>
    </div>
  )
}

export default Sidebar