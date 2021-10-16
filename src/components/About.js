import React,{ useEffect } from "react"
import andrea from '../andrea.jpg'
import azedin from '../azedin.jpg'
import { Avatar } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {
       Aos.init({ duration: 2000});
    }, []);

    return (
        <div id="about" className="about">
            
            <div className="about_left" data-aos="fade-right" data-aos-delay="100">
            <img src={andrea} />
            </div>
            <div className="about_right" data-aos="fade-left" data-aos-delay="200">
            <h2>About Us</h2>
            <p style={{textAlign: "center",color: "white", fontSize:"30px"}}><p>My Name is AZZEDIN EL GMAIRI , i'am an asshole who doesn't have even a proper photo in his Facebook account, i'am a wallet maker , i make wallets to make people happy and satisfied , and i worked before in a factory in china , and now i have my own shop in morocco and i sell wallets online and i have a factory in zimbabwe , for making harira soup , and bisara for customers at 6am in the morning , this is my life in morocco</p></p>
            <div className="logo_position">
            <Avatar
            imgProps={{ style: { borderRadius: "50%"}}}
             src={azedin} 
             style={{ 
                 width:60,
                  height: 60,
                padding: 4,
                 }} 
                 />
                 <div className="logo_text"><h4>Azzedin El Gmairi</h4><span>CEO, Co-Founder</span></div>
                 </div> 
            </div>
        </div>
    )
}

export default About
