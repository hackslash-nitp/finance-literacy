import Layout from '../components/layout'

import Navbar from '../components/home/Navbar/navbar'
import GetNow from '../components/home/GetNow/getNow'
import GetNow2 from '../components/home/GetNow/getNow2'
import BuyNow from '../components/home/BuyNow/buyNow'
import BuyNow2 from '../components/home/BuyNow/buyNow2'
import Pricing from '../components/home/Pricing/pricing'
import Testimonial from '../components/home/Testimonial/testimonial'
import KnowMore from '../components/home/KnowMore/knowMore'
import Subscribe from '../components/home/Subscribe/subscribe'
import Subscribe2 from '../components/home/Subscribe/subscribe2'



export default function Home() {
  return (
    <Layout title = "Home Page">
      <Navbar/>
      <GetNow/>
      <GetNow2/>
      <BuyNow/>
      <BuyNow2/>
      <Pricing/>
      <Testimonial/>
      <KnowMore/>
      <Subscribe/>
      <Subscribe2/>

      {/* USE LAYOUT IN EVERYPAGE, HAVING PROPS LIKE    title, description, tagname  just as above*/}
      {/* you can leave passing props, as Layout contains some default value set in ../components/Layout */}
    </Layout>
  )
}