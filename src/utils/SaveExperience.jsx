import { UserProfileData } from "../components/Data/ProgressData"


export default function SaveExperience(count){
  // localStorage.setItem('userProfileData', JSON.stringify(UserProfileData));

  // Получаем строку из локального хранилища
  const storedUserProfileDataString = localStorage.getItem('userProfileData')
  // Преобразовываем строку обратно в объект
  const storedUserProfileData = JSON.parse(storedUserProfileDataString)

  storedUserProfileData.experience += count
  console.log(storedUserProfileData.experience)

  // Преобразовываем объект в строку
  const userProfileDataString = JSON.stringify(storedUserProfileData);
  // Сохраняем строку в локальном хранилище
  localStorage.setItem('userProfileData', userProfileDataString);
}