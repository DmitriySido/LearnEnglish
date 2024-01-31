import ButtonNotPressed from "../Button/ButtonNotPressed";
import './RenderWords.scss'


export default function RenderWords({ count, randomWord, shuffledArray, getWord}){
  
  const handleButtonClick = content => getWord(content)

  return(
    <div className={count === 5 ? 'content-block content-block__disabled' : 'content-block'}>
      <h2 className="random-text">{randomWord.en}</h2>
      <ul className="word__wrapper">
        {shuffledArray.map((word, index) => <li key={index} onClick={() => handleButtonClick(word)}><ButtonNotPressed>{word}</ButtonNotPressed></li>)}
      </ul>
    </div>
  )
}