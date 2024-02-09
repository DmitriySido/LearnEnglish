import './AlertMessage.scss';

export default function AlertMessageFunc() {

  return (
    <div className={`alert-message__wrapper alert-message__wrapper--active'}`}>
      <h1>Это задание не доступно!</h1>
      <p>Вам нужно набрать в предыдущем разделе минимум 5 очков!</p>
    </div>
  );
}