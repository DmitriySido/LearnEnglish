import { Link } from 'react-router-dom'
import './EdipProfileButton.scss'

export default function EdipProfileButton(){
  return <button className='change-prfile__button'>
    <Link to="/EditProfile" className="edit-button">Изменить</Link>
  </button>
}