import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc , updateDoc } from 'firebase/firestore';


export const MovieCard = ({ card }) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);

    const { user } = UserAuth();

    const movieID = doc(db,'users',`${user?.email}`)

    console.log(movieID);

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(!saved)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id : card.id,
                    title : card.title,
                    img : card.backdrop_path,
                })
            })
        } else alert("Please Sign In to Like the Movie !")
    }


    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:opacity-70'>

            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${card.backdrop_path}`} alt={card.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white '>
                <p className='white-space-normal max-w-5xl text-xs md:text-sm font-bold flex justify-center items-center h-full transition text-center'>{card?.title}</p>
                
                <span onClick={saveShow} className=' absolute top-[12%] left-[7%]'>
                    {like ? <FaHeart /> : <FaRegHeart />}
                </span>
            </div>
        </div>
    )
}
