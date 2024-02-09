import { Link } from "react-router-dom";
import CircularProgressBar from "../../../CircularProgressBar/CircularProgressBar";
import './RoadMapItem.scss'
import '../../MainScreen/MainScreen.scss'

export default function RoadMapItem({setFlag, storedProgress1, storedProgress2, pathTo, percent, tooltipText}){
  function clickOnAvaliableLink() {
    setFlag(true);
  
    setTimeout(() => {
      setFlag(false);
    }, 4200);
  }

  const stub = () => {}

  return(
    <li className={`road-map__item tooltip ${(storedProgress1 >= 2 ? '' : 'not-available')} ${percent >= 17 ? 'passed' : ''}`}>
      <span className="tooltiptext">{tooltipText}</span>
      <button onClick={storedProgress1 >= 2 ? stub : clickOnAvaliableLink} className='road-map__item-button'>
        <Link to={storedProgress2 >= 2 ? pathTo : ''} className="road-map__link">Missing Word</Link>
        <CircularProgressBar percent={percent > 0 ? percent : 0} />
      </button>
    </li> 
  )
}