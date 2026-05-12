import React from 'react'
import GetData from './GetData'

export default function ComingSoon() {
    return (
        <GetData apiURL="https://api.themoviedb.org/3/tv/on_the_air?api_key=71e3f84d203b83978ef6fc1c1b7ab47b&page"
            Title={
                <span>
                    <i class="fa-solid fa-circle-play text-blue-600"></i> {" "}
                    On Air Now
                </span>
            }
        />
    )
}

