import './styles/app.scss';
import logoSportsee from "./assets/logo_sportsee.png"
import yoga from "./assets/icons/yoga.png";
import swim from "./assets/icons/swim.png";
import barbel from "./assets/icons/barbel.png"
import bike from "./assets/icons/bike.png"
import Icon from './components/Icon';
import Greetings from './components/Greetings';

const iconsNav = [yoga,swim,bike,barbel]


function App() {
  return (
    <div>
      <header className="app_header">
        <div className='logo_container'>
          <img src={logoSportsee} alt="Sport See"/>
        </div>
        <nav className='nav_container'>
          <ul className='main_nav'>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
       <div className='main_content'>
       <div className='vertical_bar'>
       <nav className='second_nav'>
            {iconsNav.map((icon) => {
              return <a href='#' key={icon}><Icon src={icon} background="white" StyleName="icons_vertical_nav"/></a>
            } )}
           </nav>
           <span className='copyright_text'>Copyright, SportSee 2020</span>
         </div>
     
         <main className='user_content'>
           <Greetings name={"Thomas"}/>
         </main>
       </div>
    </div>
  );
}

export default App;
