"use client"

import React, { useState } from 'react'
import Add from './Icons/Add'
import Search from './Icons/Search'

interface SidebarProps {
  isOpen: boolean;
}

function Sidebar({ isOpen }: SidebarProps) {

  return (
    <div
      className={`bg-back font-mono transition-all ease-in-out rounded-xl duration-500 overflow-hidden flex-shrink-0 flex flex-col bottom-4 fixed w-64 sm:w-76 ${isOpen ? ' h-[96%] translate-y-0' : 'h-0 translate-y-[100%]'
        }`}
    >
      {/* LOGO */}
      <div className="flex items-center justify-center py-4 px-4 flex-shrink-0">
        <span className="text-lg font-bold tracking-widest">LOGO</span>
      </div>

      {/* New Chat row */}
      <div className="flex items-center justify-between px-3 pb-3 flex-shrink-0">
        <span className="text-sm">New Chat</span>
        <button
          className="cursor-pointer hover:bg-WhenHover rounded-full p-1 transition-colors duration-200"
        >
          <Add />
        </button>
      </div>

      {/* Search bar */}
      <div className="px-3 pb-3 flex-shrink-0">
        <div className="flex items-center gap-2 border border-[#353535] rounded-lg px-3 py-1.5">
          <span className="text-sm text-gray-400 flex-1">Search......</span>
          <Search />
        </div>
      </div>

      {/* Previous Chats section */}
      <div className="flex-1 min-h-0 flex flex-col border-t border-[#353535]">
        <div className="px-3 py-2 text-xs text-gray-400 underline underline-offset-4 flex-shrink-0">
          Previous Chats
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto px-2 flex flex-col gap-1">
          {/* History items will be added here */}
        </div>
      </div>
    </div>
    
  )
}

export default Sidebar