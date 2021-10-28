import classes from "./getNow.module.css";

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
      <div className={classes.text}>
        <h2>Crypto</h2>
        <h1>Explore the Crypto world.</h1>
        <p>
          Best in class responsive webpages and landing pages for your business.
          Get one for yourself now at lowest cost ever.
        </p>
        <button className={classes.actions}>Get Now</button>
      </div>
      <div className={classes.image}>
        <Image src="/getNowImage.png" alt="" width={710} height={680}/>
      </div>
    </section>
  );
}

export default GetNow;
