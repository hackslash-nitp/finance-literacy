import Layout from '../../components/layout'
import  styled from 'styled-components'
import { useRouter } from 'next/router'
import Sidebar from '../../components/dashboard/Sidebar/Sidebar'
import MyPortfolio from '../../components/dashboard/MyPortfolio/MyPortfolio'
import Profile from '../../components/dashboard/Profile/Profile'
import Graph from '../../components/dashboard/Graph/Graph'
import RecentTransaction from '../../components/dashboard/RecentTransaction/RecentTransaction'


const Dashboard = styled.div`{
  display: grid;
  grid-template-areas:
    'Sidebar Center Center AsideRight'
    'Sidebar Center Center AsideRight'
}`

const AsideLeft = styled.div`
  grid-area: Sidebar;
`;
const Center = styled.aside`
  grid-area: Center;
`;
const AsideRight = styled.aside`
  grid-area: AsideRight;
`;

// const router = useRouter()


export default function Home() {
  return (
    <Layout title = "Dashboard">
      <Dashboard>
        <AsideLeft>
          <Sidebar/>
        </AsideLeft>
        <Center>
          <MyPortfolio/>
          <Graph/>
        </Center>
        <AsideRight>
          <Profile/>
          <RecentTransaction/>
        </AsideRight>
      </Dashboard>
    </Layout>
  )
}
