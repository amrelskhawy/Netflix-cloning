import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { MovieCard } from './MovieCard'

export const Row = ({title , fetchUrl}) => {
    const [movies , setMovies] = useState([])

    useEffect(()=> {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchUrl])

    

    console.log(movies)

    return (
        <div className='flex flex-col my-4 px-4 '>
            <h2 className='text-white md:text-xl py-4 font-bold'>{title}</h2>
            <div className='flex relative items-center '>
                <div id='slider'>
                    {
                        movies.map(movie => {
                            return <MovieCard key={movie.id} card={movie} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
