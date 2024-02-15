import experience from '../../../../foto/icons/icons8-diamond-48.png'

export default function TaskItem({ initialExperience, requiredQuantity }) {
  const progressPercentageFunc = maximumAmount => (initialExperience / maximumAmount) * 100

  return(
    <li className={initialExperience >= requiredQuantity ? "tasks-days__item tasks-days__item-done" : "tasks-days__item"}>
      <img src={experience} alt="experience icon" />
      <div className="tasks-days__item-content">
        <h3 className="tasks-days__text">Получите {initialExperience > requiredQuantity ? requiredQuantity : initialExperience}/{requiredQuantity} очков опыта</h3>
        <div className="tasks-days__progress-bar__wrapper">
          <div style={initialExperience < requiredQuantity ? {width: `${progressPercentageFunc(requiredQuantity)}%`} : {width: '100%'}} className='tasks-days__progress-bar'></div>
        </div>
      </div>

      {initialExperience >= requiredQuantity && <h3>Задание выполнено!</h3>}
  </li>
  )
}