import React from 'react'

function Login() {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='h-120 w-120 bg-back rounded-2xl flex flex-col justify-center items-center'>
                <label htmlFor="Email">Email</label>
                <input type="text" className='bg-background border'/>
                <label htmlFor="password">Password</label>
                <input type="text" className='bg-background border'/>
                <button className='cursor-pointer'>Login</button>
            </div>
        </div>
    )
}

export default Login