import { useEffect, useState } from "react";
import ButtonToBack from "../../Button/ButtonToBack/ButtonToBack";
import ButtonNotPressed from "../../Button/ButtonNotPressed";
import {ProgressData, StatsData} from "../../Data/ProgressData";
import { Link } from "react-router-dom";
import SaveExperience from "../../../utils/SaveExperience";
import Loader from "../../../utils/Loader/Loader";

export default function TranslateTheSentences({ sentencesArray, stateHeader }){
  //Откладываем изменения состояния хеадера до рендеринга app
  useEffect(() => {stateHeader(false)}, [stateHeader])

  // Состояние кнопки *Выйти*
  const [alertState, setAlertState] = useState(false)
  const toBackPopupAlert = () => {
    setAlertState(!alertState)
    stateHeader(true);
  }

  // Состояние кнопки *Начать*
  const [stateButton, setStateButton] = useState(false)

  // Состояние Новой фразы
  const [newRandomSentences, setNewRandomSentences] = useState('')
  const [shuffledArray, setShuffledArray] = useState([]) // Состояние перемешанного массива
  

  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  // Выбранное слово
  const [selectedWords, setSelectedWords] = useState([])

  const body = document.querySelector('body')

  const [loader, setLoader] = useState(false)

  // Рандомная Фраза
  function createRandomSentences() {
    setStateButton(true)
  
    // Рандомное приложение из массива
    const randomSentences = sentencesArray[Math.floor(Math.random() * sentencesArray.length)]
    setNewRandomSentences(randomSentences)
  
    const arrayOfWords = randomSentences.rus.split(' ')
  
    // Перемешиваем массив arrayOfWords
    const shuffledWords = shuffleArray([...arrayOfWords])
    setShuffledArray(shuffledWords)
  }

  // Проверка на правильность нажатой кнопки
  function isCheck(){
    setTimeout(function() {setFlag(false)}, 0)

    body.style.background = '#006123'
    setTimeout(function() {body.style.background = '#131F24'}, 800)
    setCount(count + 1)
    setShuffledArray([])
    setSelectedWords([])
    setNewRandomSentences('')

    createRandomSentences()
    
  }

  // Получаем содержимое нажатой кнопки
  const getWord = (content) => {
    // Удаляем выбранное слово из shuffledArray
    const updatedShuffledArray = shuffledArray.filter(word => word !== content)
    setShuffledArray(updatedShuffledArray)
    
    // Добавляем выбранное слово в selectedWords
    setSelectedWords(prevSelectedWords => {
      const newSelectedWords = [...prevSelectedWords, content]
      if(newRandomSentences.rus === newSelectedWords.join(' ')){
        setFlag(true)
        setTimeout(isCheck, 500)

      }
      if(updatedShuffledArray.length == 0 & newRandomSentences.rus !== newSelectedWords.join(' ')){
        setFlag(true)

        setTimeout(function() {
          setFlag(false)
          body.style.background = '#270505'
          count > 0 && setCount(count - 1)
        }, 800)
        setTimeout(function() {body.style.background = '#131F24'}, 1600)
      }
      return newSelectedWords
    })
  }


  //Удаление кнопки
  const handlePhraseButtonClick = (word) => {
    // Удаляем слово из selectedWords
    const updatedSelectedWords = selectedWords.filter(selectedWord => selectedWord !== word)
    setSelectedWords(updatedSelectedWords)
  
    // Добавляем слово обратно в shuffledArray
    setShuffledArray(prevShuffledArray => [...prevShuffledArray, word])
  }
  
  // Функция для перемешивания массива
  const shuffleArray = array => array.sort(() => Math.random() - 0.5)

  //Save Progress
  function addProgress() {
    // Увеличиваем прогресс на 1
    ProgressData.trasnlatePhrases += 1;
  
    // Сохраняем обновленное значение в локальное хранилище
    localStorage.setItem('trasnlatePhrases', ProgressData.trasnlatePhrases);

    SaveExperience(85)
    stateHeader(true);
  }

  useEffect(() => {
    setLoader(true);

    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);

    // Очистка таймаута при размонтировании компонента
    return () => clearTimeout(timeout);
  }, []);

  return(
    <div>
      {loader && <Loader/>}

      <ButtonToBack toBackPopupAlert={toBackPopupAlert} alertState={alertState}/>

      <button className={stateButton === true ? 'disabled-button' : 'active-button'} onClick={createRandomSentences}>Начать</button>
      {stateButton === true &&
      <div className={count === 2 ? 'content-block content-block__phrases content-block__disabled' : 'content-block content-block__phrases'}>
        <h2 className="random-text random-text__phrases">{newRandomSentences.en}</h2>
        {flag && <p className="check">Проверка...</p>}
        <p className="count">Count: {count}</p>
        <ul className="phrases__wrapepr">
          {selectedWords.map((word, index) => (
            <li key={index}>
              <button className="button-phrasess" onClick={() => handlePhraseButtonClick(word)}>
                {word}
              </button>
            </li>
          ))}
        </ul>

        <ul className="word__wrapper">
          {shuffledArray.map((word, index) => (
            <li onClick={() => getWord(word)} key={index}>
              <ButtonNotPressed>{word}</ButtonNotPressed>
            </li>
          ))}
        </ul>
      </div>
      }
      {count === 2 && <h2 className="plus-experience">+85 очков опыта!</h2>}
      {count === 2 && <button onClick={addProgress}><Link to="/" className='button-to-back__center'>Закончить</Link></button>}
    </div>
  )
}