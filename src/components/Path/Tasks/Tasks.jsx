import MoreInfoBlock from "../MainScreen/MoreInfoBlock/MoreInfoBlock";
import ProfileMoreInfo from "../Profile/ProfileMoreInfo/ProfileMoreInfo";
import './Tasks.scss'
export default function Tasks(){
  // Получаем строку из локального хранилища
  const storedUserProfileDataString = localStorage.getItem('userProfileData')

  // Преобразовываем строку обратно в объект
  const storedUserProfileData = JSON.parse(storedUserProfileDataString)
  
  return(
    <div className="tasks">
      <div className="task__middle-content">
        <h2>Задания дня</h2>
        <MoreInfoBlock/>
      </div>

      <ProfileMoreInfo experience={storedUserProfileData && storedUserProfileData.experience} />
    </div>
  )
}