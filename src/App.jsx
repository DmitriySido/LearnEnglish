import MainScreen from './components/Path/MainScreen/MainScreen';
import TranslateColor from './components/Path/TasksList/TranslateColor/TranslateColor';
import TranslateWord from './components/Path/TasksList/TranslateWord/TranslateWord'
import { Routes, Route, HashRouter } from "react-router-dom";
import TranslateTheSentences from './components/Path/TasksList/TranslateTheSentences/TranslateTheSentences';
import Eat from './components/Path/TasksList/Eat/Eat';
import MissingWord from './components/Path/TasksList/MissingWord/MissingWord';
import Profile from './components/Path/Profile/Profile';
import Header from './components/Path/MainScreen/Header/Header';
import { useState } from 'react';
import RegistrationPopup from './components/RegistrationPopup/RegistrationPopup';
import EditProfile from './components/Path/Profile/EditProfile/EditProfile';
import TranslateVerbs from './components/Path/TasksList/TranslateVerbs/TranslateVerbs';
import TranslateWorld from './components/Path/TasksList/TranslateWorld/TranslateWorld';

import './components/main.scss'
import Tasks from './components/Path/Tasks/Tasks';
import RewardScreen from './components/RewardScreen/RewardScreen';
import WordPairSelection from './components/Path/TasksList/WordPairSelection/WordPairSelection';


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
    {en: 'Hobby', rus: 'Хобби'}, {en: 'Collect', rus: 'Коллекционировать'},
    {en: 'Passion', rus: 'Увлечение'}, {en: 'Hunter', rus: 'Охотник'},
    {en: 'Camera', rus: 'Фотоаппарат'}, {en: 'Frame', rus: 'Рамка'},

    {en: 'Photography', rus: 'Фотография'}, {en: 'Hotel', rus: 'Гостиница'},
    {en: 'Snapshot', rus: 'Снимок'}, {en: 'Neighbour', rus: 'Сосед'},
    {en: 'Sew', rus: 'Шить'}, {en: 'Stairs', rus: 'Лестница'},

    {en: 'Key', rus: 'Ключ'}, {en: 'Hall', rus: 'Холл'},
    {en: 'Bathroom', rus: 'Ванная'}, {en: 'Kitchen', rus: 'Кухня'},
    {en: 'Glass', rus: 'Стекло'}, {en: 'Wash', rus: 'Стирать'},
  ]

  // Побочные Цвета
  const sideColor = [
    'отопление','штекер','розетка','вентилятор','печь','дрова','уголь', 
    'жена','щетка','шторы','кровать','унитаз','счетчик','лампочка',
    'дедушка','мусор','часы','диван','душ','покрытие','морозильник',
    'веник','метла','тумбочка','комод','печь','обои','обогревать',
    ]

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
  ]

  // Глаголы №1
  const verbsArray = [
    {en: 'To be', rus: 'Быть'}, {en: 'To do', rus: 'Делать'},
    {en: 'To see', rus: 'Видеть'}, {en: 'To feel', rus: 'Чувствовать'},
    {en: 'To hear', rus: 'Слышать'}, {en: 'To run', rus: 'Бежать'},
    {en: 'To make', rus: 'Сделать'}, {en: 'To get', rus: 'Получать'},
    {en: 'To cook', rus: 'Готовить'}, {en: 'To sing', rus: 'Петь'},
    {en: 'To say', rus: 'Говорить'}, {en: 'To speak', rus: 'Разговаривать'},
    {en: 'To take', rus: 'Брать'}, {en: 'To tell', rus: 'Рассказывать'},
    {en: 'To sit', rus: 'Садиться'}, {en: 'To stand', rus: 'Стоять'},
    {en: 'To smile', rus: 'Улыбаться'}, {en: 'To laugh', rus: 'Смеяться'},
    {en: 'To close', rus: 'Закрывать'}, {en: 'To open', rus: 'Открывать'},
    {en: 'To love', rus: 'Любить'}, {en: 'To like', rus: 'Нравиться'},
    {en: 'To bring', rus: 'Приносить'}, {en: 'To give', rus: 'Давать'},
  ]

  const sideVerbsArray = [
    'Дышать','Покупать','Продавать','Забывать','Верить','Иметь','Идти',
    'Знать','Думать','Приходить','Хотеть','Использовать',
    'Находить','Работать','Есть','Пить','Писать','Читать','Звонить','Пытаться','Нуждаться',
    'Становиться','Класть','Оставлять','Платить','Играть','Молиться',
  ]

  // Окружающий мир №1
  const worldArray = [
    {en: 'Air', rus: 'Воздух'}, {en: 'Tree ', rus: 'Дерево'},
    {en: 'Wind', rus: 'Ветер'}, {en: 'Sea ', rus: 'Море'},
    {en: 'Water', rus: 'Вода'}, {en: 'Ocean ', rus: 'Океан'},
    {en: 'West', rus: 'Запад'}, {en: 'Rock ', rus: 'Скала'},
    {en: 'East', rus: 'Восток'}, {en: 'Plant ', rus: 'Растение'},
    {en: 'North', rus: 'Север'}, {en: 'Flower ', rus: 'Цветок'},
    {en: 'South', rus: 'Юг'}, {en: 'Forest ', rus: 'Лес'},

    {en: 'Day ', rus: 'День'}, {en: 'Person  ', rus: 'Личность'},
    {en: 'Evening ', rus: 'Вечер'}, {en: 'Night  ', rus: 'Ночь'},
    {en: 'Life ', rus: 'Жизнь'}, {en: 'Morning ', rus: 'Утро'},
  ]

  const sideWorldsArray = [
    'Гора','Земля','Дом','Огонь','Страна','Животное','Птица','Рыба','Насекомое','Город','Мир','Играть',
    'Держать','Любовь','Дядя','Работа','История','Заказ','Слово','Неделя','Дистанция','Театр','Поведение','Вечеринка',
  ]

  const [isHeaderVisible, setHeaderVisible] = useState(true);

  const stateHeaderVisible = (state) => setHeaderVisible(state)

  const storedUsername = localStorage.getItem('savedUsername');
  const [savedUsername, setSavedUsername] = useState(storedUsername || '');

  let storedObject = localStorage.getItem('userProfileData');
  storedObject = JSON.parse(storedObject);

  const storedUserProfileDataString = localStorage.getItem('userProfileData');
  const storedUserProfileData = JSON.parse(storedUserProfileDataString);

  return(
    <>
      <div className="App container">
      {storedUserProfileData ? storedUserProfileData.initialExperience >= 175 && <RewardScreen/> : ''}
      { savedUsername ? '' : <RegistrationPopup/> }
      <HashRouter basename='/'>
        {isHeaderVisible && <Header />}
        <Routes>
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Settings" element={<EditProfile/>} />
          <Route path="/Tasks" element={<Tasks/>} />

          <Route path="/EditProfile" element={<EditProfile/>} />

          <Route path="/" element={<MainScreen/>} />
          <Route path="/" element={<MainScreen/>} />

          <Route path="/Eat" element={<Eat words={eatWords} stateHeader={stateHeaderVisible} sideWords={eatSideWords} tab='Eat'/>} />
          <Route path="/TranslateVerbs" element={<TranslateVerbs stateHeader={stateHeaderVisible} words={verbsArray} sideWords={sideVerbsArray} tab='Verbs'/>} />

          <Route path="/WordPairSelection" element={<WordPairSelection stateHeader={stateHeaderVisible} tab='Par Word'/>} />

          <Route path="/TranslateWorld" element={<TranslateWorld stateHeader={stateHeaderVisible} words={worldArray} sideWords={sideWorldsArray} tab='World'/>} />
          
          <Route path="/TranslateWord" element={<TranslateColor stateHeader={stateHeaderVisible} words={words} sideWords={sideWords} tab='Word'/>} />
          <Route path="/TranslateColor" element={<TranslateWord stateHeader={stateHeaderVisible} words={colors} sideWords={sideColor} tab='Color'/>} />
          <Route path="/TranslateTheSentences" element={<TranslateTheSentences stateHeader={stateHeaderVisible} sentencesArray={sentencesArray} tab='Translate The Sentences'/>} />
          <Route path="/MissingWord" element={<MissingWord stateHeader={stateHeaderVisible} missingWordPhrases={missingWordPhrases} tab='MissingWord'/>} />
        </Routes>
      </HashRouter>
    </div>
    </>
  )
}

// Добавить отображение при нажатии на задание в главном меню сколько начислиться очков опыта за прохождение
// ВОЗМОЖНО ДОБАВИТЬ СПРАВОЧНИК ПЕРЕД КАЖДЫМ НОВЫМ РАЗДЕЛОМ И ИСПОЛЬЗОВАТЬ API ГОЛОСА АНГЛИЙСКИГ СЛОВ КАК В DUOLINGO
// ВОЗМОЖНО ДОБАВАИТЬ МОТИВАЦИОННЫЕ ЭМОДЗИ ПРИ ПРОХОЖДЕНИИ ЗАДАНИЯ
// адаптация


// ПОЧИСТИТЬ SCSS КОД, УБРАТЬ КОНСОЛЬЛОГИ И ЛИШНИЕ КОММЕНТАРИИ
// дОБАВИТЬ ИКОНКИ В *ПРОФИЛЬ-СТАТИСТИКА*
// СДЕЛАТЬ ЛОГИКУ ДЛЯ ДОСТИЖЕНИЯ *ЭРУДИТ* - ЧТОБЫ ЭТО ЗАДАНИЕ ВЫПОЛНИТЬ НУЖНО ПРОЙТИ 17/17 ПЕРЕВОД СЛОВ, ЦВЕТА, ФРАЗЫ
// ДОБАВИТЬ FAVICON 