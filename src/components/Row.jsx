import React, { useState , useEffect } from 'react'
import axios from 'axios'

export const Row = ({title , fetchUrl}) => {
    const [movies , setMovies] = useState([])

    useEffect(()=> {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    },[])
    

    console.log(movies)
    return (
        <>

        </>
    )
}
