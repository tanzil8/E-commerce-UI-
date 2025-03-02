"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* component */}
      <div className="flex flex-wrap place-items-center border-b-1 border-gray-300 ">
        <section className="relative mx-auto w-full">
          {/* navbar */}
          <nav className="flex justify-between bg-gray-100 text-black w-full">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                <img class="h-15" src="https://play-lh.googleusercontent.com/MOFZ1zvq6Yg45eeBHTDtNIdP2yUA9QAV_sLjY034QJgZN4cko8fW-cnQdvZPg0vrE9g7=w600-h300-pc0xffffff-pd" alt="logo"/>
              
              </a>
              {/* Nav Links */}
              <ul className="hidden xl:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                <a className="relative after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Home
                    </a>
                </li>
                <li>
                  <a className="relative after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Catagory
                  </a>
                </li>
                <li>
                  <a className="relative after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Collections
                  </a>
                </li>
                <li>

                  <a className="relative after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* Header Icons */}
              <div className="hidden xl:flex space-x-5 items-center">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-200 text-black rounded-sm py-2 px-4 pr-8 focus:outline-none focus:ring-1 focus:ring-black text-sm"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
                <a className="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                {/* Sign In / Register */}
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Responsive navbar */}
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <button className="navbar-burger self-center mr-12 xl:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="xl:hidden bg-gray-100 text-black w-full">
              <ul className="flex flex-col px-4 py-4 font-semibold font-heading space-y-4">
                <li>
                  <a className="relative after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="relative after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Catagory
                  </a>
                </li>
                <li>
                  <a className="relative after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Collections
                  </a>
                </li>
                <li>
                  <a className="relative after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="pt-4 border-t border-gray-700">
                  {/* Search Input for Mobile */}
                  <div className="relative mb-4">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-gray-200 text-black rounded-sm py-2 px-4 pr-8 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex space-x-5 items-center">
                    <a className="hover:text-gray-200" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                    <a className="flex items-center hover:text-gray-200" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </section>
      </div>

      {/* Twitter follow button */}
      {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
              alt="Twitter logo"
            />
          </a>
        </div>
      </div> */}
    </>
  )
}

export default Navbar

