import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


export const Login = () => {
	const { logIn } = UserAuth()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [err, setErr] = useState('');
	const navigate = useNavigate()

	const errorHandling = (error) => {
		const errors = {
			'auth/user-not-found': 'User Not in our Database',
			'auth/wrong-password': 'Wrong Password',
		}
		return errors[error]

	}

	const handleSubmit = async (e) => {
		setErr('');
		e.preventDefault()
		if (
			email && password
		) {
			try {
				await logIn(email, password)
				navigate('/')
			} catch (error) {
				setErr(error);
				// console.clear()
			}
		}

	}
	return (
		<>
			<div className='w-full h-screen'>
				<img
					className='hidden sm:block absolute w-full h-full object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
					alt='/'
				/>
				<div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

				<div className='fixed w-full px-4 py-24 z-50'>
					<div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>


						<div className='max-w-[300px] mx-auto py-16 '>
							<h1 className='text-3xl font-bold '>Sign In</h1>
							{err && <p className='border border-[#9F6000] p-[10px] text-[#9F6000] bg-[#FEEFB3]/10 rounded mt-4'>{errorHandling(err.code)}</p>}
							<form onSubmit={handleSubmit} className='flex flex-col w-full py-4 gap-4'>
								<input type={'email'} placeholder="Email" autoComplete='email' className='input-style' onChange={(e) => setEmail(e.target.value)} />
								<input type={'password'} placeholder="Password" autoComplete='current-password' className='input-style' onChange={(e) => setPassword(e.target.value)} />
								<button className='signup-btn '>Sign In</button>
								<div className='flex justify-between items-center text-gray-600'>
									<p className='flex gap-2 '>
										<input
											id='remember'
											type={'checkbox'}
										/>
										<label className='' htmlFor='remember'>
											Remeber Me
										</label>
									</p>
									<p>
										Need help ?
									</p>
								</div>
								<p className='py-2'>
									<span className='text-gray-600'>New to Netflix? </span> <Link to='/signup'> {' '}
										Sign Up
									</Link>
								</p>

							</form>
						</div>


					</div>
				</div>
			</div>
		</>
	)
}
