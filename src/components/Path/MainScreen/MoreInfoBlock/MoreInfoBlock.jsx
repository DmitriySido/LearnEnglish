import './MoreInfoBlock.scss'

import league from '../../../../foto/icons/league/league-gold.png'
import experience from '../../../../foto/icons/icons8-diamond-48.png'
import timerIcon from '../../../../foto/icons/timer-icon.png'
import { useEffect } from 'react';
import TaskItem from './TaskItem';

export default function MoreInfoBlock(){

  // Получаем строку из локального хранилища
  const storedUserProfileDataString = localStorage.getItem('userProfileData');
  // Преобразовываем строку обратно в объект
  const storedUserProfileData = JSON.parse(storedUserProfileDataString);
  
  useEffect(() => {
    // Установить таймер для выполнения через 1 минут
    const timer = setInterval(() => {
      if(storedUserProfileData.initialExperience >= 175){
        storedUserProfileData.initialExperience = 0
        storedUserProfileData.experience += 100
        const userProfileDataString = JSON.stringify(storedUserProfileData);
        localStorage.setItem('userProfileData', userProfileDataString);
      }

      clearInterval(timer);
    }, 10);

    return () => clearInterval(timer);
  }, [storedUserProfileData.initialExperience])

  
  return(
      <div className="more-info">
        <div className="more-info__content">
          <h2>Задания дня</h2>
          <ul className="tasks-days__list">

            <TaskItem initialExperience={storedUserProfileData.initialExperience} requiredQuantity={175} />
            <TaskItem initialExperience={storedUserProfileData.initialExperience} requiredQuantity={55} />

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