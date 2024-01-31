import React, { useEffect, useState } from 'react';
import './EditProfile.scss';

export default function EditProfile() {
  const storedUserProfileDataString = localStorage.getItem('userProfileData');
  const storedUserProfileData = JSON.parse(storedUserProfileDataString);

  const [userPhoto, setUserPhoto] = useState(storedUserProfileData.userPhotoSrc);
  const [stateEditUserName, setStateEditUserName] = useState(storedUserProfileData.userName);
  const [flag, setFlag] = useState(false);

  const handlePhotoClick = (src) => {
    setUserPhoto(src)
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
  };

  return(
    <div className="edit-pofile__wrapper">
      <h1>Аккаунт</h1>

      <div className="select-photo__block">
        <h2>Выбрать фото</h2>
        {
          storedUserProfileData.userGender === 'Boy' ?
        
          <ul className="photo-list">
            <li className="photo-item" onClick={() => handlePhotoClick("../../../../../../icons/gender/man-icon-1.png")}><img src="../../../../../../icons/gender/man-icon-1.png" alt="Man foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick("../../../../../../icons/gender/man-icon-2.png")}><img src="../../../../../../icons/gender/man-icon-2.png" alt="Man foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick("../../../../../../icons/gender/man-icon-3.png")}><img src="../../../../../../icons/gender/man-icon-3.png" alt="Man foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick("../../../../../../icons/gender/man-icon.png")}><img src="../../../../../../icons/gender/man-icon.png" alt="Man foto" /></li>
          </ul>
          :
          <ul className="photo-list">
            <li className="photo-item" onClick={() => handlePhotoClick("../../../../../../icons/gender/girl-icon-1.png")}><img src="../../../../../../icons/gender/girl-icon-1.png" alt="Girl Foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick("../../../../../../icons/gender/girl-icon-2.png")}><img src="../../../../../../icons/gender/girl-icon-2.png" alt="Girl Foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick("../../../../../../icons/gender/girl-icon-3.png")}><img src="../../../../../../icons/gender/girl-icon-3.png" alt="Girl Foto" /></li>
            <li className="photo-item" onClick={() => handlePhotoClick("../../../../../../icons/gender/girl-icon.png")}><img src="../../../../../../icons/gender/girl-icon.png" alt="Girl Foto" /></li>
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
          <button type="button" disabled={!flag} onClick={saveChanges}>
            Сохранить изменения
          </button>
        </form>
      </div>

    </div>
  )
}