import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LayOut from './LayOut'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Trending from './pages/Trending'
import TVShows from './pages/TVShows'
import TvTrending from './pages/TvTrending'
import MoviesTrending from './pages/MoviesTrending'
import ComingSoon from './pages/ComingSoon'
import TopRatedTV from './pages/TopRatedTV'
import TopRatedMovie from './pages/TopRatedMovie'
import OnTheAirTv from './pages/OnTheAirTv'
import DetailsMovie from './pages/DetailsMovie'
import GenrePage from './pages/GenrePage'


function App() {

  const route = createBrowserRouter([
    {path:"", 
      element:<LayOut/>,
      children:[
        {index:true,element:<Home/>},
        {path:"movies",element:<Movie/>},
        {path:"tV-Shows",element:<TVShows/>},
        {path:"coming-soon",element:<ComingSoon/>},
        {path:"top-tv",element:<TopRatedTV/>},
        {path:"top-movie",element:<TopRatedMovie/>},
        {path:"ontheairTv",element:<OnTheAirTv/>},
        {path:"trending",element:<Trending/>,
          children:[
            {path:"moviesTrending",element:<MoviesTrending/>},
            {path:"tvTrending",element:<TvTrending/>}
          ]
        },
        {path:"/detail/:id",element:<DetailsMovie/>},
        { path: "genre/:id/:name?", element: <GenrePage/> }

      ]
    }
  ])

  return (
    <RouterProvider router={route}/>
    
  )
}

export default App
