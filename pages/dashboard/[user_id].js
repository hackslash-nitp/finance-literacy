import Layout from '../../components/layout'
import  styled from 'styled-components'
import { useRouter } from 'next/router'


const ModiContainer =  styled.div`{
  color: purple
}
`


export default function Home() {
const router = useRouter()
  return (
    <Layout title = "Dashboard">
      <ModiContainer>
        Like this random styled-component, we have to render every page {router.query.user_id}
      </ModiContainer>
    </Layout>
  )
}
