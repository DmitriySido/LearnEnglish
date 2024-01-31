import SageAchievements from './SageAchievements/SageAchievements'
import './UserAchievements.scss'

export default function UserAchievements({ experience }){

  const achievementsList = [
    {
      achievementsName: 'Энтузиаст',
      achievementsIcon: '../../../../../icons/icons8-fire-48.png',
      achievementsCondition: 'Удержите ударный режим 7 дней',
      achievementsProgressBar: 0,
      maximumAmount: 7
    },
    {
      achievementsName: 'Эрудит',
      achievementsIcon: '../../../../../icons/icons8-book-100.png',
      achievementsCondition: 'Изучите 750 новых слов в рамках одного курса',
      achievementsProgressBar: 0,
      maximumAmount: 750
    },
    {
      achievementsName: 'Мудрец',
      achievementsIcon: '../../../../../icons/icons8-wise-old-man-64.png',
      achievementsCondition: 'Заработайте 4000 очков опыта',
      achievementsProgressBar: experience,
      maximumAmount: 4000
    },
  ]

  return(
    <div className='user-achievements'>
      <h2 className='user__block-title'>Достижения</h2>
      <ul className='achievements-list'>

        {
          achievementsList.map((achievement, index)=> {
            return(
              <SageAchievements
                key={index + 'achievement'}
                achievementsName={achievement.achievementsName}
                achievementsIcon={achievement.achievementsIcon}
                achievementsCondition={achievement.achievementsCondition}
                achievementsProgressBar={achievement.achievementsProgressBar}
                maximumAmount={achievement.maximumAmount}
              />
            )
          })
        }
      </ul>
    </div>
  )
}