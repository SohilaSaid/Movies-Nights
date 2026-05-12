
import React from 'react'
import GetSlider from './GetSlider';

export default function UpcomingMoviesSlider() {
  return (

    <GetSlider apiURL="https://api.themoviedb.org/3/tv/popular?api_key=71e3f84d203b83978ef6fc1c1b7ab47b"
      Title={
        <span>
          <i className="fa-solid fa-tv text-green-500"></i>{" "}
          Popular TV Shows
        </span>
      }
      linkTo="tV-Shows"
    />
  )
}
