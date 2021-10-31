import styled from "styled-components";

export default function BuyNow()
{
    return (
       <Container>
           <TextBuyNow>
           <Line1>Why You Need Us?</Line1>
           <Line2>High-end security with high end design and responsive across all platforms.</Line2>
           <Line3>Lorem Ipsum and something that can look good here. Lorem Ipsum and something that can look good here.</Line3>
           <ButtonBuyNow>Buy Now</ButtonBuyNow>
           </TextBuyNow>
       </Container>
    )
}
const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
font-family: 'Poppins', sans-serif;
background-image: url("/images/buyNow.jpg");
background-size: 100% 100%;
background-repeat: no-repeat;
padding-left: 4%;
color: #FFFFFF;
padding-top: 6%;
padding-bottom: 12%;
`;

const TextBuyNow = styled.div`
margin-top:0;
width: 50%;
`;

const Line1 = styled.p`
margin-top: 0;
`;

const Line2 = styled.p`
font-weight: 500;
font-size: 40px;
`;

const Line3 = styled.p`
margin-top: 0;
`;

const ButtonBuyNow = styled.button`
background-color: rgba(64, 99, 255, 1);
    color:rgba(239, 239, 239,1);
    border-radius: 10px;
    width:30%;
    height: 50%;
    border-style: none;
    font-weight: 500;
    font-size: 22px;
    padding: 2%;
    Line height :33px;
    margin-top: 15%;
`;