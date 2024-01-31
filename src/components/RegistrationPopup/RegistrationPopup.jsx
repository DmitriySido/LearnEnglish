import React, { useEffect, useState } from 'react';
import './RegistrationPopup.scss';
import { UserProfileData } from '../Data/ProgressData';

import manIcon from '../../foto/icons/gender/man-icon.png'

import girlIcon from '../../foto/icons/gender/girl-icon.png'
import { Link } from 'react-router-dom';

import { HashRouter as Router } from 'react-router-dom';


export default function RegistrationPopup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Boy');
  const [flag, setFlag] = useState(false)

  localStorage.setItem('userProfileData', JSON.stringify(UserProfileData));

  const handleContinueClick = () => {
      // Получаем строку из локального хранилища
      const storedUserProfileDataString = localStorage.getItem('userProfileData');
      // Преобразовываем строку обратно в объект
      const storedUserProfileData = JSON.parse(storedUserProfileDataString);

    // Сохранение в локальное хранилище
    localStorage.setItem('savedUsername', username);

    storedUserProfileData.userName = username;
    storedUserProfileData.userPassword = password;
    storedUserProfileData.userGender = gender;

    if (storedUserProfileData.userGender === 'Boy') {
      storedUserProfileData.userPhotoSrc = manIcon;
    } else {
      storedUserProfileData.userPhotoSrc = girlIcon;
    }

    const userProfileDataString = JSON.stringify(storedUserProfileData);
    // Сохраняем строку в локальном хранилище
    localStorage.setItem('userProfileData', userProfileDataString);
    window.location.reload();
  }

  return (
    <div className='registration-popup__wrapper'>
      <div className='registration-popup__inner'>
        <form className="form">
          <p id="heading">Регистрация</p>
          <div className="field">
            <input
              autoComplete="off"
              placeholder="Username"
              className="input-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              
            />
          </div>
          <div className="field">
            <input
              placeholder="Password"
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='button-wrapper'>
            <label>
              <h2>Boy</h2>
              <input className='radioButton' type="radio" name='gender' onChange={()=> setGender('Boy')} required checked/>
            </label>
            
            <label>
              <h2>Girl</h2>
              <input className='radioButton' type="radio" name='gender' onChange={()=> setGender('Girl')} required/>
            </label>
          </div>
          {/* <button type='submit' className="button1" onClick={handleContinueClick}>
            next
          </button> */}
          <Router>
            <Link className="button1" to="/" onClick={handleContinueClick}>
              Продолжить
            </Link>
          </Router>
        </form>
      </div>
    </div>
  );
}