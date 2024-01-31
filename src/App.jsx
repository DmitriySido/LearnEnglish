import MainScreen from './components/Path/MainScreen/MainScreen';
import TranslateColor from './components/Path/TranslateColor/TranslateColor';
import TranslateWord from './components/Path/TranslateWord/TranslateWord'
import './components/main.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TranslateTheSentences from './components/Path/TranslateTheSentences/TranslateTheSentences';
import Eat from './components/Path/Eat/Eat';
import MissingWord from './components/Path/MissingWord/MissingWord';
import Profile from './components/Path/Profile/Profile';
import Settings from './components/Path/Settings/Settings';
import Header from './components/Path/MainScreen/Header/Header';
import { useState } from 'react';
import RegistrationPopup from './components/RegistrationPopup/RegistrationPopup';
import EditProfile from './components/Path/Profile/EditProfile/EditProfile';



export default function App() {
  // Слова
  const words = [
    {en: 'School', rus: 'Школа'}, {en: 'Bed', rus: 'Кровать'},
    {en: 'Book ', rus: 'Книга'}, {en: 'Tree', rus: 'Дерево'},
    {en: 'Ball', rus: 'Мяч'}, {en: 'Carpet', rus: 'Ковер'},
    {en: 'Beer', rus: 'Пиво'}, {en: 'Curtains', rus: 'Шторы'},
    {en: 'Apple  ', rus: 'Яблоко'}, {en: 'Pillow', rus: 'Подушка'},
    {en: 'Evening ', rus: 'Вечер'}, {en: 'Armchair', rus: 'Кресло'},
    {en: 'Lemon ', rus: 'Лимон'}, {en: 'Fireplace', rus: 'Камин'},
    {en: 'Plum ', rus: 'Слива'}, {en: 'Sofa', rus: 'Диван'},
    {en: 'Morning ', rus: 'Утро'}, {en: 'Air', rus: 'Воздух'},
    {en: 'Melon ', rus: 'Дыня'}, {en: 'Wind', rus: 'Ветер'},
    {en: 'Cherry ', rus: 'Вишня'}, {en: 'Water', rus: 'Вода'},
    {en: 'Raspberry ', rus: 'Малина'}, {en: 'West', rus: 'Запад'},
    {en: 'Watermelon ', rus: 'Арбуз'}, {en: 'Rast', rus: 'Восток'},
    {en: 'Cabbage ', rus: 'Капуста'}, {en: 'North', rus: 'Север'},
    {en: 'Bird ', rus: 'Птица'}, {en: 'Animal', rus: 'Животное'},
    {en: 'Fish ', rus: 'Рыба'}, {en: 'People', rus: 'Люди'},
    {en: 'World ', rus: 'Мир'}, {en: 'Happiness', rus: 'Счастье'},
    {en: 'Apartment ', rus: 'Квартира'}, {en: 'Market', rus: 'Рынок'}
  ]

  // Побочные слова
  const sideWords = [
    'Кукла', 'Блокнот', 'Ручка', 'Мама', 'Машина', 'Собака', 'Кукуруза', 'Уверенный', 'Закрывать', 'Еда',
    'История', 'Диалог', 'Слово', 'Время', 'Театр', 'Клуб', 'Дружба', 'Кофейня', 'Студент', 'Досуг', 'Дорога'
  ]

  // Цвета
  const colors= [
    {en: 'Yellow', rus: 'Жёлтый'}, {en: 'Red', rus: 'Красный'},
    {en: 'Green', rus: 'Зелёный'}, {en: 'Orange', rus: 'Оранжевый'},
    {en: 'Blue', rus: 'Синий'}, {en: 'Purple', rus: 'Фиолетовый'},
  ]

  // Побочные Цвета
  const sideColor = ['Жёлтый','Красный','Зелёный','Оранжевый','Фиолетовый','Синий','Бардовый',]

  // Еда
  const eatWords = [
    {en: 'Bagel', rus: 'Бублик'}, {en: 'Salt', rus: 'Соль'},
    {en: 'Sugar ', rus: 'Caxap'}, {en: 'Tea', rus: 'Чай'},
    {en: 'Apple', rus: 'Яблоко'}, {en: 'Tomato', rus: 'Помидор'},
    {en: 'Beer', rus: 'Пиво'}, {en: 'Cherry', rus: 'Вишня'},
    {en: 'Hungry', rus: 'Голодный'}, {en: 'Meat', rus: 'Мясо'},
    {en: 'Breakfast', rus: 'Завтрак'}, {en: 'Egg', rus: 'Яйцо'},
    {en: 'Spicy', rus: 'Острый'}, {en: 'Lunch', rus: 'Обед'},
  ]
  // Побочные слова Еды
  const eatSideWords = [
    'Кукла', 'Блокнот', 'Ручка', 'Мама', 'Машина', 'Собака', 'Кукуруза', 'Уверенный', 'Закрывать', 'Еда',
    'История', 'Диалог', 'Слово', 'Время', 'Театр', 'Клуб', 'Дружба', 'Кофейня', 'Студент', 'Досуг', 'Дорога'
  ]

  // Фразы
  const sentencesArray = [
    {en: 'Hello my name is Dima', rus: 'Привет меня зовут Дима', id: 1},
    {en: "I love my four dogs so much!", rus: 'Я люблю моих четырех собак так сильно!', id:2},
    {en: "I'm from Ukraine", rus: 'Я из Украины', id:3},
    {en: "My cat is really small.", rus: 'Моя кошка очень маленькая', id:4},
    {en: "My old bird is really cute.", rus: 'Моя старая птица очень славная', id:5},
    {en: "Yes, i have a good dog", rus: 'Да, у меня есть хорошая собака.', id:6},
    {en: "My bird is crazy, she plays chess!", rus: 'Моя птица сумасшедшая, она играет в шахматы!', id:7},
  ]

  // Поломанная фраза
  const missingWordPhrases = [
    {
      phraseEnBroken: 'We __ all night long.',
      phraseEn: 'We danced all night long.',
      phraseRus: 'Мы танцевали всю ночь напролёт.',
      emptyWord: 'danced ',
      prepositionalWords: ['knitted', 'prepared', 'cleaned up']
    },
    {
      phraseEnBroken: 'I __ at work yesterday.',
      phraseEn: 'I was at work yesterday.',
      phraseRus: 'Вчера я был на работе.',
      emptyWord: 'was',
      prepositionalWords: ['will', 'were', 'be']
    },
    {
      phraseEnBroken: 'The Earth revolves __ the Sun.',
      phraseEn: 'The Earth revolves around the Sun.',
      phraseRus: 'Земля вращается вокруг Солнца.',
      emptyWord: 'around',
      prepositionalWords: ['near', 'never', 'actively']
    },
    {
      phraseEnBroken: 'What happens __ you quit smoking?',
      phraseEn: 'What happens when you quit smoking?',
      phraseRus: 'Что происходит, когда вы бросаете курить?',
      emptyWord: 'when',
      prepositionalWords: ['why', 'where', 'how']
    },
    {
      phraseEnBroken: 'Can you see __',
      phraseEn : 'Can you see me?',
      phraseRus: 'Ты видишь меня?',
      emptyWord: 'me?',
      prepositionalWords: ['we?', 'you?', 'he?']
    },
    
    {
      phraseEnBroken: 'She __ volleyball.',
      phraseEn: 'She played volleyball.',
      phraseRus: 'Она играла в волейбол.',
      emptyWord: 'played',
      prepositionalWords: ['prepared', 'cleaned up', 'knitted']
    },
    {
      phraseEnBroken: '__ were you last week?',
      phraseEn: 'Where were you last week?',
      phraseRus: 'Где ты был на прошлой неделе?',
      emptyWord: 'Where ',
      prepositionalWords: ['What', 'When', 'What kind of']
    },

    // {
    //   phraseEnBroken: '',
    //   phraseEn: '',
    //   phraseRus: '',
    //   emptyWord: '',
    //   prepositionalWords: []
    // },
  ]

  const [isHeaderVisible, setHeaderVisible] = useState(true);

  const stateHeaderVisible = (state) => setHeaderVisible(state)

  const storedUsername = localStorage.getItem('savedUsername');
  const [savedUsername, setSavedUsername] = useState(storedUsername || '');

  let storedObject = localStorage.getItem('userProfileData');
  storedObject = JSON.parse(storedObject);

  return(
    <div className="App container">
      {
        savedUsername ? '' : <RegistrationPopup/>
      }

      <BrowserRouter basename="/learnEnglish">
        {isHeaderVisible && <Header />}
        <Routes>
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Settings" element={<Settings/>} />

          <Route path="/EditProfile" element={<EditProfile/>} />

          <Route path="/" element={<MainScreen/>} />
          <Route path="/Eat" element={<Eat words={eatWords} stateHeader={stateHeaderVisible} sideWords={eatSideWords} tab='Eat'/>} />
          <Route path="/TranslateWord" element={<TranslateColor stateHeader={stateHeaderVisible} words={words} sideWords={sideWords} tab='Word'/>} />
          <Route path="/TranslateColor" element={<TranslateWord stateHeader={stateHeaderVisible} words={colors} sideWords={sideColor} tab='Color'/>} />
          <Route path="/TranslateTheSentences" element={<TranslateTheSentences stateHeader={stateHeaderVisible} sentencesArray={sentencesArray} tab='Translate The Sentences'/>} />
          <Route path="/MissingWord" element={<MissingWord stateHeader={stateHeaderVisible} missingWordPhrases={missingWordPhrases} tab='MissingWord'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
