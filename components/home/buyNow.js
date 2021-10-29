
import styled from 'styled-components';
import Image from "next/image"
function buyNow() {
    return(
    <Flexitem>
    <Flexitem1>
    <Content1>
        Real time updates and performance demographics
    </Content1>
    <Content2>
      I do not know what to type here so let me fill some random text. Lorem ipsum is hard to consume and I use it as a last resort. So, I will fill random text please and you do not even have to read it.
    </Content2>
    </Flexitem1>
    
    <Flexitem2>
        <Image src="/feature.jpg" alt="" width={571} height={446}  />
    </Flexitem2>
   
    </Flexitem>
    );
}
 const Flexitem = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;500&display=swap');
    display: flex;
    justify-content:space-evenly;
    font-family: 'Poppins' , sans-serif;
`;
 const Content1 = styled.div`
 
width: 552px;
height: 108px;
margin-left: 70px;
margin-top: 150.1px;
font-style: normal;
font-weight: 450;
font-size: 36px;
line-height: 54px;
 color: #000000;
`;
const Content2 = styled.div`

 width: 510px;
 height: 180px;
 margin-left: 70px;
 margin-top: 60px;
 font-style: normal;
font-weight: normal;
font-size: 24px;
 line-height: 36px;
 margin-bottom:315px;
 text-align: justify;
 color: #676767;
`;
 
 const Flexitem1 = styled.div``;
 const Flexitem2 = styled.div`
 width: 571px;
 margin-left: 100px;
 margin-top: 121.1px;
 margin-bottom:231px;
 margin-right:90px;
 `;
 
export default buyNow;