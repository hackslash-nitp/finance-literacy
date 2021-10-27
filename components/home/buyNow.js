import buynow from "../../styles/buynow.module.css" 
import Image from "next/image"

function buyNow (){
    return(
      <div className={buynow.flexitem1}>
      
      <div className={buynow.content1}>
        <p>Real time updates and performance demographics</p>
      </div>
      <div className={buynow.content2}>
        <p>I do not know what to type here so let me fill some random text. Lorem ipsum is hard to consume and I use it as a last resort. So, I will fill random text please and you do not even have to read it.</p>
      </div>
      
      <div className={buynow.container2}>
         <Image src="/feature.jpg" alt="" width={571} height={446}/>
      </div>
      </div>
    
    )
}

export default buyNow;