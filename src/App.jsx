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

  //functions for profile component
  const dailyClick = () => selectTimeframe('daily')
  const weeklyClick = () => selectTimeframe('weekly')
  const monthlyClick = () => selectTimeframe('monthly')

  return (
  
    <div className="container">
        <Profile dailyStats={dailyClick} weeklyStats={weeklyClick} monthlyStats={monthlyClick}/>
        <div className="boxes-container">
          
        {
          data.map((timer, index) => {
          
          
          return <TimerBox key={timer} title={timer.title} color={colors[index]} imagesrc={svg[index]} current={timer.timeframes[currentTimeFrame].current} previous={timer.timeframes[currentTimeFrame].previous}/>
         
          })
        }
           
      </div>
    </div>
  );
}

export default App;
