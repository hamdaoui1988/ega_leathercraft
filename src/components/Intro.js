import React,{ useEffect }  from "react"
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DomainIcon from '@material-ui/icons/Domain';
import Aos from "aos";
import "aos/dist/aos.css";

function Intro() {
    return (
        <div id="design" className="intro">
            <div className="intro_left">
            <h1>Design is not just what it looks like and how it feels. Design is how it works.</h1>
            <div className="intro_left_container">
            <div className="intro_left_creative" data-aos="fade-up" data-aos-delay="100">
               <AttachMoneyIcon style={{ fontSize: 45 }} className="icon-color" />
               <h3>Save Cost</h3>
               <p>our wallets are designed with the best leather quality, exclusively to EGA's customers</p>
            </div>

            <div className="intro_left_design" data-aos="fade-up" data-aos-delay="200">
            <AccountBalanceWalletIcon style={{ fontSize: 45 }} className="icon-color" />
               <h3>Amazing Wallets</h3>
               <p>our wallets are designed with the best leather quality, exclusively to EGA's customers </p>
            </div>
            </div>
            </div>
            <div className="intro_right">
            <img src="https://scontent.frba3-2.fna.fbcdn.net/v/t1.6435-9/127472765_183040446858970_9212208077461730713_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGSldFfT5bftWgyeRsZo2waHcrFkhbd5qQdysWSFt3mpPujCM5FVMZHbK_taGnsv_A&_nc_ohc=CdJdvapMsXkAX87tg0z&_nc_ht=scontent.frba3-2.fna&oh=8222ad689adbb411b1e5c6501b53a28d&oe=617DC830" height="700px"/>
            <div class="bottom-left-block">
            <DomainIcon className="intro_right_icon" style={{ fontSize: 55 }} />
            <h3 className="intro_right_h3">Modern Design</h3>
            <p className="intro_right_p">Far far away, behind the word mountains, far from the countries .</p>
            </div>
            </div>
        </div>
    )
}

export default Intro
