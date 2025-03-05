const ImageBanner = () => {
    return (
        <div className="">
      <section className="container mx-auto px-4 py-12  ">
        <h1 className="mb-12  font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
 Category
</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px] md:h-[500px]">
          {/* Left large image */}
          <div className="relative h-full rounded-lg ">
            <img
              src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Featured product"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h3 className="text-white text-xl font-semibold">Summer Collection</h3>
              <p className="text-white/80 mt-1">Explore our new arrivals</p>
            </div>
          </div>
  
          {/* Right two half images */}
          <div className="grid grid-rows-2 gap-4 h-full">
            {/* Top right image */}
            <div className="relative h-full rounded-lg ">
              <img
                src="https://media.istockphoto.com/id/532278616/photo/perfect-match.jpg?s=612x612&w=0&k=20&c=mdMGXG-gb2ByZV2O0zMhI4C6oDGGkIOmKk_cvTCvDZI="
                alt="Men's collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-white text-lg font-semibold">Men's Wear</h3>
                <p className="text-white/80 text-sm mt-1">Premium quality</p>
              </div>
            </div>
  
            {/* Bottom right image */}
            <div className="relative h-full rounded-lg ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLLTBbrBcYYkglGYPti86DY0qk05pGmgSmQ&s"
                alt="Women's collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-white text-lg font-semibold">Women's Fashion</h3>
                <p className="text-white/80 text-sm mt-1">New styles added</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
  
  export default ImageBanner
  
  