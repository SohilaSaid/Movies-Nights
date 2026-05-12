import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchHome from '../Components/SearchHome'

export default function DataTrending({ apiURL, Title }) {


    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get(apiURL)
            .then((res) => {
                setData(res.data.results)
            })
            .catch((err) => { console.log(err) })
    }, [apiURL])
  return (
         <>
         <SearchHome/>
             <div className="max-w-7xl ax-w-screen-xl mx-auto px-4">
                 <h1 className='pt-10 mb-10 font-bold dark:text-white text-2xl'>{Title}</h1>
                 <div className="flex gap-x-4 gap-y-10 flex-wrap px-4 justify-center">
                     {data?.map((movie) => {
                         let { title, id, overview, vote_average, poster_path } = movie
                         return (
                             <Link key={id} to={`/detail/${id}`}>
                                 <div className="bg-gray-100 dark:bg-gray-950  flex-col h-full max-w-2xs rounded-2xl shadow-md overflow-hidden shrink-0 hover:scale-105 transition duration-300">
 
                                     <img className='w-full h-96 object-cover'
                                         src={
                                             poster_path
                                                 ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                                 : "/no-image.jpg"
                                         }
                                         alt={title}
                                     />
 
                                     <div className="p-2 text-center flex flex-col grow">
 
 
                                         <h5 className="mt-3 mb-3 text-xl dark:text-white font-semibold tracking-tight text-heading">{title}</h5>
                                         <p className='line-clamp-2 dark:text-white grow'>{overview}</p>
 
                                         <span className="mt-auto inline-flex items-center justify-center gap-1 dark:text-white text-sm">
                                             <i className="fa-solid fa-star text-amber-200"></i>
                                             {vote_average}
                                         </span>
                                     </div>
                                 </div>
                             </Link>
                         )
                     })}
 
                 </div>
 
             </div>
 
 
         </>
     )
}
