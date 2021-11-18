import styled from "styled-components";

function RecentTransaction() {
  return (
    <Container>
      <Label>Recent Transaction</Label>
      <Rectangle>
        <Item>
          <Image
            style={{ transform: "rotate(-14.2deg)" }}
            src="https://s3-alpha-sig.figma.com/img/dab5/cd53/3f1199db4aeb4f9ae5d6c5791e497b40?Expires=1636329600&Signature=NadH9uWcoVPMOAptPixUlNpYgzO71pi5nKWmNKe-HQqJVFh9rz4KSr3K1rBpF6MBrVEqUMXd~xU45SwSGMbEvGFQFOgav0WrOsEXBCcG7IDMK9cA4bU6KPamjbfFINUYXpOwTeECqUEEcBPFam-lTNH8QrCYiTVKCMTGv3mOTLiEAkoyOVvD3zM-NU5yVTHRAqzD5tPWtREyz8fuj4SRYFC7ZtVVkqUEw9jSIt3bOCGvoaaKoxtmwHdXyZPEr4Vt~V0i1h~hWq5fE2ZgkNVDUsVQwgXPnCd5KBsO3Cl9ApocoiW~SnR5~HokjCCL-PppqWOr6tv1~KG5R-kHbzALbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="bitcoin"
          ></Image>
          <Grid>
            <GridCard style={{ width: "132px" }}>Added Balance</GridCard>
            <GridDescription>Gpay</GridDescription>
          </Grid>
          <Text style={{ color: "#0B8900", width: 58, marginLeft: 30 }}>
            +₹1000
          </Text>
        </Item>
        <Item>
          <Image
            style={{ transform: "rotate(-14.2deg)" }}
            src="https://s3-alpha-sig.figma.com/img/dab5/cd53/3f1199db4aeb4f9ae5d6c5791e497b40?Expires=1636329600&Signature=NadH9uWcoVPMOAptPixUlNpYgzO71pi5nKWmNKe-HQqJVFh9rz4KSr3K1rBpF6MBrVEqUMXd~xU45SwSGMbEvGFQFOgav0WrOsEXBCcG7IDMK9cA4bU6KPamjbfFINUYXpOwTeECqUEEcBPFam-lTNH8QrCYiTVKCMTGv3mOTLiEAkoyOVvD3zM-NU5yVTHRAqzD5tPWtREyz8fuj4SRYFC7ZtVVkqUEw9jSIt3bOCGvoaaKoxtmwHdXyZPEr4Vt~V0i1h~hWq5fE2ZgkNVDUsVQwgXPnCd5KBsO3Cl9ApocoiW~SnR5~HokjCCL-PppqWOr6tv1~KG5R-kHbzALbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="bitcoin"
          ></Image>
          <Grid>
            <GridCard style={{ width: "136px" }}>Purchased Coin</GridCard>
            <GridDescription>Bitcoin</GridDescription>
          </Grid>
          <Text style={{ color: "#ffc703", width: 61, marginLeft: 20 }}>
            +₹2000
          </Text>
        </Item>
        <Item>
          <Image
            style={{ width: "60px" }}
            src="/images/ethereum.png"
            alt="sold coin"
          ></Image>
          <Grid>
            <GridCard>Sold Coin</GridCard>
            <GridDescription>Ethereum</GridDescription>
          </Grid>
          <Text style={{ color: "#ff2a2a", width: 60, marginLeft: 60 }}>
            -₹3000
          </Text>
        </Item>
      </Rectangle>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  width: 400px;
  height: 360px;
  box-shadow: 1px 1px 40px 12px rgba(231, 231, 231, 0.25);
  border-radius: 15px;
  font-family: "Poppins";
  font-style: normal;
`;

const Label = styled.p`
  position: absolute;
  /* left: 30px; */
  margin: 10px;
  color: #000000;
  font-weight: 600;
  font-size: 27px;
  line-height: 40px;
`;

const Rectangle = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 92px;
  top: 60px;
  margin: 5px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  margin: 10px;
  background: #ffffff;
  box-shadow: 1px 1px 40px 12px rgba(231, 231, 231, 0.25);
  border-radius: 15px;
`;

const Text = styled.p`
  font-size: 15px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
`;

const Grid = styled.div`
  margin-left: 60px;
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
`;

const GridCard = styled.p`
  height: 26px;
`;

const GridDescription = styled.p`
  color: #989898;
`;

export default RecentTransaction;
