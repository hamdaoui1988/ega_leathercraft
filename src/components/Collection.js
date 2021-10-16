import React,{ useEffect }  from "react"
import belt from '../belt.jpg'
import wallet from '../wallet.jpg'
import cardholder from '../cardholder.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

function Collection() {

    useEffect(() => {
        Aos.init({ duration: 2000});
     }, []);


    return (
        <div id="projects" className="collection">
            <h2>COLLECTIONS</h2>
            <div className="collection_photos">
            <div class="container" data-aos="fade-up" data-aos-delay="200"><img src={wallet} width="360px" height="488px" /><h4 class="centered">WALLETS</h4></div>
            <div class="container" data-aos="fade-up" data-aos-delay="500"><img src={belt} width="360px" height="488px" /><h4 class="centered">BELTS</h4></div>
            <div class="container" data-aos="fade-up" data-aos-delay="700"><img src={cardholder} width="360px" height="488px" /><h4 class="centered">CARDHOLDERS</h4></div>
            </div>

        </div>
    )
}

export default Collection
