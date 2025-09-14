"use client"

import React, { useState } from 'react'
import SidebarIcon from './Icons/SidebarIcon'
import Search from './Icons/Search'
import Plus from './Icons/Plus'
import ThemeToggle from './ui/ThemeToggle'

function Sidebar() {
  const [ToggleSidebar, SetToggleSidebar] = useState(false);

  function SidebarToggle() {
    SetToggleSidebar(!ToggleSidebar);
  }

  return (
    <div className='h-full space-y-4'>
      <div className={`bg-back rounded-xl font-mono transition-all ease-out duration-500 overflow-hidden ${ToggleSidebar ? 'h-[90%] w-64' : 'h-[80%] w-16'}`}>
        <div className='p-4 space-y-2'>
          <div className={`flex items-center transition-all duration-300 p-2 ${ToggleSidebar ? 'justify-between' : 'flex-col justify-center gap-8'
            }`}>
            <button
              onClick={SidebarToggle}
              className={`cursor-pointer transition-all duration-200 `}
            >
              <SidebarIcon />
            </button>

            <div className={`cursor-pointer transition-all duration-300 ${ToggleSidebar ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none hidden'
              }`}>
              ZapSite
            </div>

            <button className={`cursor-pointer transition-all duration-200`}>
              <Search />
            </button>
          </div>

          <button className={`cursor-pointer w-full flex items-center gap-2 ${ToggleSidebar
            ? 'border border-[#353535] p-2 rounded-lg hover:bg-WhenHover justify-center'
            : 'mt-4 rounded-full hover:bg-WhenHover justify-center'
            }`}>
            <span className={`transition-all duration-300 ${ToggleSidebar ? 'opacity-100' : 'hidden'
              }`}>
              New Chat
            </span>
            <Plus />
          </button>
        </div>
        <div className={`mx-4 flex-1 h-[80%] transition-all duration-300 ${ToggleSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
          <div className='border-t border-[#353535]'>
            <button className='border border-[#353535] mt-2 text-center p-2 rounded-lg text-sm cursor-pointer w-full hover:bg-WhenHover transition-colors duration-200'>
              History
            </button>
          </div>
        </div>
      </div>
      <div className={`bg-back rounded-xl transition-all ease-out duration-500 overflow-hidden ${ToggleSidebar ? 'h-14 w-64' : 'h-28 w-16'}`}>
        <div className={`h-full flex items-center transition-all duration-300 ${ToggleSidebar ? 'justify-center gap-6 px-4' : 'flex-col justify-center gap-4'}`}>
          <button className={`text-sm font-mono border border-[#353535] rounded-xl cursor-pointer hover:bg-WhenHover transition-all duration-300 ${ToggleSidebar
              ? 'px-16 py-2 opacity-100 translate-x-0'
              : 'px-3 py-2 opacity-0 translate-y-2 pointer-events-none'
            }`}>
            {ToggleSidebar ? 'Login' : 'L'}
          </button>
          <div className={`transition-all duration-300 ${ToggleSidebar ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-0'}`}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar