import './styles/app.scss';
import logoSportsee from "./assets/logo_sportsee.png"
import yoga from "./assets/icons/yoga.png";
import swim from "./assets/icons/swim.png";
import barbel from "./assets/icons/barbel.png"
import bike from "./assets/icons/bike.png"
import Icon from './components/Icon';

const iconsNav = [yoga,swim,bike,barbel]

const keyIcons = ["yoga-icon","swim-icon","bike-icon","barbel-icon"]



function App() {
  return (
    <div>
      <header className="app_header">
        <div className='logo_container'>
          <img src={logoSportsee} alt="Sport See"/>
        </div>
        <nav className='main_nav'>
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
       <div className='main_content'>
         <aside className='vertical_nav'>
           <nav className='second_nav'>
            {iconsNav.map((icon) => {
              return <a><Icon src={icon} background="white" StyleName="icons_vertical_nav" key={keyIcons.map((key)=> key)}/></a>
            } )}
          
           </nav>
         </aside>
         <main className='user_content'></main>
       </div>
    </div>
  );
}

export default App;
