import Icon from "../Icons/Icon";
import yoga from "./assets/yoga.png";
import swim from "./assets/swim.png";
import barbel from "./assets/barbel.png";
import bike from "./assets/bike.png";
import "./footer.scss";
import Styles from "./icon_footer.module.scss"



function Footer () {

    const iconsNav = [yoga,swim,bike,barbel]
  
    return (

        <div className='vertical_bar'>
            <nav className='second_nav'>
             {iconsNav.map((icon) => {
               return <a href='#' key={icon}><Icon src={icon} background="white" StyleName={Styles.icons}/></a>
             } )}
            </nav>
            <span className='copyright_text'>Copyright, SportSee 2020</span>
      
          </div>
    )
}

export default Footer;