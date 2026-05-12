
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, Links } from 'react-router-dom'

export default function Footer() {

    let [genres, setGenres] = useState([])



    function getGenre() {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=71e3f84d203b83978ef6fc1c1b7ab47b")
            .then((res) => { setGenres(res.data.genres) })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        getGenre()
    }, []);

    return (
        <>
            <footer className="bg-gray-100 dark:bg-gray-950 mx-auto px-4 dark:text-white mt-10">
                <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">

                        <div className="mb-6 md:mb-0">
                            <Link
                                to=""
                                className="flex items-center space-x-3 rtl:space-x-reverse"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                <i className="fa-solid fa-tv  fa-2x text-fuchsia-400"></i>
                                <span className="self-center text-xl text-heading font-semibold whitespace-nowrap dark:text-white">
                                    Movie Night
                                </span>
                            </Link>
                            <div>
                                <ul className=" p-6">
                                    <li className="mb-4">
                                        <Link to="" className="hover:underline hover:text-fuchsia-400" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About Us</Link>
                                    </li >
                                    <li className="mb-4">
                                        <Link to="" className="hover:underline hover:text-fuchsia-400" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="" className="hover:underline hover:text-fuchsia-400" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >Privacy Policy</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="" className="hover:underline hover:text-fuchsia-400" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Terms of Use</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">EXPLORE</h2>
                                <ul >
                                    <li className="mb-2">
                                        <Link to="/movies" className="hover:underline hover:text-fuchsia-400">Movies</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/tV-Shows" className="hover:underline hover:text-fuchsia-400">TV Shows</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/top-movie" className="hover:underline hover:text-fuchsia-400">Top Rate Movies</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/top-tv" className="hover:underline hover:text-fuchsia-400">Top Rate TV Shows</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/trending/moviesTrending" className="hover:underline hover:text-fuchsia-400">Trending Movies</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/trending/tvTrending" className="hover:underline hover:text-fuchsia-400">Trending TV Shows</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/coming-soon" className="hover:underline hover:text-fuchsia-400">Coming Soon</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/ontheairTv" className="hover:underline hover:text-fuchsia-400">On Air Now</Link>
                                    </li>
                                </ul>
                            </div>


                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Categories</h2>
                                <ul className="grid grid-cols-2 gap-2">

                                    {genres?.map((genre) => {
                                        return (
                                            <li key={genre.id}>
                                                <Link
                                                    to={`/genre/${genre.id}/${genre.name}`}
                                                    className="hover:underline hover:text-fuchsia-400"
                                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                                >
                                                    {genre.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Follow us</h2>
                                <ul>
                                    <li className="mb-4">
                                        <Link to="" className="hover:underline hover:text-fuchsia-400">Github</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="hover:underline hover:text-fuchsia-400">Discord</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5 border-default sm:mx-auto lg:my-5" />

                    <div className="sm:flex sm:items-center sm:justify-between">
                        <p className="text-sm text-body sm:text-center">© 2026 ™. All Rights Reserved.</p>

                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <Link to="#" className=" hover:text-fuchsia-400 px-2">
                                <i className="fa-brands fa-facebook" />
                            </Link>
                            <Link to="#" className=" hover:text-fuchsia-400 px-2">
                                <i className="fa-brands fa-x-twitter" />
                            </Link>
                            <Link to="#" className=" hover:text-fuchsia-400 px-2">
                                <i className="fa-brands fa-github" />
                            </Link>
                            <Link to="#" className=" hover:text-fuchsia-400 px-2">
                                <i className="fa-solid fa-globe" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}
