import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchHome from "../Components/SearchHome";

export default function GenrePage() {
  const { id, name } = useParams();
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1)


  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;


  const [page, setPage] = useState(pageFromUrl);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setSearchParams({ page: newPage });
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=71e3f84d203b83978ef6fc1c1b7ab47b&with_genres=${id}&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
      .catch((err) => console.log(err));
  }, [id, page]);

  return (
    <>
      <SearchHome />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className='pt-10 mb-10 font-bold dark:text-white text-2xl'><i class="fa-regular fa-circle-play text-red-600"></i> {name} </h1>

        <div className="flex gap-x-4 gap-y-10 flex-wrap px-4 justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {movies.map((movie) => {
              return (
                <Link key={movie.id} to={`/detail/${movie.id}`}>
                  <div className="bg-gray-100 dark:bg-gray-950 max-w-2xs flex-col h-full rounded-2xl shadow-md overflow-hidden shrink-0 hover:scale-105 transition duration-300">



                    <img className='w-full h-96 object-cover'
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "/no-image.jpg"
                      }
                      alt={movie.name}
                    />

                    <div className="p-2 text-center flex flex-col grow">


                      <h5 className="mt-3 mb-3 text-xl dark:text-white font-semibold tracking-tight text-heading">{movie.title}</h5>
                      <p className='line-clamp-2 dark:text-white grow'>{movie.overview}</p>

                      <span className="mt-auto inline-flex items-center justify-center gap-1 dark:text-white text-sm">
                        <i className="fa-solid fa-star text-amber-200"></i>
                        {movie.vote_average}
                      </span>
                    </div>

                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example mx-auto" className='py-8 '>
        <ul className="flex justify-center items-center space-x-px text-lg px-4 max-w-7xl mx-auto dark:text-white rounded-lg py-2 ">
          <li>
            <button className="flex items-center justify-center text-body box-border border border-e-0 font-medium text-sm px-3 h-9" disabled={page === 1} onClick={() => handlePageChange(page - 1)}><i className="fa-solid fa-angle-left"></i> Previous</button>
          </li>
          <li>
            <button className='flex items-center justify-center text-body box-border border font-medium text-sm px-3 h-9'>{page}</button>
          </li>
          <li>
            <button className="flex items-center justify-center text-body box-border border border-s-0 font-medium text-sm px-3 h-9" disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}>Next <i class="fa-solid fa-angle-right"></i></button>
          </li>
        </ul>
      </nav>
    </>
  );
}