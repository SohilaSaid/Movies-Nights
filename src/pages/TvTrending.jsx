import React from 'react'
import DataTrending from './DataTrending'

export default function MoviesTrending() {
  return (
    <DataTrending apiURL="https://api.themoviedb.org/3/trending/tv/day?api_key=71e3f84d203b83978ef6fc1c1b7ab47b"
      Title={
        <span>
          <i className="fa-solid fa-bolt text-purple-500"></i>{" "}
          TV Trending
        </span>
      }
    />
  )
}
