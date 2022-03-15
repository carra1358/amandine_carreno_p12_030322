import { Link } from "react-router-dom";
import logoSportsee from "assets/logo/logo_sportsee.png";
import "./header.scss";

function Header() {
  return (
    <header className="app_header">
      <div className="logo_container">
        <img src={logoSportsee} alt="Sport See" />
      </div>
      <nav className="nav_container">
        <div className="main_nav">
          <Link to="/">Accueil</Link>
          <Link to="/">Profil</Link>
          <Link to="/">Réglage</Link>
          <Link to="/">Communauté</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
