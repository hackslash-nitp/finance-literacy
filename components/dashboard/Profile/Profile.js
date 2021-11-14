import Image from 'next/image'
import styled from "styled-components"

function Profile() {
    return(
        <Container>
            <Intro>
                <IntroRow>
                    <IntroName> Hello, Pritam</IntroName>
                    <IntroLabel> Lets buy some crypto and be cool</IntroLabel>
                </IntroRow>
                <input type="text" name="name" placeholder="Search" border-radius={10} />
            </Intro>
            
            <CardContainer>
                <CardFeatures>
                    <CardHeading>Easy to manage your<br /> crypto Transactions</CardHeading>
                    <CardTransaction>View your detailed transaction</CardTransaction>
                    <DetailTransaction>Detail Transaction</DetailTransaction>
                </CardFeatures>
            </CardContainer>

            <PortHead>My Portfolio</PortHead>

            <PortFolio>
                <Pricea>25,000</Pricea>
                <Priceb>25,000</Priceb>
            </PortFolio>
            <FootBar>
                <BitCoin>
                    <Image src="/Bitcoin.png" width={100} height={100} />
                    <WrittenPart>
                        <Heading>BTC/BIDR</Heading>
                        <FullForm>Bitcoin</FullForm>
                    </WrittenPart>
                </BitCoin>
                <Ethereum>
                    <Image src="/Ethereum.png" width={150} height={100} />
                    <WrittenPart>
                        <Heading>ETH/BIDR</Heading>
                        <FullForm>Ethereum</FullForm>
                    </WrittenPart>
                </Ethereum>
                
            </FootBar>


        </Container>
    )
}

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
    display:flex;
    flex-direction : column;
    flex-wrap : wrap;
    justify-content : space-evenly;
    align-self : center;
    background-color : rgba(239,239,239,1);
    font-family : 'Poppins', sans-serif;
    width: 100vh;
    height : 100vh;
`;

const Intro = styled.div`
    background-color : rgba(239,239,239,1);
    display : flex;
    justify-content : space-between;
    padding-bottom : 30px;
`;

const IntroRow = styled.div`
    margin-left : 10px;
`;

const IntroName = styled.div`
    color : black;
    font-weight : bold;
    font-family : 'Poppins', sans-serif;
    font-size : 175%;
    padding-left:25px;
`;

const IntroLabel = styled.div`
    color : #676767;
    font-family : 'Poppins', sans-serif;
    font-size : 105%;
    padding-left: 25px;

`;

const CardContainer = styled.div`
    background-color : rgba(64,99,255,1);
    height : 37.5%;
    width : 625px;
    padding-left : 8%;
    padding-right : 8%;
    padding-top : 5%;
    padding-bottom : 2%;
    border-radius : 40px;
    margin-bottom : 20px;
`;

const CardFeatures = styled.div`
`;

const CardHeading = styled.p`
    color : white;
    font-family : 'Poppins', sans-serif;
    font-size : 175%;
    font-weight : bold;
`;

const CardTransaction = styled.p`
    color : white;
    font-family : 'Poppins', sans-serif;
    font-size : 100%;
    font-weight : bold;
`;

const DetailTransaction = styled.button`
    background-color : rgba(90,200,255,1);
    color : white;
    height : 20%;
    width : 45%;
    font-family : 'Poppins', sans-serif;
    font-size : 125%;
    font-weight : bold;
    border : none;
    border-radius : 35px;
    outline : none;
    padding : 10px 16px;
`;

const PortFolio = styled.div`
    background-color : rgba(239,239,239,1);
    display : flex;
    justify-content : space-around;
    margin-left : 90px;
`;

const PortHead = styled.p`
    color : black;
    font-family : 'Poppins', sans-serif;
    font-size : 145%;
    font-weight : bold;
    padding-left : 25px;
`;

const Pricea = styled.p`
    color : black;
    font-weight : 600;
`;

const Priceb = styled.p`
    color : black;
    font-weight : 600;
`;

const FootBar = styled.div`
    display : flex;
    justify-content : space-around;
    flex-wrap : wrap;
    background-color : rgba(239,239,239,1);
`;

const BitCoin = styled.div`
    background-color : white;
    border-radius : 20px;
    width : 300px;
    height : 100px;
    display : flex;
    justify-content : space-around;
`;

const WrittenPart = styled.div`
`;

const Heading = styled.p`
    color : black;
    font-family : 'Poppins', sans-serif;
    font-size : 135%;
    font-weight : bold;
    padding-left : 10px;
`;

const FullForm = styled.p`
    color : #676767;
    font-family : 'Poppins', sans-serif;
    font-size : 95%;
    font-weight : bold;
    padding-left : 10px;
`;

const Ethereum = styled.div`
    background-color : white;
    border-radius : 20px;
    width : 300px;
    height : 100px;
    padding-left : 10px;
    display : flex;
    justify-content : space-around;
`;


export default Profile
