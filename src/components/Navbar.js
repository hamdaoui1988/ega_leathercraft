import React from "react"
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
function Navbar() {


    return (
        <div className="navbar">
            <div className="navbar_left">
               <img src="https://scontent.frba3-1.fna.fbcdn.net/v/t1.6435-9/161536549_271055051390842_5476684080068756501_n.png?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHgSoUn6VojaiQv8_CAVQqLK6CH7dar-VoroIft1qv5Wmqqk1CGYSPLtbJeN7dy1Xc&_nc_ohc=kLJJKymAt8AAX_9JMTZ&_nc_ht=scontent.frba3-1.fna&oh=6b9bb87b72bdaa48cebd2684c387730d&oe=617D8C30" width="34px" height="34px" />

            </div>

            <div className="navbar_middle">
                
              <a href="#" className="right-home active">Home</a>
              <a href="#design" className="right-link">Design</a>
              <a href="#projects" className="right-link">Collections</a>
              <a href="#countdown" className="right-link">Best Deals</a>
              <a href="#testi" className="right-link">Testimonial</a>
              <a href="#about" className="right-link">About</a>
              <a href="#contact" className="right-link">Contact</a>
                
            </div>

            <div className="navbar_right">
                <SearchIcon style={{ fontSize: 20 }} className="icon_css" />
                <a href="https://www.facebook.com/EGA.Leathercraft/" target="_blank" ><FacebookIcon style={{ fontSize: 20 }} className="icon_css_fb" /></a>
                <a href="https://www.instagram.com/ega_leathercraft/" target="_blank" ><InstagramIcon style={{ fontSize: 20 }} className="icon_css_ig" /></a>

                
            </div>
        </div>
    )
}

export default Navbar
