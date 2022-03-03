import './styles/app.scss';
import logoSportsee from "./assets/logo_sportsee.png"

function App() {
  return (
    <div>
      <header className="app_header">
        <div className='logo_container'>
          <img src={logoSportsee} alt="Sport See"/>
        </div>
        <nav>
          <ul className='main_nav'>
            <li className='nav_item'>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
      <main>

      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
