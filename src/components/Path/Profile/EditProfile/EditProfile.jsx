import React, { useEffect, useState } from 'react';
import './EditProfile.scss';

import manIcon1 from '../../../../foto/icons/gender/man-icon-1.png'
import manIcon2 from '../../../../foto/icons/gender/man-icon-2.png'
import manIcon3 from '../../../../foto/icons/gender/man-icon-3.png'
import manIcon4 from '../../../../foto/icons/gender/man-icon.png'

import girlIcon1 from '../../../../foto/icons/gender/girl-icon-1.png'
import girlIcon2 from '../../../../foto/icons/gender/girl-icon-2.png'
import girlIcon3 from '../../../../foto/icons/gender/girl-icon-3.png'
import girlIcon4 from '../../../../foto/icons/gender/girl-icon.png'
import ResetProgress from './ResetProgress/ResetProgress';
import SaveChangesAlert from '../SaveChangesAlert/SaveChangesAlert';

export default function EditProfile() {
  const storedUserProfileDataString = localStorage.getItem('userProfileData');
  const storedUserProfileData = JSON.parse(storedUserProfileDataString);

  const [userPhoto, setUserPhoto] = useState(storedUserProfileData.userPhotoSrc);
  const [stateEditUserName, setStateEditUserName] = useState(storedUserProfileData.userName);
  const [flag, setFlag] = useState(false);
  const [alertState, setAlertState] = useState(false)

  const handlePhotoClick = (src) => {
    setUserPhoto(src)
    
    // Сообщение что произошло сохранение
    setAlertState(true)

    setTimeout(()=>{
      setAlertState(false)
    },1000)
  }

  useEffect(() => {
    storedUserProfileData.userPhotoSrc = userPhoto;
    const userProfileDataString = JSON.stringify(storedUserProfileData);
    localStorage.setItem('userProfileData', userProfileDataString);
  }, [userPhoto]);

  const editUserName = (event) => {
    const newValue = event.target.value;
    setStateEditUserName(newValue);
    setFlag(newValue !== storedUserProfileData.userName);
  };

  const saveChanges = () => {
    storedUserProfileData.userName = stateEditUserName;
    const userProfileDataString = JSON.stringify(storedUserProfileData);
    localStorage.setItem('userProfileData', userProfileDataString);
    setFlag(false);

    // Сообщение что произошло сохранение
    setAlertState(true)

    setTimeout(()=>{
      setAlertState(false)
    },600)
  };


  return(
    <div className="edit-pofile__wrapper">
      <SaveChangesAlert alertState={alertState} setAlertState={setAlertState}/>
      <h1>Аккаунт</h1>

      <div className="select-photo__block">
        <h2>Выбрать фото</h2>
        {
          storedUserProfileData.userGender === 'Boy' ?
        
          <ul className="photo-list">
            <li className="photo-item" onClick={() => handlePhotoClick(manIcon1)}><img src={manIcon1} alt="Man foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick(manIcon2)}><img src={manIcon2} alt="Man foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick(manIcon3)}><img src={manIcon3} alt="Man foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick(manIcon4)}><img src={manIcon4} alt="Man foto" /></li>
          </ul>
          :
          <ul className="photo-list">
            <li className="photo-item" onClick={() => handlePhotoClick(girlIcon1)}><img src={girlIcon1} alt="Girl Foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick(girlIcon2)}><img src={girlIcon2} alt="Girl Foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick(girlIcon3)}><img src={girlIcon3} alt="Girl Foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick(girlIcon4)}><img src={girlIcon4} alt="Girl Foto" /></li>
          </ul>
        }
      </div>

      <div className="edit-name">
        <h2>Имя</h2>
        <form action="#">
          <input
            type="text"
            name="edit name"
            onChange={editUserName}
            placeholder={storedUserProfileData.userName}
          />
          <br />
          <button className='save-changes__button' type="button" disabled={!flag} onClick={saveChanges}>
            Сохранить изменения
          </button>
        </form>
      </div>

        <ResetProgress/>
    </div>
  )
}