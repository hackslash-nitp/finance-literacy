import Layout from '../components/layout'
import  styled from 'styled-components'
import Subscribe from '../components/home/subscribe'

const ModiContainer =  styled.div`{
  color: purple
}
`
export default function Home() {
  return (
    <Layout title = "Home Page">
      <ModiContainer>
        Like this random styled-component, we have to render every page
      </ModiContainer>
<Subscribe />

      {/* USE LAYOUT IN EVERYPAGE, HAVING PROPS LIKE    title, description, tagname  just as above*/}
      {/* you can leave passing props, as Layout contains some default value set in ../components/Layout */}
    </Layout>
  )
}
