import { Link } from "react-router-dom";
import './Header.scss'

export default function Header(){

  return(
    <header className="header">
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/" className="navigation-link navigation-link--active">Обучнение</Link>
          </li>

          <li className="navigation-item">
            <Link to="/Profile" className="navigation-link">Профиль</Link>
          </li>

          <li className="navigation-item">
            <Link to="/Settings" className="navigation-link">Настройки</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}