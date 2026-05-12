import React from 'react'
import MoviesTrendingSlider from '../Components/MoviesTrendingSlider'
import TvTrendingSlider from '../Components/TvTrendingSlider'
import PopularMoviesSlider from '../Components/PopularMoviesSlider'
import PopularTVShowsSlider from '../Components/PopularTVShowsSlider'
import TopRatedMoviesSlider from '../Components/TopRatedMoviesSlider'
import TopRatedTVShowsSlider from '../Components/TopRatedTVShowsSlider'
import SearchHome from '../Components/SearchHome'
import OnTheAirSlider from '../Components/OnTheAirSlider'
import UpcomingMoviesSlider from '../Components/UpcomingMoviesSlider'
import HeroSection from '../Components/HeroSection'

export default function Home() {
  return (
    <>
      <SearchHome/>
      <HeroSection/>
      <UpcomingMoviesSlider/>
      <OnTheAirSlider/>
      <TopRatedMoviesSlider />
      <TopRatedTVShowsSlider />
      <MoviesTrendingSlider />
      <TvTrendingSlider />
      <PopularMoviesSlider />
      <PopularTVShowsSlider />
    </>
  )
}
