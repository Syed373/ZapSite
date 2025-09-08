import React from 'react'

function Login() {
  return (
    <div className='bg-back h-14 w-64 rounded-xl flex justify-center items-center gap-6'>
      <button className='text-sm font-mono border border-[#353535] rounded-xl px-16 py-2 cursor-pointer hover:bg-WhenHover'>
        Login
      </button>
      <button className='cursor-pointer'>
        <img src="ThemeToggle.svg" alt="Theme toggle" />
      </button>
    </div>
  )
}

export default Login