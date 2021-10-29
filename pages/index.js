import Layout from '../components/layout'
import  styled from 'styled-components'
import Pricing from '../components/home/pricing'
import BuyNow from '../components/home/buyNow'


export default function Home() {
  return (
    <Layout title = "Home Page">
    <BuyNow />
      <Pricing/>
      {/* USE LAYOUT IN EVERYPAGE, HAVING PROPS LIKE    title, description, tagname  just as above*/}
      {/* you can leave passing props, as Layout contains some default value set in ../components/Layout */}
    </Layout>
  )
}