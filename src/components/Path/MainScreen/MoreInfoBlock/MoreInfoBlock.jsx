import './MoreInfoBlock.scss'

import league from '../../../../foto/icons/league/league-gold.png'
import experience from '../../../../foto/icons/icons8-diamond-48.png'
import timerIcon from '../../../../foto/icons/timer-icon.png'
import { useEffect } from 'react';

export default function MoreInfoBlock(){

  // Получаем строку из локального хранилища
  const storedUserProfileDataString = localStorage.getItem('userProfileData');
  // Преобразовываем строку обратно в объект
  const storedUserProfileData = JSON.parse(storedUserProfileDataString);

  function progressPercentageFunc(maximumAmount){
    return (storedUserProfileData.initialExperience / maximumAmount) * 100;
  }
  
  useEffect(() => {
    // Установить таймер для выполнения через 1 минут
    const timer = setInterval(() => {
      if(storedUserProfileData.initialExperience >= 30){
        storedUserProfileData.initialExperience = 0
        const userProfileDataString = JSON.stringify(storedUserProfileData);
        localStorage.setItem('userProfileData', userProfileDataString);
      }

      clearInterval(timer);
    }, 60000);

    return () => clearInterval(timer);
  }, [storedUserProfileData.initialExperience])

  
  return(
      <div className="more-info">
        <div className="more-info__content">
          <h2>Задания дня</h2>
          <ul className="tasks-days__list">

            <li className={storedUserProfileData.initialExperience >= 75 ? "tasks-days__item tasks-days__item-done" : "tasks-days__item"}>
              <img src={experience} alt="experience icon" />
              <div className="tasks-days__item-content">
                <h3 className="tasks-days__text">Получите {storedUserProfileData.initialExperience > 75 ? '75' : storedUserProfileData.initialExperience}/75 очков опыта</h3>
                <div className="tasks-days__progress-bar__wrapper">
                  <div style={storedUserProfileData.initialExperience < 75 ? {width: `${progressPercentageFunc(75)}%`} : {width: '100%'}} className='tasks-days__progress-bar'></div>
                </div>
              </div>

              {storedUserProfileData.initialExperience >= 75 && <h3>Задание скоро обновиться!</h3>}
            </li>

            <li className={storedUserProfileData.initialExperience >= 55 ? "tasks-days__item tasks-days__item-done" : "tasks-days__item"}>
              <img src={experience} alt="experience icon" />
              <div className="tasks-days__item-content">
                <h3 className="tasks-days__text">Бонус серии: заработайте {storedUserProfileData.initialExperience > 55 ? '55' : storedUserProfileData.initialExperience}/55 очков опыта</h3>
                <div className="tasks-days__progress-bar__wrapper">
                  <div style={storedUserProfileData.initialExperience < 55 ? {width: `${progressPercentageFunc(55)}%`} : {width: '100%'}} className='tasks-days__progress-bar'></div>
                </div>
              </div>

              {storedUserProfileData.initialExperience >= 55 && <h3>Задание скоро обновиться!</h3>}
            </li>

            <li className="tasks-days__item">
              <img src={timerIcon} alt="timer icon" />
              <div className="tasks-days__item-content">
                <h3 className="tasks-days__text">Проведите 5 минут за изучением языка</h3>
                <div className="tasks-days__progress-bar__wrapper">
                  <div className="tasks-days__progress-bar"></div>
                </div>
              </div>
            </li>

          </ul>
        </div>


        <div className="more-info__content">
          <h2>Золотая лига</h2>
          <div className="more-info__inner">
            <img className="more-info__icon" src={league} alt="league" />
            <p className="more-info__text">Пройдите урок, чтобы войти в недельный рейтинг и сразиться с другими учащимися</p>
          </div>
          <button className="more-info__button">Обзор лиги</button>
        </div>
      </div>
  )
}