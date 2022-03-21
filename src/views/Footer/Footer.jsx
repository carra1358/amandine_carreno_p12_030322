import Icon from "components/Icons/Icon";
import yoga from "assets/icons_activity/yoga.png";
import swim from "assets/icons_activity/swim.png";
import barbel from "assets/icons_activity/barbel.png";
import bike from "assets/icons_activity/bike.png";
import "./footer.scss";
import  "components/Icons/icons.scss"



function Footer () {

    const iconsNav = [yoga,swim,bike,barbel]
  
    return (

        <footer className='vertical_bar'>
            <nav className='second_nav'>
             {iconsNav.map((icon) => {
               return <a href='/' key={icon}><Icon src={icon} background="white" StyleName="icons_activity"/></a>
             } )}
            </nav>
            <span className='copyright_text'>Copyright, SportSee 2020</span>
      
          </footer>
    )
}

export default Footer;