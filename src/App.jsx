import './App.scss';
import { useState } from 'react';
import data from './data.json';
import work from './images/icon-work.svg'
import play from './images/icon-play.svg'
import study from './images/icon-study.svg'
import exercise from './images/icon-exercise.svg'
import social from './images/icon-social.svg'
import selfCare from './images/icon-self-care.svg'

import { TimerBox } from './Components/TimerBox/TimerBox';
import { Profile } from './Components/Profile/Profile';



function App() {

  const colors = ['work', 'play', 'study', 'exercise', 'social', 'self-care']
  const svg = [work, play, study, exercise, social, selfCare]
  
  const [currentTimeFrame, selectTimeframe] = useState('weekly');
  const [dailyTextColor, dailyTextColorUpdate] = useState('');
  const [weeklyTextColor, weeklyTextColorUpdate] = useState('white');
  const [monthlyTextColor, monthlyTextColorUpdate] = useState('');
  const [previousText, previousTextUpdate] = useState('Last Week - ')
console.log(previousText)
  //functions for profile component
  const dailyClick = () => {
    selectTimeframe('daily')
    dailyTextColorUpdate('white')
    weeklyTextColorUpdate('')
    monthlyTextColorUpdate('')
    previousTextUpdate('Yesterday - ')
  }
  const weeklyClick = () => {
    selectTimeframe('weekly')
    weeklyTextColorUpdate('white')
    dailyTextColorUpdate('')
    monthlyTextColorUpdate('')
    previousTextUpdate('Last Week - ')
  }
  const monthlyClick = () => {
    selectTimeframe('monthly')
    monthlyTextColorUpdate('white')
    dailyTextColorUpdate('')
    weeklyTextColorUpdate('')
    previousTextUpdate('Last Month - ')
  }

  return (
  
    <div className="container">
        <Profile dailyStats={dailyClick} weeklyStats={weeklyClick} monthlyStats={monthlyClick} dailyWhiteText={dailyTextColor} weeklyWhiteText={weeklyTextColor} monthlyWhiteText={monthlyTextColor}/>
        <div className="boxes-container">
          
        {
          data.map((timer, index) => {
          
          
          return <TimerBox key={timer} title={timer.title} color={colors[index]} imagesrc={svg[index]} current={timer.timeframes[currentTimeFrame].current} previous={timer.timeframes[currentTimeFrame].previous} previousText={previousText}/>
         
          })
        }
           
      </div>
    </div>
  );
}

export default App;
