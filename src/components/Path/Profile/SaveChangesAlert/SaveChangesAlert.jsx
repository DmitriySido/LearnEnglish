import React, { useEffect, useState } from 'react';
import './SaveChangesAlert.scss';

const SaveChangesAlert = ({ alertState, setAlertState }) => {
  useEffect(() => {
    setAlertState(true);

    const timeout = setTimeout(() => {
      setAlertState(false);
    }, 500);

    // Очистка таймаута при размонтировании компонента
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`save-changes__alert ${alertState ? 'save-changes__alert--active' : ''}`}>
    </div>
  );
}

export default SaveChangesAlert;