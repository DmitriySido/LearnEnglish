export default function SageAchievements({ achievementsName, achievementsIcon, achievementsCondition, achievementsProgressBar, maximumAmount }){
  const progressPercentage = (achievementsProgressBar / maximumAmount) * 100;

  return(
    <li className={achievementsProgressBar >= maximumAmount ? 'achievements-item not-available' : 'achievements-item'}>
      <div className='achievements-icon'>
        <img src={achievementsIcon} alt="" />
      </div>
      <div className='achievements-text'>
        <h3 className='achievements-name'>{achievementsName}</h3>
        <div className='achievements-progress-bar__wrapper'>
          <div style={achievementsProgressBar <= maximumAmount ?{width: `${progressPercentage}%`} : {width: '100%'}} className='achievements-progress-bar'></div>
        </div>
        <p className='achievements-condition'>{achievementsCondition}</p>
        <p className='current-experience'>{achievementsProgressBar}/{maximumAmount}</p>
      </div>
    </li>
  )
}