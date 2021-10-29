import {Flexitem,Content1,Content2,Container2} from './BuyNow.style';
import Image from "next/image"
function buyNow() {
    return(
    <Flexitem>
    <Content1>
        <p>Real time updates and performance demographics</p>
    </Content1>
    <Content2>
        <p>I do not know what to type here so let me fill some random text. Lorem ipsum is hard to consume and I use it as a last resort. So, I will fill random text please and you do not even have to read it.</p>
    </Content2>
    <Container2>
        <Image src="/feature.jpg" alt="" width={571} height={446} />
    </Container2>
    </Flexitem>
    );
}
export default buyNow;