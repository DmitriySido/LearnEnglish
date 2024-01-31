import React, { useState } from 'react';
import './Profile.scss'
import UserInfoBlock from './UserInfoBlock/UserInfoBlock';
import ProfileMoreInfo from './ProfileMoreInfo/ProfileMoreInfo';
import UserStatistic from './UserStatistic/UserStatistic';
import UserAchievements from './UserAchievements/UserAchievements';

export default function Profile(){
  // Получение объекта из локального хранилища
  const storedUsername = localStorage.getItem('savedUsername')
  const [savedUsername, setSavedUsername] = useState(storedUsername || '')

  // Получаем строку из локального хранилища
  const storedUserProfileDataString = localStorage.getItem('userProfileData')

  // Преобразовываем строку обратно в объект
  const storedUserProfileData = JSON.parse(storedUserProfileDataString)


  return(
    <div className="profile">
      <div className="profile__middle-content"> 
        <UserInfoBlock userName={storedUserProfileData.userName} userGender={storedUserProfileData.userGender} userPhotoSrc={storedUserProfileData.userPhotoSrc}/>

        <UserStatistic experience={storedUserProfileData && storedUserProfileData.experience}/>

        <UserAchievements experience={storedUserProfileData && storedUserProfileData.experience}/>
      </div>

      <ProfileMoreInfo experience={storedUserProfileData && storedUserProfileData.experience} />
    </div>
  )
}