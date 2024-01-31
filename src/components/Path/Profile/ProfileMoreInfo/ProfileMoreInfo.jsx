import UserExperience from './UserExperience/UserExperience'
import './ProfileMoreInfo.scss'

import DaysOnFire from './DaysOnFire/DaysOnFire';
import UserLanguage from './UserLanguage/UserLanguage';

export default function ProfileMoreInfo({ experience }){

  return(
    <div className='profile__more-info'>
      <div className='something-important'>
          <UserLanguage/>
          <DaysOnFire/>
          <UserExperience experience={experience}/>
      </div>


      <div className='subscribe-block'></div>
        
      <div className='look-for-others-block'></div>
    </div>
  )
}