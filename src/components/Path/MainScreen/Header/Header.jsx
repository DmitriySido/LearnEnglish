import { Link } from "react-router-dom";
import './Header.scss'
import HomeIcon from '../../../../foto/icons/navigationIcon/Home-icon.png'
import UserIcon from '../../../../foto/icons/navigationIcon/user-icon.png'
import SettingsIcon from '../../../../foto/icons/navigationIcon/settings-icon.png'
import Logo from '../../../../foto/icons/Fluentify-logo.png'

export default function Header(){

  return(
    <header className="header">
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-logo">
            <Link to='/'><img className="logo" src={Logo} alt="Fluentify" /></Link>
          </li>

          <li className="navigation-item">
            <Link to="/" className="navigation-link"><img src={HomeIcon} alt="Home icon" />Обучнение</Link>
          </li>

          <li className="navigation-item">
            
            <Link to="/Profile" className="navigation-link"><img src={UserIcon} alt="User icon" />Профиль</Link>
          </li>

          <li className="navigation-item">
            
            <Link to="/Settings" className="navigation-link"><img src={SettingsIcon} alt="Settings icon" />Настройки</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}