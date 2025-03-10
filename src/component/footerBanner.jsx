"use client"

import { motion } from "framer-motion"

const ImgLayout = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="mb-12  font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
 Category
</h1> 
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[32rem]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left column with 2 rows */}
        <div className="md:col-span-2 grid grid-rows-2 gap-4 h-46">
          {/* 2nd img left top height 48 */}
          <motion.div className="relative w-full h-46 rounded-xl overflow-hidden group" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Nature image"
              className="w-full h-46 object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-center bg-white/75 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div>
                  <h5 className="text-xl font-medium text-slate-800">Sara Lamalo</h5>
                  <p className="mt-1 text-slate-600">20 July 2022</p>
                </div>
                <h5 className="text-xl font-medium text-slate-800">Growth</h5>
              </div>
            </div>
          </motion.div>

          {/* Bottom row with 2 columns */}
          <div className="grid grid-cols-2 mt-25 gap-4 h-46">
            {/* 3rd img left bottom left, half width, height 48 */}
            <motion.div className="relative w-full h-46 rounded-xl overflow-hidden group" variants={itemVariants}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Nature image"
                className="w-full h-46 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-between items-center bg-white/75 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div>
                    <h5 className="text-base font-medium text-slate-800">Sara Lamalo</h5>
                    <p className="mt-1 text-xs text-slate-600">20 July 2022</p>
                  </div>
                  <h5 className="text-base font-medium text-slate-800">Growth</h5>
                </div>
              </div>
            </motion.div>

            {/* 4th img left bottom right, half width, height 48 */}
            <motion.div className="relative w-full h-46 rounded-xl overflow-hidden group" variants={itemVariants}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Nature image"
                className="w-full h-46 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-between items-center bg-white/75 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div>
                    <h5 className="text-base font-medium text-slate-800">Sara Lamalo</h5>
                    <p className="mt-1 text-xs text-slate-600">20 July 2022</p>
                  </div>
                  <h5 className="text-base font-medium text-slate-800">Growth</h5>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 1st img right height 96 (full height) */}
        <motion.div className="relative w-full h-96 rounded-xl overflow-hidden group" variants={itemVariants}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Nature image"
            className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex justify-between items-center bg-white/75 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div>
                <h5 className="text-xl font-medium text-slate-800">Sara Lamalo</h5>
                <p className="mt-1 text-slate-600">20 July 2022</p>
              </div>
              <h5 className="text-xl font-medium text-slate-800">Growth</h5>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ImgLayout

