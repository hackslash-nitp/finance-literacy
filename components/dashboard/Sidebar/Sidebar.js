import { useState } from "react";
import styled from "styled-components"
import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link'




const SidebarCont = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
font-size: 1.25rem;
font-family: Poppins;
display:flex;
justify-content:center;
flex-direction:column;
background: #F1F8FF;
border-radius: 30px;

`
const Heading = styled.h1`
color: #3C3C3C;
font-weight: bold;
display:flex;
align-items:center;
justify-content:flex-start;
margin: 0 0 0 20%;

`
const FynCoin = styled.div`
padding-right: 3.25% ;
`


const HeadingLabel = styled.span`
  padding-top:0;
  
 font-size: 1.5rem;

`
const HomeLogOutButton = styled.button`
background: #4063FF;
border-radius: 10px;
border-style: none;
color: #FFFFFF;
cursor: pointer;
margin: 7% 12%;
padding: 2% 0;
font-weight: 500;
font-size: 1.25rem;


`



const ListItem = styled.div`
display:flex;
align-items:center;
margin: 0 0 0 14%;
`
const SubLinkList = styled.ul`
 padding-left:2.5%;
 
`
const SubLinkLabel = styled.span`
line-height: 2.5rem;
`
const LinkLabel = styled.span`
color: #899ABC;
line-height: 4rem;
cursor: pointer;
 
`
const styledLink = styled(Link)`

`
const LinkIcon = styled.img`
width:11%;
padding-right: 2.5%;
`
const SubLink = styled.li`
 list-style: none;
 display:flex;
align-items:center;
margin: 0 0 0 17%;
`
const SubLinkIcon = styled.img`
 width: 10%;
 padding-right: 2%;
`

export default function Sidebar() {
  var [dis, setdisplay] = useState("none");
  var [rot, setrot] = useState("180deg")
  var style1 = {
    display: dis,
  }
   var style2 = {
     width:"10%",
     paddingLeft:"1.5%",
    transform: `rotate(${rot})`,
  }
  
 
  function handleClick() {
   
    if (dis === "none") {
      setdisplay("block");
       setrot("0deg");
    }
    else {
      setdisplay("none");
       setrot("180deg");
    }
  }


  return (
    <div>
      Sidebar



      <>
        <SidebarCont>
          {/* <LinkIcon width="5%" src="" height="50%" /> */}
          <Heading>
            <FynCoin>
              <Image src="/images/sidebarImages/fyncoinIcon.png" width="60%" height="60%" />
            </FynCoin>
            <HeadingLabel>
              FynCoin
            </HeadingLabel>
          </Heading>


          <HomeLogOutButton>
            <LinkIcon src="/images/sidebarImages/homeIcon.png" />

            Dashboard
          </HomeLogOutButton>
          <ListItem>
            <LinkIcon src="/images/sidebarImages/cryptoIcon.png" width="12" />
            <Link style={{ cursor: "pointer" }} href="https://nextjs.org/">


              <LinkLabel>Crypto Coins</LinkLabel>

            </Link>

           

            <LinkIcon onClick={handleClick} style={style2} src="/images/sidebarImages/triButton.png" width="4%" />

          </ListItem>

          <SubLinkList style={style1}>
            <SubLink>
              <SubLinkIcon src="/images/sidebarImages/bitcoinIcon.png">

              </SubLinkIcon>
              <Link href=''>
                <SubLinkLabel>
                  BitCoin

                </SubLinkLabel>
              </Link>
            </SubLink>
            <SubLink>
              <SubLinkIcon src="/images/sidebarImages/dogecoinIcon.png">

              </SubLinkIcon>
              <Link href=''>
                <SubLinkLabel>
                  DogeCoin

                </SubLinkLabel>
              </Link>
            </SubLink>
            <SubLink>
              <SubLinkIcon src="/images/sidebarImages/fincoinIcon.png">

              </SubLinkIcon>
              <Link href=''>
                <SubLinkLabel>
                  FinCoin

                </SubLinkLabel>
              </Link>
            </SubLink>
            <SubLink>
              <SubLinkIcon src="/images/sidebarImages/ethereumIcon.png">

              </SubLinkIcon>
              <Link href=''>
                <SubLinkLabel>
                  Ethereum

                </SubLinkLabel>
              </Link>
            </SubLink>
            <SubLink>
              <SubLinkIcon src="/images/sidebarImages/methereumIcon.png" >

              </SubLinkIcon>
              <Link href=''>
                <SubLinkLabel>
                  Ethereum

                </SubLinkLabel>
              </Link>
            </SubLink>


          </SubLinkList>


          <ListItem>
            <LinkIcon src="/images/sidebarImages/walletIcon.png" ></LinkIcon>
            <LinkLabel>Wallet</LinkLabel>
          </ListItem>

          <ListItem>
            <LinkIcon></LinkIcon>
            <LinkLabel>Profile</LinkLabel>
          </ListItem>
          <ListItem>
            <LinkIcon></LinkIcon>
            <LinkLabel>Settings</LinkLabel>
          </ListItem>
          <HomeLogOutButton>Log Out</HomeLogOutButton>
        </SidebarCont>
      </>
    </div>

  )
}
