import { useEffect, useState } from "react";
import ButtonNotPressed from "../../../Button/ButtonNotPressed"
import ButtonToBack from "../../../Button/ButtonToBack/ButtonToBack"
import { Link } from "react-router-dom";
import { ProgressData } from "../../../Data/ProgressData";
import SaveExperience from "../../../../utils/SaveExperience";
import Loader from "../../../../utils/Loader/Loader";

export default function MissingWord({ missingWordPhrases, stateHeader }){
  //Откладываем изменения состояния хеадера до рендеринга app
  useEffect(() => {stateHeader(false)}, [stateHeader])

  const [randomElement, setRandomElement] = useState({})
  const [responseArray, setResponseArray] = useState([])

  const [alertState, setAlertState] = useState(false)
  const [stateButton, setStateButton] = useState(false)
  const [count, setCount] = useState(0)

  const [loader, setLoader] = useState(false)

  function randomPhrases() {
    setStateButton(true)
    const randomIndex = Math.floor(Math.random() * missingWordPhrases.length)

    // Получение случайного элемента
    let newRandomElement = missingWordPhrases[randomIndex]
    console.log(newRandomElement.emptyWord)

    const newResponseArray = []
    newResponseArray.push(newRandomElement.emptyWord)
    newResponseArray.push(...newRandomElement.prepositionalWords)

    newResponseArray.sort(() => Math.random() - 0.5)

    setRandomElement(newRandomElement)
    setResponseArray(newResponseArray)
  }

  const body = document.querySelector("body")
  const getWord = (content) => {
    // Проверка на правильность нажатой кнопки
    if (content === randomElement.emptyWord) {
      setCount(count + 1)
      body.style.background = "#099121"
      setTimeout(function () {body.style.background = '#131F24'}, 800)
    } else {
      count < 0 && setCount(count - 1)
      body.style.background = "#310404"
      setTimeout(function () {body.style.background = '#131F24'}, 800)
    }
    randomPhrases()
  }

  const toBackPopupAlert = () => {
    setAlertState(!alertState)
    stateHeader(true);
  }

  //Save Progress Word
  const addProgressWords = ()=> {
    ProgressData.missingWordInPhrase += 1;
    // Сохраняем обновленное значение в локальное хранилище
    localStorage.setItem('missingWordInPhrase', ProgressData.missingWordInPhrase);

    SaveExperience(65)
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

  return (
    <>

      {loader && <Loader/>}
      <ButtonToBack toBackPopupAlert={toBackPopupAlert} alertState={alertState}/>

      <button className={stateButton === true ? 'disabled-button' : 'active-button'} onClick={randomPhrases}>Начать</button>

      {stateButton === true && <p className="count">Count: <span>{count}</span></p>}

      <div className={count === 5 ? 'content-block content-block__disabled' : 'content-block'}>
        <h2 className="random-text">{randomElement.phraseRus}</h2>
        <h1 className="random-text">{randomElement.phraseEnBroken}</h1>
        <ul className="word__wrapper">
          {responseArray.map((button, index) => (
            <li onClick={() => getWord(button)} key={index + "34"}>
              <ButtonNotPressed>{button}</ButtonNotPressed>
            </li>
          ))}
        </ul>
      </div>
      
      {count === 5 && <h2 className="plus-experience">+65 очков опыта!</h2>}
      {count === 5 && <button onClick={addProgressWords}><Link to="/" className='button-to-back__center'>Закончить</Link></button>}
    </>
  )
}