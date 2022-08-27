import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [conPassword, setConPassword] = useState('');
	const [err , setErr] = useState('');
	const navigate = useNavigate()
	const { user, signUp } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (password === conPassword) {
			try {
				await signUp(email, password)
				setEmail('')
				setPassword('')
				setConPassword('')
				navigate('/')
				
			} catch (error) {
				setErr(error);
				console.log(err);
			}
		} else {
			alert("Password doesn't match")
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
							<h1 className='text-3xl font-bold '>Sign Up</h1>
							<form onSubmit={handleSubmit} className='flex flex-col w-full py-4 gap-4'>

								<input type={'email'} placeholder="Email" autoComplete='email' className='input-style' required={true} onChange={(e)=> setEmail(e.target.value)} value={email} />

								<input type={'password'} placeholder="Password" autoComplete='current-password' required={true} className='input-style' onChange={(e)=> setPassword(e.target.value)} value={password} />

								<input type={'password'} placeholder="Confirm Password" autoComplete='current-password' required={true} className='input-style' onChange={(e)=> setConPassword(e.target.value)} value={conPassword} />

								<button className='signup-btn '>Sign Up</button>
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
									<span className='text-gray-600'>Already subscribed to Netflix? </span> <Link to='/login'> {' '}
										Sign In
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
