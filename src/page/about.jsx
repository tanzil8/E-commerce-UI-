import Footer from "../component/footer";
import Navbar from "../component/Navbar";

export default function  About ()  {

    return(

        <>
       <Navbar/>
       <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20  dark:bg-gray-900">
    <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
      <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
        <div className="relative">
          <img
            className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WZkIWeU397lyyJIFRw0Sk9Uc78cCAF9IyA&s"
            alt="Side Image"
          />
          <img
            className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
            src="https://rukminim2.flixcart.com/image/750/900/xif0q/shirt/w/b/c/xxl-formal-shirt-metronaut-original-imahfccfkfdgkvgw.jpeg?q=20&crop=false"
            alt="Side Image 2"
          />
          <img
            className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
            src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg"
            alt="Side Image 3"
          />
          <img
            className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-red-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMURv1IU2nekdG9x8dKl3TUmuHPoyUaryz1w&s"
            alt="About us"
          />
        </div>
        <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-red-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
          <h2 className="text-4xl text-center text-red-800 dark:text-red-800 font-bold px-4 py-1 md:mt-0 mt-10">
            About Us
          </h2>
          <p className="md:text-3xl text-2xl text-center text-black dark:text-gray-200 font-bold my-5">
            We are Petal Haven S.C.
          </p>
          <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
            At Petal Haven, we believe in the transformative power of flowers.
            Our blooms are not just arrangements; they are expressions of
            beauty, joy, and emotion. From elegant bouquets to enchanting floral
            designs, we curate every creation with precision and care. Whether
            it's a celebration, a gesture of love, or a moment of solace, Petal
            Haven's exquisite flowers speak a language of their own, bringing
            nature's beauty to your doorstep. Experience the enchantment of
            Petal Haven and let flowers tell your story.
          </p>
          <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-red-800 rounded-sm lg:text-xl text-lg text-white font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>


  <section className="text-gray-700 body-font">

  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
              className="w-32 mb-3 "
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
            Latest Milling Machinery
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
            Reasonable Rates
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
            Time Efficiency
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
            Expertise in Industry
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

        <Footer/>
        </>
    )


}


