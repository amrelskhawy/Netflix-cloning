import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../requests'

export const Main = () => {
    const [movies, setMovies] = useState([])

    
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
        
    }, [])
    
    const movie = movies[Math.floor(Math.random() * movies.length)]



    const truncate = (str , num) => {
        if ( str.length > num) {
            return str.slice(0,num) + '...'
        } 
        return str
    }

    return (
        <div className='w-full h-[550px] text-white'>
            { movie &&
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie?.title} />
                <div className='absolute top-[20%] p-4 md:p-8 flex flex-col gap-4'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4' >
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%]  xl:max-w-[35%] lg:max-w-[50%] text-gray-200'>{truncate(movie?.overview,150)}</p>
                </div>
            </div>
}
        </div>
    )
}
