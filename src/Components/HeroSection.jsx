import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function HeroSection() {

    const [upcomingMovie, setUpcomingMovie] = useState(null)

    function getData() {
        axios
            .get("https://api.themoviedb.org/3/movie/upcoming?api_key=71e3f84d203b83978ef6fc1c1b7ab47b")
            .then((res) => {
                setUpcomingMovie(res.data.results[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>

            <Link key={upcomingMovie?.id} to={`/detail/${upcomingMovie?.id}`}>
                <div className='max-w-7xl mx-auto px-4 mt-10'>

                    <div className="rounded-3xl overflow-hidden shadow-lg bg-cover bg-center bg-no-repeat relative" style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${upcomingMovie?.backdrop_path})`
                    }}>

                        <div className="flex flex-col items-center p-6 md:flex-row gap-6">


                            <img
                                className="object-cover w-full md:w-72 rounded-2xl"
                                src={`https://image.tmdb.org/t/p/w500${upcomingMovie?.poster_path}`}
                                alt={upcomingMovie?.title}
                            />


                            <div className="flex flex-col justify-center">

                                <h1 className="mb-4 text-4xl md:text-6xl font-bold text-white">
                                    {upcomingMovie?.title}
                                </h1>

                                <p className="mb-6 text-white line-clamp-4">
                                    {upcomingMovie?.overview}
                                </p>

                                <div className="flex items-center gap-4">


                                    <span className="text-yellow-400 font-semibold">
                                        <i class="fa-solid fa-star"></i> {upcomingMovie?.vote_average}
                                    </span>


                                    <span className="text-white">
                                        {upcomingMovie?.release_date}
                                    </span>

                                </div>


                                <button
                                    className="mt-6 w-fit bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-3 rounded-xl transition"
                                >
                                    Watch Now
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}
