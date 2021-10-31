import Layout from '../components/layout'
<<<<<<< HEAD
import  styled from 'styled-components'
import Subscribe from '../components/home/subscribe'
=======

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


>>>>>>> f2b38569f26d3634186a884c17d7a3599d7a49b9

export default function Home() {
  return (
    <Layout title = "Home Page">
<<<<<<< HEAD
      <ModiContainer>
        Like this random styled-component, we have to render every page
      </ModiContainer>
<Subscribe />
=======
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
>>>>>>> f2b38569f26d3634186a884c17d7a3599d7a49b9

      {/* USE LAYOUT IN EVERYPAGE, HAVING PROPS LIKE    title, description, tagname  just as above*/}
      {/* you can leave passing props, as Layout contains some default value set in ../components/Layout */}
    </Layout>
  )
}
