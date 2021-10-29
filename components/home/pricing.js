import styled from "styled-components"
function Pricing()
{
    return(
       <Container>
          
            <Intro>
              <IntroLabel>Pricing</IntroLabel>
              <IntroHeading>Pick the right pricing plan for your needs</IntroHeading>
              <IntroDescription>We have very fair pricing policy that would benefit you and us at the same time. Get the free plan 	&#38; if you need more - pay.</IntroDescription>
            </Intro>
            <CardContainer>
            <Card>
              <CardCategory>Basic Plan</CardCategory>
             <CardPrice>$14.99</CardPrice>
              <CardFeatures style={{paddingBottom:"8%"}}>
              <FeaturesListElement>First Feature</FeaturesListElement>
              <FeaturesListElement>Second Feature</FeaturesListElement>
              <FeaturesListElement>Third Feature</FeaturesListElement>
              <FeaturesListElement>Fourth Feature</FeaturesListElement>
              
              </CardFeatures>
              
              <GetPlan>Get Plan</GetPlan>
              </Card>
            <Card>
             <CardCategory>Advanced Plan</CardCategory>
              <CardPrice>$29.99</CardPrice>
              <CardFeatures>
              <FeaturesListElement>First Feature</FeaturesListElement>
              <FeaturesListElement>Second Feature</FeaturesListElement>
              <FeaturesListElement>Third Feature</FeaturesListElement>
              <FeaturesListElement>Fourth Feature</FeaturesListElement>
              <FeaturesListElement>Fifth Feature</FeaturesListElement>
              </CardFeatures>
              <GetPlan>Get Plan</GetPlan>
              </Card>
            </CardContainer>
            </Container>
    )
}

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap'); display: flex;
    justify-content: space-evenly;
    padding-top: 16%;
    padding-bottom: 18%;
    background-color:rgba(239, 239, 239,1);
    font-family: 'Poppins', sans-serif;
`;
const Intro= styled.div`
   width:37.5%;
   padding-left: 7%;
   margin-top: 0px;
`;
const IntroLabel=styled.p`
  font-size:225%;
  color: #676767;
  
`;
const IntroHeading=styled.p`
    font-size: 281.25%;
    padding-right:35%;
    margin-top: 0%;
`;
const IntroDescription= styled.p`
    font-size: 168.75%;
    padding-right:20%;
    margin-top: 0%;
    color: #676767;
    line-height: 1.6em;
`;
const CardContainer= styled.div`
    display:flex;
    justify-content: space-around;
    width:60%;
`;
const Card=styled.div`
    width:40%;
    padding:0;
    background-color: white;
    text-align: center;
    border-radius: 5%;  
    padding-bottom: 5%;
`;
const CardCategory= styled.p`
 font-size: 168.75%;
 font-weight:bolder;

`;
const CardPrice=styled.p`
   font-size: 225%;
   padding-top: 2%;
   color: #676767;
 font-weight:bold;
`;
const GetPlan=styled.button`
    background-color: rgba(64, 99, 255, 1);
    color:rgba(239, 239, 239,1);
    border-radius: 7%;
    width:50%;
    height:9.5%;
    font-size: 130%;
    border-style: none;
    font-weight: bold;
`;
const CardFeatures=styled.ul`
    list-style: none;
    padding-inline-start: 0%;
`;
const FeaturesListElement=styled.li`
    font-size: 180%;
    padding-top: 3%;
  color: #676767;
    

`;
export default Pricing