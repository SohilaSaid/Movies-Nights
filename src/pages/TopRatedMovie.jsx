import React from 'react'
import GetData from './GetData'

export default function ComingSoon() {
    return (
        <GetData apiURL="https://api.themoviedb.org/3/movie/top_rated?api_key=71e3f84d203b83978ef6fc1c1b7ab47b"
            Title={
                <span>
                    <i className="fa-solid fa-star text-yellow-400"></i> {" "}
                    Top Rated Movies
                </span>
            }
        />
    )
}


