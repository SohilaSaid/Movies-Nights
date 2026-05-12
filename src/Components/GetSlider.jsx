import React from 'react'
import Slider from 'react-slick';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function GetSlider({ apiURL, Title , linkTo}) {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
    };

    let [data, setData] = useState([])


    useEffect(() => {
        axios.get(apiURL)
            .then((res) => {
                setData(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [apiURL])

    return (
        <>
            <div className="max-w-7xl mx-auto px-4">

                <Link to={linkTo} className="inline-block pt-10 mb-8 font-bold dark:text-white text-2xl">
                    {Title}
                </Link>
                <Slider {...settings}>
                    {data?.map((movie) => (
                        <Link key={movie} to={`detail/${movie.id}`}>
                            <div className="px-2">
                                <div className="bg-gray-100 dark:bg-gray-950 rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300 ">
                                    <img
                                        src={
                                            movie.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                                : "/no-image.jpg"
                                        }
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>

            </div>
        </>
    )
}
