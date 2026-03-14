"use client"

import React, { useState } from 'react'
import Add from './Icons/Add'
import Search from './Icons/Search'
import ThemeToggle from './ui/ThemeToggle';
import { UserIcon } from 'lucide-react';
import router from 'next/router';

interface SidebarProps {
  isOpen: boolean;
}

function Sidebar({ isOpen }: SidebarProps) {

  return (
    <div
      className={`bg-back font-mono z-50 transition-all ease-in-out rounded-xl duration-500 overflow-hidden flex-shrink-0 flex flex-col bottom-4 fixed w-64 sm:w-76 ${isOpen ? 'h-[96%]' : 'h-0'
        }`}
    >
      {/* LOGO */}
      <div className="flex items-center justify-center py-4 px-4 flex-shrink-0">
        <span className="text-lg font-bold tracking-widest">LOGO</span>
      </div>

      {/* New Chat row */}
      <div className="flex items-center justify-between px-4 py-3 mx-3 mb-3 bg-background flex-shrink-0 cursor-pointer hover:bg-WhenHover rounded-full transition-colors duration-200 border border-[#353535]">
        <span className="text-sm">New Chat</span>
        <button>
          <Add />
        </button>
      </div>

      {/* Search bar */}
      <div className="flex items-center justify-between px-4 py-3 mx-3 mb-3 bg-background flex-shrink-0 cursor-pointer hover:bg-WhenHover rounded-full transition-colors duration-200 border border-[#353535]">
        <span className="text-sm flex-1">Search......</span>
        <Search />
      </div>

      {/* Previous Chats section */}
      <div className="flex-1 h-20 flex flex-col border border-[#353535] p-1 mx-3 lg:mb-18 mb-3 rounded-xl bg-background overflow-hidden">
        <div className="px-3 py-2 mb-2 text-xs text-center  underline underline-offset-4 flex-shrink-0">
          Previous Chats
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto px-2 flex flex-col gap-1">
          {/* History items will be added here */}
        </div>
      </div>
      <div className='p-2 mb-18 flex w-full justify-between gap-2 lg:hidden'>
        <button
          onClick={() => { router.push('/login') }}
          className="flex items-center justify-center gap-1 lg:gap-2 bg-background border border-[#353535] text-sm font-mono rounded-xl w-full lg:w-50 px-2 lg:px-4 py-1.5 transition-colors duration-200 cursor-pointer lg:hidden"
        >
          <UserIcon />
          <span className="inline lg:hidden">Login</span>
        </button>

        <div className="flex-shrink-0 mt-1.5 rounded-full cursor-pointer lg:hidden">
          <ThemeToggle />
        </div>
      </div>
    </div>

  )
}

export default Sidebar