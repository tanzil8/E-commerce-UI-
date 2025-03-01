const SidebarWithbanner = () => {
    return (
      <>
        <div className="flex h-96 bg-gray-100">
          {/* Mobile menu hamburger button */}
          <label
            htmlFor="menu-toggle"
            className="md:hidden fixed top-24 left-4 z-20 cursor-pointer p-2 bg-black rounded-md"
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
          <div className="hidden peer-checked:flex md:flex flex-col w-64  transition-all duration-300 ease-in-out fixed md:static h-96 z-10">
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-200">
                <a href="#" className="flex items-center px-4 py-2 text-black hover:bg-gray-700 group">
                 
                
                </a>
                {/* Login */}
                <a href="#" className="flex items-center px-4 py-2 text-black hover:bg-gray-700 group">
                 
                  Login
                </a>
                {/* Messages with subitems */}
                <div className="mb-2 relative group">
                  <input type="checkbox" id="messages-toggle" className="hidden peer" />
                  <label
                    htmlFor="messages-toggle"
                    className="flex items-center px-12 py-2 mt-2 text-black hover:bg-gray-700 cursor-pointer w-full"
                  >
                    Messages
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
                  <div className="hidden peer-checked:flex flex-col bg-gray-200 text-gray-800 mt-1 transition-all duration-300">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      Subitem 1
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      Subitem 2
                    </a>
                  </div>
                </div>
                {/* Favourites */}
                <a href="#" className="flex items-center px-4 py-2 mt-2 text-black hover:bg-gray-700 group">
                 
                  Favourites
                </a>
                {/* Settings with subitems */}
                <div className="mb-2 relative group">
                  <input type="checkbox" id="settings-toggle" className="hidden peer" />
                  <label
                    htmlFor="settings-toggle"
                    className="flex items-center px-12 py-2 mt-2 text-black hover:bg-gray-700 cursor-pointer w-full"
                  >
                    Settings
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
                  <div className="hidden peer-checked:flex flex-col bg-gray-200 text-gray-800 mt-1 transition-all duration-300">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      Subitem 1
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      Subitem 2
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* Main content */}
          <div className="flex flex-col flex-1 overflow-y-auto md:ml-0 ml-0 pt-14 md:pt-0">
            <div className="p-4">
              <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
              <p className="mt-2 text-gray-600">This is an example dashboard using Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default SidebarWithbanner
  
  