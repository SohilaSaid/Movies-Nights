import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function SearchHome() {

  const [query, setQuery] = useState("")
  const [results, setResults] = useState([]);

  function getSearch() {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=71e3f84d203b83978ef6fc1c1b7ab47b&query=${query}${query}`)
      .then((res) => { setResults(res.data.results) }
      )
      .catch((err) => { console.log(err) })
  }


  useEffect(() => {
    if (query !== "") {
      getSearch();
    }
  }, [query]);
  return (
    <>
      <div className='pt-28 max-w-7xl mx-auto px-4 '>
        <div className='search-orb-container max-w-7xl mx-auto px-4'>
          <div className="gooey-background-layer">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <div className="blob-bridge" />
          </div>
          <div className="input-overlay">
            <div className="search-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input type="text" className="modern-input" placeholder="Find something to watch..."
              value={query}
              onChange={(e) => setQuery(e.target.value)} />

            {query && results.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2 max-h-96 overflow-y-auto z-50">

                {results.map((item) => (
                  <Link
                    key={item.id}
                    to={`/detail/${item.id}`}   
                    className="flex items-center gap-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                      className="w-10 h-14 object-cover rounded"
                      alt=""
                    />

                    
                    <p className="text-sm dark:text-white">
                      {item.title || item.name}
                    </p>
                  </Link>
                ))}

              </div>
            )}


            <div className="focus-indicator" />
          </div>
          <svg className="gooey-svg-filter" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="enhanced-goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation={12} result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>


    </>
  )
}
