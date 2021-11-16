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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap'); 
    display: flex;
    justify-content: space-evenly;
    padding-top: 10%;
    padding-bottom: 10%;
    background-color:rgba(239, 239, 239,1);
    font-family: 'Poppins', sans-serif;
    margin:0px;
    overflow-x: hidden;
    @media (max-width: 768px){
      flex-direction: column;
      
    }
`;
const Intro= styled.div`
   width:42%;
   padding-left: 7%;
   margin-top: 0px;
   height: max-content;
   @media (max-width: 1024px){
  padding-left: 4%;
  padding-bottom:7%};
  @media (max-width: 768px){
    width:inherit;
    padding-left: 2%;
  };
     
`;
const IntroLabel=styled.p`
  font-size:36px;
  color: #676767;
  @media (max-width: 1024px){
    margin-bottom:10px;
   /* font-size:30px;*/
  }
  
`;
const IntroHeading=styled.p`
    font-size:  45px;
    padding-right:25%;
    margin-top: 0%;
    
    @media (max-width: 1024px){
      padding-right:10%;
      padding-bottom: 5%;
     font-size:36px;
   ;};
   @media (max-width: 768px){
     font-size:45px;
   };

`;
const IntroDescription= styled.p`
    font-size:  27px;
    padding-right:20%;
    margin-top: 0%;
    
    color: #676767;
    line-height: 1.6em;
    @media (max-width: 1024px){
      padding-right:5%;
      font-size: 23px;
   ;}
   @media (max-width: 768px){
     font-size: 27px;
   };
`;
const CardContainer= styled.div`
    display:flex;
    justify-content: space-around;
    width:57%;
    @media (max-width: 768px){
    width:inherit;
  };
  @media (max-width: 420px){
  flex-direction: column;
  }
`;
const Card=styled.div`
    width:40%;
   /* padding:0;*/
    background-color: white;
    text-align: center;
    border-radius: 5%;  
    padding-bottom: 5%;
   height: max-content;
   @media (max-width: 420px)
   {
     width:60%;
     margin-left: 20%;
     margin-right:20%;
     margin-bottom: 15%;
   }

`;
const CardCategory= styled.p`
 font-size:  27px;
 font-weight:bolder;
 padding-top: 5%;
 padding-bottom: 5%;

`;
const CardPrice=styled.p`
   font-size: 36px;
   /*margin-top: 0;*/
   color: #676767;
 font-weight:bold;
`;
const GetPlan=styled.button`
    background-color: rgba(64, 99, 255, 1);
    color:rgba(239, 239, 239,1);
    border-radius: 7%;
    width:50%;
    height:46px;
    font-size: 20px;
    border-style: none;
    font-weight: bold;
`;
const CardFeatures1=styled.ul`
    list-style: none;
    padding-inline-start: 0%;
    padding-bottom: 1.5vw;
    margin-top:1.04vw;
    margin-bottom: 1.04vw;
   

    
`;
const CardFeatures2=styled.ul`
    list-style: none;
    padding-inline-start: 0%;
    padding-bottom: 0.8vw;
    margin-top:1.04vw;
    margin-bottom: 1.04vw;
    
 `;
const FeaturesListElement=styled.li`
    font-size:  27px;
    padding-bottom: 0.5vw;
  color: #676767;
  @media (max-width: 1024px){
    font-size:  20px;
      
    }
    @media (max-width: 768px)
  {
    font-size: 27px;
  }
    

`;
export default Pricing