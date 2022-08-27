import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const MovieCard = ({ card }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:opacity-70'>

            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${card.backdrop_path}`} alt={card.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white '>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full transition text-center'>{card?.title}</p>
                <span onClick={handleCheck} className=' absolute top-[12%] left-[7%]'>
                    {checked ? <FaHeart /> : <FaRegHeart />}
                </span>
            </div>
        </div>
    )
}
