const ResetProgress = () => {
  const resetProgress = () => {
    localStorage.clear()
    window.location.reload()
  }

  return <button onClick={resetProgress} type='submit' className='delete-progress__button'>Сбросить прогресс</button>
}

export default ResetProgress