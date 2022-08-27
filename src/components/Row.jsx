import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { MovieCard } from './MovieCard'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'

export const Row = ({title , fetchUrl, rowId}) => {
    const [movies , setMovies] = useState([])

    useEffect(()=> {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchUrl])

    const slide = (orientation) => {
        const slider = document.getElementById(`slider ${rowId}`)
        slider.scrollLeft = orientation === 'right' ? slider.scrollLeft + 500 : slider.scrollLeft - 500
    }

    return (
        <div className='flex flex-col my-4 px-4 '>
            <h2 className='text-white md:text-xl py-4 font-bold'>{title}</h2>
            <div className='flex relative items-center group'>
                    <MdChevronLeft size={30} className='arrow-style left-[-5px]' onClick={()=> slide('left')}/>

                <div id={`slider ${rowId}`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map(movie => {
                            return <MovieCard key={movie.id} card={movie} />
                    })}
                </div>
                    <MdChevronRight size={30} className='arrow-style right-[-14px]' onClick={()=> slide('right')} />
            </div>
        </div>
    )
}
