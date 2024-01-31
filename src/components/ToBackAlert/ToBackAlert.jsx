import { Link } from "react-router-dom";
import './ToBackAlert.scss'

export default function ToBackAlert(){
  
  return(
    <div className="to-back-popup">
      <h2 className="to-back-popup__subject">Ввесь процес будет утерян</h2>
      <p>Вы уверены что хотите выйти?</p>
      <div className="to-back-alert-button__wrapper">
        <button className='alert-button'><Link to="/" className='alert-button alert-button__link'>Да</Link></button>
        <button className='alert-button'>Нет</button>
      </div>
    </div>
  )
}