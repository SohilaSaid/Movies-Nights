import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function DetailsMovie() {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [showTrailer, setShowTrailer] = useState(false)

  function getDetails() {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=71e3f84d203b83978ef6fc1c1b7ab47b`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err))
  }

  function getTrailer() {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=71e3f84d203b83978ef6fc1c1b7ab47b`)
      .then((res) => {
        const trailerVideo = res.data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        )
        setTrailer(trailerVideo)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getDetails()
    getTrailer()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [id])

  return (
    <>
      <div className='py-16'>
        <div className="relative h-[60vh] w-full ">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-10 left-10">
            <h1 className="text-4xl font-bold text-white">{movie?.title}</h1>
            <p className="text-sm mt-2 text-white">
              <i className="fa-solid fa-star text-amber-300"></i> {movie?.vote_average} / 10
            </p>
          </div>
        </div>

        {/* 📄 CONTENT */}
        <div className="max-w-6xl mx-auto px-4 py-10 
flex flex-col md:flex-row gap-10 
items-center md:items-start">

          {/* poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            className="w-72 rounded-xl shadow-lg mx-auto md:mx-0"
          />

          {/* info */}
          <div>

            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Overview</h2>
            <div className="flex gap-2 flex-wrap">
              {movie?.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className=" leading-relaxed mb-6 dark:text-white">
              {movie?.overview}
            </p>


            <div className="grid grid-cols-2 gap-4 text-sm">

              <p className='dark:text-white'><span className="font-bold ">Release:</span> {movie?.release_date}</p>
              <p className='dark:text-white'><span className="font-bold">Runtime:</span> {movie?.runtime} min</p>
              <p className='dark:text-white'><span className="font-bold">Status:</span> {movie?.status}</p>
              <p className='dark:text-white'><span className="font-bold">Rating:</span> {movie?.vote_average}</p>

            </div>
            <div className="text-white">

              {/* 🎬 زرار التريلر */}
              {trailer && (
                <div className="max-w-6xl mx-auto px-4 mt-10">
                  <button
                    onClick={() => setShowTrailer(true)} // ✅ فتح البوب اب
                    className="bg-fuchsia-400 hover:bg-fuchsia-500 px-6 py-3 rounded-lg flex items-center gap-2"
                  >
                    🎬 Watch Trailer
                  </button>
                </div>
              )}

              {/* 🎥 POPUP */}
              {showTrailer && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

                  {/* ❌ زرار قفل */}
                  <button
                    onClick={() => setShowTrailer(false)} // ✅ قفل
                    className="absolute top-5 right-5 text-white text-3xl"
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>

                  {/* 🎬 الفيديو */}
                  <div className="w-[90%] md:w-200 h-100">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                      allowFullScreen
                    ></iframe>
                  </div>

                </div>
              )}

            </div>




          </div>
        </div>
      </div>
    </>
  )
}