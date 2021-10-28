import { TextDiv,TextH2,TextH1,TextP,Button,ImageDiv } from './getNow.style'

import Image from 'next/image';
import Head from 'next/head'

function GetNow() {
  return (
    <section>
    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TextDiv>
        <TextH2>Crypto</TextH2>
        <TextH1>Explore the Crypto world.</TextH1>
        <TextP>
          Best in class responsive webpages and landing pages for your business.
          Get one for yourself now at lowest cost ever.
        </TextP>
        <Button>Get Now</Button>
      </TextDiv>
      <ImageDiv>
        <Image src="/getNowImage.png" alt="" width={710} height={680}/>
      </ImageDiv>
    </section>
  );
}

export default GetNow;
