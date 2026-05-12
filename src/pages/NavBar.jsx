import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  let [darkMode, SetDarkMode] = useState(false);

  let [menuOpen, setMenuOpen] = useState(false);

  let [dropdownOpen, setDropdownOpen] = useState(false);

  let [genres, setGenres] = useState([])
  let [openGenre, setOpenGenre] = useState(false)


  function getGenre() {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=71e3f84d203b83978ef6fc1c1b7ab47b")
      .then((res) => { setGenres(res.data.genres) })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      SetDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    getGenre()
  }, []);

  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-950 fixed w-full z-20 top-0 inset-s-0  border-default">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="fa-solid fa-tv  fa-2x text-fuchsia-400"></i>
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap dark:text-white">
              Movie Night
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="checkbox-wrapper-5 pt-4">
              <div className="check">
                <input
                  id="check-5"
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => SetDarkMode(!darkMode)}
                />
                <label htmlFor="check-5" />
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center pt-4 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft text-fuchsia-500 hover:text-heading "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>



          <div
            className={`w-full md:flex md:w-auto md:order-1 ${menuOpen ? "block" : "hidden md:block"
              }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <NavLink
                  to=""
                  className="block py-2 px-3 bg-brand rounded-sm md:bg-transparent md:text-fg-brand dark:text-white md:p-0 hover:text-fuchsia-400"
                  aria-current="page"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="movies"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-fuchsia-400  dark:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="tV-Shows"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-fuchsia-400 dark:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  TV Shows
                </NavLink>
              </li>


              <li className="relative hover:bg-transparent dark:text-white ">

                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="dark:text-white hover:text-fuchsia-400 flex items-center justify-between w-full "
                >
                  Trending <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                </button>



                <div
                  className={`absolute z-10 ${dropdownOpen ? "block" : "hidden"} bg-gray-100 dark:bg-gray-950 rounded-base shadow-lg w-44`}
                >
                  <ul className="p-2 text-sm text-body font-medium">
                    <li>
                      <NavLink
                        to="trending/moviesTrending"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                        className="inline-flex items-center hover:text-fuchsia-400 w-full p-2 hover:bg-neutral-tertiary-medium rounded"
                      >
                        Trending Movies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="trending/tvTrending"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                        className="inline-flex items-center hover:text-fuchsia-400 w-full p-2 hover:bg-neutral-tertiary-medium rounded"
                      >
                        Trending T.V
                      </NavLink>
                    </li>
                  </ul>
                </div>

              </li>
              <li className="relative hover:bg-transparent dark:text-white ">
                <button
                  onClick={() => setOpenGenre(!openGenre)}
                  className="dark:text-white hover:text-fuchsia-400 flex items-center justify-between w-full "
                >
                  Categories <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                </button>

                <div
                  className={`absolute z-10 ${openGenre ? "block" : "hidden"} bg-gray-100 dark:bg-gray-950 rounded-base shadow-lg w-44`}
                >
                  <ul className="p-2 text-sm text-body font-medium">
                    <li>

                      {genres?.map((genre) => (
                        <NavLink
                          key={genre.id}
                          to={`/genre/${genre.id}/${genre.name}`}
                          onClick={() => {
                            setMenuOpen(false);
                            setOpenGenre(false);
                          }}
                          className="inline-flex items-center hover:text-fuchsia-400 w-full p-2 hover:bg-neutral-tertiary-medium rounded"
                        >
                          {genre.name}
                        </NavLink>
                      ))}

                    </li>
                  </ul>

                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
