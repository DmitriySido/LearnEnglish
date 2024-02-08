const ProgressData = {
  trasnlatePhrases: 0,
  trasnlateWords: 0,
  trasnlateColors: 0
};


const StatsData = [
  {
    statisticsPhrasesRight: 0,
    statisticsPhrasesWrong: 0,
  },
  {
    statisticsWordsRight: 0,
    statisticsWordsWrong: 0,
  },
  {
    statisticsColorsRight: 0,
    statisticsColorsWrong: 0,
  },
]

const UserProfileData = {
  experience: 0,
  userName: '',
  userGender: '',
  userPassword: '',
  userPhotoSrc: '',
  userRegistrationDate: '',

  initialExperience: 0,
  initialTime: 0,
}

export { ProgressData, StatsData, UserProfileData };