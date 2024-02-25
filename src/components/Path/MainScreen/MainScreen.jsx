import { Link } from "react-router-dom";
import {ProgressData} from "../../Data/ProgressData";

import './MainScreen.scss'
import AlertMessageFunc from "../../AlertMessage/AlertMessage";
import { useState } from "react";
import RoadMapItem from "./RoadMapItem/RoadMapItem";
import MoreInfoBlock from "./MoreInfoBlock/MoreInfoBlock";
import RewardScreen from "../../RewardScreen/RewardScreen";
import WordPairSelection from "../TasksList/WordPairSelection/WordPairSelection";

export default function MainScreen(){
  // Сохранение прогресса для каждого уровня
  const storedTranslatePhrasesProgress = localStorage.getItem('trasnlatePhrases');
  ProgressData.trasnlatePhrases = storedTranslatePhrasesProgress ? parseInt(storedTranslatePhrasesProgress, 10) : 0;

  const storedTranslateWordsProgress = localStorage.getItem('trasnlateWords');
  ProgressData.trasnlateWords = storedTranslateWordsProgress ? parseInt(storedTranslateWordsProgress, 10) : 0;

  const storedTranslateVerbsProgress = localStorage.getItem('trasnlateVerbs');
  ProgressData.trasnlateVerbs = storedTranslateVerbsProgress ? parseInt(storedTranslateVerbsProgress, 10) : 0;

  const storedTranslateColorsProgress = localStorage.getItem('trasnlateColors');
  ProgressData.trasnlateColors = storedTranslateColorsProgress ? parseInt(storedTranslateColorsProgress, 10) : 0;

  const storedTranslateWorldProgress = localStorage.getItem('trasnlateWorld');
  ProgressData.trasnlateWorld = storedTranslateWorldProgress ? parseInt(storedTranslateWorldProgress, 10) : 0;

  const missingWordInPhraseProgress = localStorage.getItem('missingWordInPhrase');
  ProgressData.missingWordInPhrase = missingWordInPhraseProgress ? parseInt(missingWordInPhraseProgress, 10) : 0;

  const storedPairWord = localStorage.getItem('pairWord');
  ProgressData.pairWord = storedPairWord ? parseInt(storedPairWord, 10) : 0;


  const [flag, setFlag] = useState(false)

  // Функция обратного вызова для передачи в дочерний компонент
  const updateFlag = newFlag => setFlag(newFlag)

  return(
    <div className="main-screen__wrapper">
      {flag && <AlertMessageFunc />}
      <ul className="road-map__list">
            <h1 className="road-map__title">Раздел 1</h1>

            <li className="road-map__item tooltip">
            <span className="tooltiptext">Поговорим о еде</span>
              <button className="road-map__item-button">
                <Link to="/Eat" className="road-map__link">Eat</Link>
              </button>
            </li>

            <RoadMapItem
              setFlag={updateFlag}
              storedProgress1={5}
              storedProgress2={5}
              pathTo={'/TranslateColor'}
              percent={storedTranslateColorsProgress}
              tooltipText='Учим цвета'
            />

            <RoadMapItem
              setFlag={updateFlag}
              storedProgress1={storedTranslateColorsProgress}
              storedProgress2={storedTranslateColorsProgress}
              pathTo={'/TranslateVerbs'}
              percent={storedTranslateVerbsProgress}
              tooltipText='Учим глаголы'
            />

            <RoadMapItem
              setFlag={updateFlag}
              storedProgress1={storedTranslateVerbsProgress}
              storedProgress2={storedTranslateVerbsProgress}
              pathTo={'/TranslateWorld'}
              percent={storedTranslateWorldProgress}
              tooltipText='Окружающий мир'
            />

            <RoadMapItem
              setFlag={updateFlag}
              storedProgress1={storedTranslateWorldProgress}
              storedProgress2={storedTranslateWorldProgress}
              pathTo={'/TranslateWord'}
              percent={storedTranslateWordsProgress}
              tooltipText='Переводим слова'
            />

            <h1 className="road-map__title">Раздел 2</h1>

            <RoadMapItem
              setFlag={updateFlag}
              storedProgress1={storedTranslateWordsProgress}
              storedProgress2={storedTranslateWordsProgress}
              pathTo={'/TranslateTheSentences'}
              percent={storedTranslatePhrasesProgress}
              tooltipText='Переводим фразы'
            />

            <RoadMapItem
              setFlag={updateFlag}
              storedProgress1={storedTranslatePhrasesProgress}
              storedProgress2={storedTranslatePhrasesProgress}
              pathTo={'/MissingWord'}
              percent={missingWordInPhraseProgress}
              tooltipText='Пропущенное слово'
            />

            <RoadMapItem
              setFlag={updateFlag}
              storedProgress1={missingWordInPhraseProgress}
              storedProgress2={missingWordInPhraseProgress}
              pathTo={'/WordPairSelection'}
              percent={storedPairWord}
              tooltipText='Выберите пары слов'
            />
      </ul>

      <MoreInfoBlock/>
    </div>
  )
}