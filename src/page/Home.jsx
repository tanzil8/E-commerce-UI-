import React from 'react'
import Navbar from '../component/Navbar'
import SidebarWithbanner from '../component/Hero'
import FlashProduct from '../component/flashProduct'
import ShopCategories from '../component/categories'

const Home = () => {
  return (
   <>
   <div className='bg-gray-100'>
   <Navbar/>
   <SidebarWithbanner/>
  <FlashProduct/>
  <ShopCategories/>
  </div>
   </>
  )
}

export default Home