import Layout from '../components/layout'
import  styled from 'styled-components'
import Pricing from '../components/home/pricing'
import GetNow from '../components/home/getNow'

const ModiContainer =  styled.div`{
  color: purple
}
`
export default function Home() {
  return (
    <Layout title = "Home Page">
    <GetNow />
      <ModiContainer>
        Like this random styled-component, we have to render every page
      </ModiContainer>
      <Pricing/>

      {/* USE LAYOUT IN EVERYPAGE, HAVING PROPS LIKE    title, description, tagname  just as above*/}
      {/* you can leave passing props, as Layout contains some default value set in ../components/Layout */}
    </Layout>
  )
}
