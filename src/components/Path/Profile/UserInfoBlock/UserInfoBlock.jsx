import EdipProfileButton from './EdipProfileButton/EdipProfileButton'
import './UserInfoBlock.scss'

import checkMark from '../../../../foto/check-mark-done.png'

export default function UserInfoBlock({ userName, userGender, userPhotoSrc }){
  return(
    <div className="user-info__block">
      <div className='user-text-content'>
        <h2 className="user-name">
          {userName ? userName : 'User_45302'}
        </h2>
        <button className='user-language__button'>
          <img src={checkMark} alt="" />
        </button>
      </div>

      <div className="user-foto">
        {
          userGender === 'Boy'
            ?
            <img src={userPhotoSrc} alt="Man foto" />
            :
            <img src={userPhotoSrc} alt="Girl Foto" />
        }

      </div>
      <EdipProfileButton/>
    </div>
  )
}