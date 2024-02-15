import React, { useState, useRef } from 'react';
import './RewardScreen.scss';
import Box from '../../foto/icons/box-icon.png';

export default function RewardScreen() {
  const countRef = useRef(0)
  const initialRewards = ['+85', '+90', '+150', '+20', '+10', '+25', '+15', '+30', '+35', '+40', '+45', '+50', '+55', '+60', '+65', '+70', '+75', '+80', '+85', '+90', '+95', '+100', '+120', '+10', '+140', '+155'];
  const [remainingRewards, setRemainingRewards] = useState([...initialRewards]);
  const [currentReward, setCurrentReward] = useState('');

  const storedUserProfileDataString = localStorage.getItem('userProfileData');
  const storedUserProfileData = JSON.parse(storedUserProfileDataString);

  const handleBox = () => {
    countRef.current++
    const randomIndex = Math.floor(Math.random() * remainingRewards.length);
    const randomElement = remainingRewards[randomIndex];

    // Update the state to show the selected reward
    setCurrentReward(randomElement);
    storedUserProfileData.experience += +randomElement
    storedUserProfileData.initialExperience = 0
    const userProfileDataString = JSON.stringify(storedUserProfileData);
    localStorage.setItem('userProfileData', userProfileDataString);

    // Remove the selected reward from the remainingRewards array
    setRemainingRewards(prevRewards =>
      prevRewards.filter((_, index) => index !== randomIndex)
    );
  };

  const stub = () => {}

  return (
    <div className={countRef.current >= 5 ? "reward__wrapper reward__wrapper-disabled" : 'reward__wrapper'}>
      <h1>Нажимайте на сундук</h1>
      <h3>{currentReward}</h3>
      <img onClick={countRef.current < 5 ? handleBox : stub} src={Box} alt="Box icon" />
    </div>
  );
}