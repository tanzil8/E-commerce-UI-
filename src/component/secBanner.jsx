import React from 'react'

const Banner = () => {
  return (
    <div><div className="relative bg-gray-100 h-96 text-white overflow-hidden ">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Background Image"
        className="object-cover object-center w-full h-96 p-4"
      />
      <div className="absolute inset-0  opacity-50" />
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center ">
     
      <h1 className="m-3  font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
      Discover amazing features and services <br /> that await you.
</h1>
      <a
        href="#"
        className="bg-black text-white hover:bg-gray-950 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        Get Started
      </a>
    </div>
  </div>
  </div>
  )
}

export default Banner

