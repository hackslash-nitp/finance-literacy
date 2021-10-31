import styled from 'styled-components'

function Subscribe() {
  return (
    <Container>

    < h2 > Subscribe to our newsletter
    for getting info about our new products </h2>
    < p > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
    for previewing layouts and visual mockups. </p>

     < Flex >

    < StyledForm type = "email"
    name = "email" > </StyledForm>
    < Button >Subscribe</Button>
    </Flex>
  </Container>

  )
}
const Button = styled.button`
  border : none;
  border-radius : 5px;
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: #4063FF;
  color: #fff;
  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
}`

const StyledForm = styled.form`
  width : 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #ECECEC;
  border-radius: 10px;
  box-sizing: border-box;
`
const Container = styled.div`
  width = 50%;
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
     text-align : center;
     padding-top : 8%;
     padding-bottom: 8%;
     background-color:#fff;
     margin-left : 200px;
     margin-right : 200px;
     font-family: 'Poppins', sans-serif;
  & h2{
    font-size : 50px;
    font-style: normal;
    font-weight: 500;
  }
  & p{
    margin-bottom : 90px;
    color : #676767;
    font-size : 30px;
`

const Flex = styled.div`
 display : flex;
 text-align : center;
 flex : 1;
 justify-content: center;

 `

export default Subscribe;
