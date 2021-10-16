import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import Slider from "react-slick";

function Testimonial() {
    return (
        <div id="testi" className="testimonial" style={{ display: "flex",
         justifyContent: "center"}}>
        <div style={{ width:"50%"}}>
            <Slider>
                <Card img="https://cdn.pixabay.com/photo/2017/01/11/19/31/dubai-1972702_960_720.jpg" personname="ROMAN ROZISKY" job="A Ukranian SOFTWARE ENGINEER" details="I purchased Wallets from EGA Leathercraft in 2009 , and it's still in a very good condition , I like the style of the wallet and I'll be happy to buy another one for myself" />
                <Card img="https://cdn.pixabay.com/photo/2016/11/11/04/19/sport-1815798_960_720.jpg" personname="XIAO LIU" job="A Chinese BusinessMan" details="I was in Shanghai last year , and one of my friends recommended EGA Leathercraft , I wasn't sure at the beginning , But no after buying it , I feel i should've known this brand long time ago"/>
                <Card img="https://cdn.pixabay.com/photo/2014/05/28/01/37/obama-356133_960_720.jpg" personname="BARACK OBAMA" job="The Ex-President of USA" details="When i was the President of the United States of America, I was buying MONTBLANC , And other expensive brand, Now i realised that I should focus on the quality , I searched online EGA leatherCraft , and i'am so happy with it" />
            </Slider>
        </div>
        </div>
    );
};


const Card = ({img,personname,job,details}) => {
    return (
        <div  style={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center",color: "gray",marginTop: 150 }}>
            <Avatar
            imgProps={{ style: { borderRadius: "50%"}}}
             src={img} 
             style={{ 
                 width:150,
                  height: 150,
                  border:'1px solid lightgray',
                padding: 7,
                 }} 
                 />
            <p style={{ marginTop: 25 }}>{details}</p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}><span style={{ fontWeight: 500, color:"#8A5A3A"}}>{personname}</span> , {job}</p>
        </div>
    )
}
export default Testimonial
