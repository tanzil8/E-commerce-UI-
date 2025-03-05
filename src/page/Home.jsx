import React from 'react'
import Navbar from '../component/Navbar'
import SidebarWithbanner from '../component/Hero'
import FlashProduct from '../component/flashProduct'
import ShopCategories from '../component/categories'
import BestSeeling from '../component/bestSeeling'
import Banner from '../component/secBanner'
import Product from '../component/product'
import ImageBanner from '../component/footerBanner'
import Footer from '../component/footer'

const Home = () => {
  return (
   <>
   <div className='bg-gray-100'>
   <Navbar/>
   <SidebarWithbanner/>
  <FlashProduct/>
  <ShopCategories/>
  <BestSeeling/>
  <Banner/>
  <Product/>
  <ImageBanner/>
   <Footer/>

  </div>
   </>
  )
}

export default Home