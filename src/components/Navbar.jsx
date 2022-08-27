import React, {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


export const Navbar = () => {
    const {user , logOut} = UserAuth()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <nav className='flex items-center justify-between p-4 absolute w-full z-[100]'>
            <Link to='/'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            </Link>
            {!user ? <div className='flex gap-6 items-center'>
                <Link to='/login'>
                    <button>
                        Sign In
                    </button>
                </Link>
                <Link to='/signup'>
                    <button className='signup-btn'>Sign Up</button>
                </Link>
                </div> : <div className='flex gap-6 items-center'>
                <Link to='/account'>
                    <button>
                        Account
                    </button>
                </Link>
                    <button onClick={handleLogOut} className='signup-btn'>Sign Out</button>
                </div>
            }
        </nav>
    )
}
