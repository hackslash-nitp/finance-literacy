import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Home.module.css'


const Nav = styled.nav`
  height: 80px;
  
  display: flex;
 
  align-items: center;
  color: #fff;
  justify-content: space-evenly;

`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  text-decoration: none;
  font-size:20px;
  
`;



const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
        <StyledLink style={{display:"flex",marginLeft:"-183px"
      }}> 
          <Image src="/images/logo.png" width="70px"  height="45px" />
           
          <h1 style={{marginLeft:"40px",color:"black"}}> FynCoin</h1> </StyledLink>
          
        </Link> 
      </div>
      <div style={{marginLeft:'100px'}}>
        <Link href='/' passHref >
          <StyledLink  className={styles.highlight}>Home</StyledLink>
        </Link>
        <Link href='/services' passHref>
          <StyledLink  className={styles.highlight}>Services</StyledLink>
        </Link>
        <Link href='/reviews' passHref>
          <StyledLink  className={styles.highlight}>Reviews</StyledLink>
        </Link>
        <Link href='/pricing' passHref>
          <StyledLink  className={styles.highlight}>Pricing</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;


