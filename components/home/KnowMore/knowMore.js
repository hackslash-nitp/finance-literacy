import styled from "styled-components";

export default function KnowMore() {
  return (
    <Flexitem>
      <DataKnowMore>
        <Content1>Lorem Webpage now got the next level</Content1>
        <Content2>
          Just get the code and sit tight, you'll witness its power and
          performance in lead conversion. Powerful and productive technology.
          Experience, then believe.
        </Content2>
        <ButtonKnowMore>Know More</ButtonKnowMore>
      </DataKnowMore>
      <ImgKnowMore></ImgKnowMore>
    </Flexitem>
  );
}

const Flexitem = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
  font-family: "Poppins", sans-serif;
  height: 435px;
  background-color: #efefef;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
`;

const DataKnowMore = styled.div`
  font-size: 22px;
  font-color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 10px;
  height: 100%;
`;

const ButtonKnowMore = styled.button`
  background-color: rgba(64, 99, 255, 1);
  color: rgba(239, 239, 239, 1);
  border-radius: 10px;
  width: 258px;
  height: 68px;
  border-style: none;
  box-shadow: 5px 10px 25px #68f35c;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  position: relative;
  font-size: 28px;
  line-height: 42px;
  top: 0px;
  margin-top: 18px;
  margin-left: 58px;
`;

const Content2 = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 36px;
  color: #6f6f6f;
  position: relative;
  width: 585px;
  height: 130px;
  margin-left: 58px;
  margin-top: 24px;
  margin-bottom: 0px;
`;

const Content1 = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  color: #000000;
  position: relative;
  width: 493px;
  height: 108px;
  margin-left: 58px;
  margin-right: 191px;
  margin-top: 30px;
  line-height: 54px;
`;

const ImgKnowMore = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0px;
  padding: 0px 0px 0px 0px;
  background-image: url("know.jpg");
`;
