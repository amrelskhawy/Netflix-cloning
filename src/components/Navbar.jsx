import React from 'react'

export const Navbar = () => {
    return (
        <nav className='flex items-center justify-between p-4 absolute w-full z-[100]'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            <div className='flex gap-6'>
                <button>Sign In</button>
                <button className='bg-red-600 px-6 py-2 rounded text-white hover:bg-red-700 transition-all'>Sign Up</button>
            </div>
        </nav>
    )
}
