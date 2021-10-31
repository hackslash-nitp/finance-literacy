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
              <CardFeatures1 >
              <FeaturesListElement>First Feature</FeaturesListElement>
              <FeaturesListElement>Second Feature</FeaturesListElement>
              <FeaturesListElement>Third Feature</FeaturesListElement>
              <FeaturesListElement>Fourth Feature</FeaturesListElement>
              
              </CardFeatures1>
              
              <GetPlan >Get Plan</GetPlan>
              </Card>
            <Card>
             <CardCategory>Advanced Plan</CardCategory>
              <CardPrice>$29.99</CardPrice>
              <CardFeatures2>
              <FeaturesListElement>First Feature</FeaturesListElement>
              <FeaturesListElement>Second Feature</FeaturesListElement>
              <FeaturesListElement>Third Feature</FeaturesListElement>
              <FeaturesListElement>Fourth Feature</FeaturesListElement>
              <FeaturesListElement>Fifth Feature</FeaturesListElement>
              </CardFeatures2>
              <GetPlan>Get Plan</GetPlan>
              </Card>
            </CardContainer>
            </Container>
    )
}

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap'); display: flex;
    justify-content: space-evenly;
    padding-top: 4.5vw;
    padding-bottom: 4.5vw;
    background-color:rgba(239, 239, 239,1);
    font-family: 'Poppins', sans-serif;
`;
const Intro= styled.div`
   width:40%;
   padding-left: 7%;
   margin-top: 0px;
   height: max-content;
`;
const IntroLabel=styled.p`
  font-size: 2.3vw;
  color: #676767;
  
`;
const IntroHeading=styled.p`
    font-size:  2.9vw;
    padding-right:35%;
    margin-top: 0%;
`;
const IntroDescription= styled.p`
    font-size:  1.7vw;
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
   height: max-content;

`;
const CardCategory= styled.p`
 font-size:  1.7vw;
 font-weight:bolder;

`;
const CardPrice=styled.p`
   font-size: 2.3vw;
   margin-top: 0;
   color: #676767;
 font-weight:bold;
`;
const GetPlan=styled.button`
    background-color: rgba(64, 99, 255, 1);
    color:rgba(239, 239, 239,1);
    border-radius: 7%;
    width:50%;
    height:2.945vw;
    font-size: 1.3vw;
    border-style: none;
    font-weight: bold;
`;
const CardFeatures1=styled.ul`
    list-style: none;
    padding-inline-start: 0%;
    padding-bottom: 1.5vw;
    margin-top:1.04vw;
    margin-bottom: 1.04vw;
    @media (max-width: 768px){
      margin-top:0vw;
    margin-bottom: 0vw;
    padding-bottom: 0vw;

    } 
`;
const CardFeatures2=styled.ul`
    list-style: none;
    padding-inline-start: 0%;
    padding-bottom: 0.8vw;
    margin-top:1.04vw;
    margin-bottom: 1.04vw;
    @media (max-width: 768px){
      margin-top:0vw;
    margin-bottom: 0vw;
    padding-bottom: 0vw;
} `;
const FeaturesListElement=styled.li`
    font-size:  1.7vw;
    padding-bottom: 0.5vw;
  color: #676767;
    

`;
export default Pricing