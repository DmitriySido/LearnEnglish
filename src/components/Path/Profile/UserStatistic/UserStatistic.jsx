import './UserStatistic.scss'

export default function UserStatistic({ experience }){

  const liga = () =>{
    let ligaName
    if(experience <= 500){
      ligaName = 'Бронза'
    }else if(experience >= 1000){
      ligaName = "Серебро"
    }else if(experience >= 2000){
      ligaName = 'Золото'
    }
    return ligaName
  }

  const ligs = liga()

  return(
    <div className='user-statistics'>
      <h2 className='user__block-title'>Статистика</h2>

      <ul className='statistic-list'>
        <li className='statistic-item'>
          <p className='statistic-count'>0</p>
          <h3 className='statistic-name'>Уданый режим</h3>
        </li>
        <li className='statistic-item'>
          <p className='statistic-count'>{experience}</p>
          <h3 className='statistic-name'>Очки опыта</h3>
        </li>
        <li className='statistic-item'>
          <p className='statistic-count'>{experience === 0 ? 'Лиги нет' : ligs}</p>
          <h3 className='statistic-name'>Текущая лига</h3>
        </li>
        <li className='statistic-item'>
          <p className='statistic-count'>0</p>
          <h3 className='statistic-name'>Топ-3</h3>
        </li>
      </ul>
    </div>
  )
}