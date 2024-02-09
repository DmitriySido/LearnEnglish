import './Reward.scss'
import experience from '../../../foto/icons/icons8-diamond-48.png'
export default function Reward(){

  return(
    <div className="reward-wrapper">
      <img src={experience} alt="experience icon" />
      <h3>+100 очков опыта</h3>
    </div>
  )
}