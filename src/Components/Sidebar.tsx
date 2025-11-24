"use client"

import React, { useState } from 'react'
import SidebarIcon from './Icons/SidebarIcon'
import Add from './Icons/Add'
import ThemeToggle from './ui/ThemeToggle'
import { useRouter } from 'next/navigation'
import UserIcon from './Icons/UserIcon'

function Sidebar() {
  const [ToggleSidebar, SetToggleSidebar] = useState(false);
  const router = useRouter();

  function SidebarToggle() {
    SetToggleSidebar(!ToggleSidebar);
  }

  return (
    <div className={`max-h-screen flex flex-col space-y-2 md:space-y-4 z-50 ${ToggleSidebar ? 'absolute md:relative h-full' : 'relative'}`}>
      <div className={`bg-back rounded-xl font-mono transition-all ease-in-out duration-500 overflow-hidden flex-1 min-h-0 ${ToggleSidebar ? 'w-64 sm:w-72 md:w-64 shadow-2xl md:shadow-none' : 'w-14 sm:w-16'
        }`}>
        <div className='p-2 md:p-4 h-full flex flex-col'>
          <div className={`flex items-center transition-all duration-300 p-1 md:p-2 ${ToggleSidebar ? 'justify-between' : 'flex-col justify-center gap-4 md:gap-8'
            }`}>
            <div className={`cursor-pointer transition-all duration-300 text-sm md:text-base ${ToggleSidebar ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none hidden'
              }`}>
              ZapSite
            </div>
            <button
              onClick={SidebarToggle}
              className={`cursor-pointer transition-all duration-200 p-1`}
            >
              <SidebarIcon />
            </button>
          </div>

          <button className={`cursor-pointer w-full flex items-center gap-2 mt-2 md:mt-0 ${ToggleSidebar
            ? 'border border-[#353535] p-2 rounded-lg hover:bg-WhenHover justify-start text-sm md:text-base'
            : 'mt-2 md:mt-4 rounded-full hover:bg-WhenHover justify-center'
            }`}>
            <Add />
            <span className={`transition-all duration-300 ${ToggleSidebar ? 'opacity-100 px-2' : 'hidden'
              }`}>
              New Chat
            </span>
          </button>

          <div className={`flex-1 min-h-0 mt-2 md:mt-4 transition-all duration-300 ${ToggleSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
            <div className='border-t border-[#353535] h-full flex flex-col'>
              <div className='underline underline-offset-4 text-center p-2 rounded-lg text-xs md:text-sm cursor-pointer transition-colors duration-200 flex-shrink-0'>
                History
              </div>
              <div className='flex-1 min-h-0 overflow-y-auto flex flex-col gap-2'>
                {<button></button>} //History to be added
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-back rounded-xl transition-all ease-in-out duration-500 overflow-hidden flex-shrink-0 ${ToggleSidebar ? 'h-16 w-64 sm:w-72 md:w-64 shadow-2xl md:shadow-none' : 'h-24 sm:h-32 md:h-32 w-14 sm:w-16'
        }`}>
        <div className={`h-full flex items-center transition-all duration-300 ${ToggleSidebar ? 'justify-center gap-3 md:gap-6 px-2 md:px-4' : 'flex-col justify-center gap-2 md:gap-4'
          }`}>
          <button
            onClick={() => { router.push('/Login') }}
            className={`${ToggleSidebar
              ? 'text-xs md:text-sm font-mono border border-[#353535] rounded-xl cursor-pointer hover:bg-WhenHover transition-all duration-300 px-6 md:px-12 py-1.5 md:py-2 opacity-100 translate-x-0 flex gap-2 items-center'
              : 'hidden'
              }`}
          >
            <UserIcon /> <span>Login</span>
          </button>
          <button
            onClick={() => { router.push('/Login') }}
            className={`${ToggleSidebar ? 'hidden' : 'px-3 py-1 md:px-4 md:py-2 text-xl hover:bg-WhenHover rounded-full cursor-pointer transition-all duration-300'
              }`}>
            <UserIcon />
          </button>
          <div className={`transition-all duration-300 ${ToggleSidebar ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-0'
            }`}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar