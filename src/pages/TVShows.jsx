import React from 'react'
import GetData from './GetData'

export default function ComingSoon() {
    return (
        <GetData apiURL="https://api.themoviedb.org/3/tv/popular?api_key=71e3f84d203b83978ef6fc1c1b7ab47b&page"
            Title={
                <span>
                    <i className="fa-solid fa-tv text-green-500"></i>{" "}
                    Popular Tv Shows
                </span>
            }
            />
    )
}
