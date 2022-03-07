import './styles/app.scss';
import logoSportsee from "./assets/logo_sportsee.png"
import yoga from "./assets/icons/yoga.png";
import swim from "./assets/icons/swim.png";
import barbel from "./assets/icons/barbel.png";
import bike from "./assets/icons/bike.png";
import Icon from './components/Icon';
import Greetings from './components/Greetings';
import Cards from './components/Cards';
import apple from "./assets/icons/apple.png";
import fire from "./assets/icons/fire.png";
import cheeseburger from "./assets/icons/cheeseburger.png";
import chicken from "./assets/icons/chicken.png";
import BarCharts from './components/BarCharts';

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
              return <a href='#' key={icon}><Icon src={icon} background="white" StyleName="icons icons_vertical_nav"/></a>
            } )}
           </nav>
           <span className='copyright_text'>Copyright, SportSee 2020</span>
         </div>
     
         <main className='user_content'>
           <Greetings name={"Thomas"}/>
           <div className='user_stats_container'>
             <div className='user_graph_container'>
               <BarCharts styleName="bar_chart"/>
             </div>
            <div className='nutrition_container'>
              <Cards nutritionNumber="1234" unit="KCal" category="calories" src={fire} background="rgba(255, 0, 0, 0.061)" StyleName="icons icons_nutrition"></Cards>
              <Cards nutritionNumber="123" unit="g" category="Proteines" src={chicken} background="rgba(74, 184, 255, 0.1)" StyleName="icons icons_nutrition"></Cards>
              <Cards nutritionNumber="300" unit="g" category="Glucides" src={apple} background="rgba(249, 206, 35, 0.1)" StyleName="icons icons_nutrition"></Cards>
              <Cards nutritionNumber="50" unit="g" category="Lipides" src={cheeseburger} background="rgba(253, 81, 129, 0.1)" StyleName="icons icons_nutrition"></Cards>

            </div>
           </div>
         </main>
       </div>
    </div>
  );
}

export default App;
