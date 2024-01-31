import { useState, useEffect } from 'react';
import './AlertMessage.scss';

export default function AlertMessageFunc() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(true);

    const timeout = setTimeout(() => {
      setFlag(false);
    }, 2000);

    // Очистка таймаута при размонтировании компонента
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`alert-message__wrapper ${flag ? 'alert-message__wrapper--active' : ''}`}>
      <h1>Это задание не доступно!</h1>
      <p>Вам нужно набрать в предыдущем разделе минимум 5 очков!</p>
    </div>
  );
}