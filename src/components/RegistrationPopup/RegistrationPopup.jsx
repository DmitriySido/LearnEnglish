import React, { useEffect, useState } from 'react';
import './RegistrationPopup.scss';
import { UserProfileData } from '../Data/ProgressData';
// import '../../../public/icons/gender/man-icon.png'

export default function RegistrationPopup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  localStorage.setItem('userProfileData', JSON.stringify(UserProfileData));

  const handleContinueClick = () => {
    // Сохранение в локальное хранилище
    localStorage.setItem('savedUsername', username);

    // Получаем строку из локального хранилища
    const storedUserProfileDataString = localStorage.getItem('userProfileData')
    // Преобразовываем строку обратно в объект
    const storedUserProfileData = JSON.parse(storedUserProfileDataString)

    storedUserProfileData.userName = username
    storedUserProfileData.userPassword = password
    storedUserProfileData.userGender = gender

    if(storedUserProfileData.userGender === 'Boy'){
      storedUserProfileData.userPhotoSrc = '../../../../icons/gender/man-icon.png'
    }else{
      storedUserProfileData.userPhotoSrc = '../../../../icons/gender/girl-icon.png'
    }


    const userProfileDataString = JSON.stringify(storedUserProfileData);
    // Сохраняем строку в локальном хранилище
    localStorage.setItem('userProfileData', userProfileDataString);
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
              <input className='radioButton' type="radio" name='gender' onChange={()=> setGender('Boy')} required/>
            </label>
            
            <label>
              <h2>Girl</h2>
              <input className='radioButton' type="radio" name='gender' onChange={()=> setGender('Girl')} required/>
            </label>
          </div>
          <button type='submit' className="button1" onClick={handleContinueClick}>
            Продолжить
          </button>
        </form>
      </div>
    </div>
  );
}