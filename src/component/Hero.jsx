import { useState, useEffect } from "react";


const SidebarWithbanner = () => {
  const slides = [
    "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
    "https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg",
    "https://www.shutterstock.com/image-photo/fashion-stylish-luxury-clothes-display-600nw-1360347566.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
    return (
      <>
      
        <div className="flex h-96  bg-gray-100">
          {/* Mobile menu hamburger button */}
          <label
            htmlFor="menu-toggle"
            className="md:hidden fixed top-30 left-4 z-20 cursor-pointer p-2 bg-black rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          {/* Mobile menu toggle button */}
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          {/* Sidebar */}
          <div className="hidden peer-checked:flex md:flex flex-col w-72  transition-all duration-300 ease-in-out fixed md:static h-96 z-10">
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-100 border-r-1 border-gray-300 ">
              
                <div className=" mt-9 relative group">
                  <input type="checkbox" id="messages-toggle" className="hidden peer" />
                  <label
                    htmlFor="messages-toggle"
                    className="flex items-center px-12 py-2 mt-2 text-black hover:bg-gray-200 cursor-pointer w-full"
                  >
                    Woman's Fashion
                  </label>
                  {/* SVG Icons op hetzelfde niveau als input */}
                  {/* <div class="absolute left-4 top-2 transform #dis-translate-y-1/2 flex items-center text-black"> */}
                
                  {/* </div> */}
                  {/* Arrow Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-auto transition-transform  peer-checked:rotate-180 absolute right-4 top-3 transform #dis--translate-y-1/2 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="hidden peer-checked:flex flex-col bg-gray-100 text-gray-800 mt-1 transition-all duration-300">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                     Cloth
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                     Shose
                    </a>
                  </div>
                </div>
                <div className=" relative group">
                  <input type="checkbox" id="settings-toggle" className="hidden peer" />
                  <label
                    htmlFor="settings-toggle"
                    className="flex items-center px-12 py-2 mt-2 text-black hover:bg-gray-200 cursor-pointer w-full"
                  >
                  Man's Fashion
                  </label>
                  {/* SVG Icons op hetzelfde niveau als input */}
                 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-auto transition-transform transform peer-checked:rotate-180 absolute right-4 top-3 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Subitems */}
                  <div className="hidden peer-checked:flex flex-col bg-gray-100 text-gray-800 mt-1 transition-all duration-300">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                   Pent
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                T-shirt
                    </a>
                  </div>
                </div>
                {/* Login */}
                <a href="#" className="flex items-center  ml-8 px-4 py-2 text-black hover:bg-gray-200 group">
                 
              Electronics
                </a>
                <a href="#" className="flex items-center  ml-8 px-4 py-2 text-black hover:bg-gray-200 group">
                 
               Home & Lifestyle
                </a>
                <a href="#" className="flex items-center  ml-8 px-4 py-2 text-black hover:bg-gray-200 group">
                 
              Sports & Outdoor   
                </a>
                <a href="#" className="flex items-center  ml-8 px-4 py-2 text-black hover:bg-gray-200 group">
                 
                  Baby & Toys
                </a>
                <a href="#" className="flex items-center  ml-8 px-4 py-2 text-black hover:bg-gray-200 group">
                 
                 Health & Beauty
                </a>
                {/* Messages with subitems */}
                {/* Favourites */}
              
                {/* Settings with subitems */}
              </nav>
            </div>
          </div>
          {/* Main content */}
          <div className="relative rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto m-5">
      {/* Image Display */}
      <div className="relative h-70 md:h-96 ">
        <img
          src={slides[currentIndex]}
          className="object-cover w-full h-full transition-opacity duration-700 ease-in-out"
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {/* Indicators */}
      <div className="flex absolute bottom-5 left-1/2 -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-gray-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
      >
        <svg
          className="w-5 h-5 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
      >
        <svg
          className="w-5 h-5 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
        </div>
      </>
    )
  }
  
  export default SidebarWithbanner
  
  