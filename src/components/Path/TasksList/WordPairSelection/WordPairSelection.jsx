import React, { useEffect, useState } from 'react';
import './WordPairSelection.scss';
import ButtonToBack from '../../../Button/ButtonToBack/ButtonToBack';
import { Link } from 'react-router-dom';
import SaveExperience from '../../../../utils/SaveExperience';
import { ProgressData } from '../../../Data/ProgressData';
import Loader from '../../../../utils/Loader/Loader';

const WordPairSelection = ({ stateHeader }) => {
  const [loader, setLoader] = useState(false)
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoader(true);

    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);

    // Очистка таймаута при размонтировании компонента
    return () => clearTimeout(timeout);
  }, []);


  const [wordPairArray, setWordPairArray] = useState([
    {
      block: [
        { pair: [{ wordEn: 'Day', id: 1 }, { wordRu: 'День', id: 1 }] },
        { pair: [{ wordEn: 'Home', id: 2 }, { wordRu: 'Дом', id: 2 }] },
        { pair: [{ wordEn: 'Night', id: 3 }, { wordRu: 'Ночь', id: 3 }] },
        { pair: [{ wordEn: 'Window', id: 4 }, { wordRu: 'Окно', id: 4 }] },
      ],
    },
    {
      block: [
        { pair: [{ wordEn: 'Story ', id: 1 }, { wordRu: 'История', id: 1 }] },
        { pair: [{ wordEn: 'Relax ', id: 2 }, { wordRu: 'Отдых', id: 2 }] },
        { pair: [{ wordEn: 'Time ', id: 3 }, { wordRu: 'Время', id: 3 }] },
        { pair: [{ wordEn: 'Week ', id: 4 }, { wordRu: 'Неделя', id: 4 }] },
      ],
    },
    {
      block: [
        { pair: [{ wordEn: 'Theatre  ', id: 1 }, { wordRu: 'Театр', id: 1 }] },
        { pair: [{ wordEn: 'Cinema ', id: 2 }, { wordRu: 'Кинотеатр', id: 2 }] },
        { pair: [{ wordEn: 'Student  ', id: 3 }, { wordRu: 'Студент', id: 3 }] },
        { pair: [{ wordEn: 'Love  ', id: 4 }, { wordRu: 'Любовь ', id: 4 }] },
      ],
    },
    {
      block: [
        { pair: [{ wordEn: 'Place  ', id: 1 }, { wordRu: 'Место', id: 1 }] },
        { pair: [{ wordEn: 'Market  ', id: 2 }, { wordRu: 'Рынок', id: 2 }] },
        { pair: [{ wordEn: 'Order  ', id: 3 }, { wordRu: 'Заказ', id: 3 }] },
        { pair: [{ wordEn: 'Food  ', id: 4 }, { wordRu: 'Еда', id: 4 }] },
      ],
    },
  ]);

  const [randomWordPair, setRandomWordPair] = useState();
  const [alertState, setAlertState] = useState(false);

  useEffect(() => {
    stateHeader(false);
  }, [stateHeader]);

  const toBackPopupAlert = () => {
    setAlertState(!alertState);
    stateHeader(true);
  };

  const getRandomObject = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const selectedObject = array[randomIndex];
    const updatedArray = array.filter((item) => item !== selectedObject);
    return { selectedObject, updatedArray };
  };

  useEffect(() => {
    const { selectedObject, updatedArray } = getRandomObject(wordPairArray);
    setRandomWordPair(selectedObject);
    setWordPairArray(updatedArray);
  }, []);

  const pairWordEn = [];
  const pairWordRu = [];

  const [suffleWordsEn, setSuffleWordsEn] = useState([]);
  const [suffleWordsRu, setSuffleWordsRu] = useState([]);

  const sufflePairWord = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (randomWordPair) {
      for (let i = 0; i < randomWordPair.block.length; i++) {
        pairWordEn.push(randomWordPair.block[i].pair[0]);
        pairWordRu.push(randomWordPair.block[i].pair[1]);
      }
    }

    setSuffleWordsEn(sufflePairWord(pairWordEn));
    setSuffleWordsRu(sufflePairWord(pairWordRu));
  }, [randomWordPair]);

  const [firstClickButton, setFirstClickButton] = useState(null);
  const [secondClickButton, setSecondClickButton] = useState(null);

  const getFirstWord = (content) => {
    setFirstClickButton(content);
  };

  const getSecondWord = (content) => {
    setSecondClickButton(content);
  };

  useEffect(() => {
    if (firstClickButton !== null && secondClickButton !== null && firstClickButton === secondClickButton) {
      setCount(count + 1);

      // Добавляем класс "inactive" к кнопкам с одинаковыми id
      setSuffleWordsEn((prevSuffleWordsEn) =>
        prevSuffleWordsEn.map((word) => (word.id === firstClickButton ? { ...word, inactive: true } : word))
      );
      setSuffleWordsRu((prevSuffleWordsRu) =>
        prevSuffleWordsRu.map((word) => (word.id === secondClickButton ? { ...word, inactive: true } : word))
      );

      // Сбрасываем выбранные слова
      setFirstClickButton(null);
      setSecondClickButton(null);
    }
  }, [firstClickButton, secondClickButton, count]);

  const buttonNext = () => {
    const { selectedObject, updatedArray } = getRandomObject(wordPairArray);
    setRandomWordPair(selectedObject);
    setWordPairArray(updatedArray);
    setCount(0);
  };

  //Save Progress
  const addProgressWords = ()=> {
    ProgressData.pairWord += 1;
    // Сохраняем обновленное значение в локальное хранилище
    localStorage.setItem('pairWord', ProgressData.pairWord);

    SaveExperience(65)
    stateHeader(true);
  }


  return (
    <>
    {loader && <Loader/>}
    {wordPairArray.length > 0 ? 
    <div className='pair__wrapper'>
      <ButtonToBack toBackPopupAlert={toBackPopupAlert} alertState={alertState} />
      <div className='pair__inner'>
        <ul>
          {suffleWordsEn.map((button, index) => (
            <li key={index}>
              <button
                className={button.inactive == true ? 'inactive' : 'buttonPair'}
                disabled={button.inactive == true ? true : false}
                onClick={() => getFirstWord(button.id)}
              >
                {button.wordEn}
              </button>
            </li>
          ))}
        </ul>
        <br />
        <ul>
          {suffleWordsRu.map((button, index) => (
            <li key={index}>
              <button
                className={button.inactive == true ? 'inactive' : 'buttonPair'}
                disabled={button.inactive == true ? true : false}
                onClick={() => getSecondWord(button.id)}
              >
                {button.wordRu}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {count >= 4 ? <button onClick={buttonNext} className='button-next'>Продолжить</button> : ''}
    </div>
      :
      <>
        <button onClick={addProgressWords}><Link to="/" className='button-to-back__center'>Закончить</Link></button>
      </>
    }
    </>
  );
};

export default WordPairSelection;


// сделать отображение когда правильно а когде неправильно ответил польз.
// добавить в конце добавление очков опыта