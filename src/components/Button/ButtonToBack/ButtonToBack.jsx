import ToBackAlert from "../../ToBackAlert/ToBackAlert"

export default function ButtonToBack({ toBackPopupAlert, alertState }){
  const handleButtonClick = () => toBackPopupAlert()

  return(
    <>
      <div className="button-to-back__wrapper">
        <button className="button-exit" onClick={handleButtonClick}>Выйти</button>
      </div>
      {alertState && <div onClick={toBackPopupAlert} className="to-back-alert-popup__wrapper"><ToBackAlert/></div>}
    </>
  )
}