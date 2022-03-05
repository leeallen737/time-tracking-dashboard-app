import pic from '../../images/image-jeremy.png';

export const Profile = ({dailyStats, weeklyStats, monthlyStats, dailyWhiteText, weeklyWhiteText, monthlyWhiteText}) => {
  return (
    <div className="profile-container">
          <div className="light-blue-section">
            <div className="left-side">
          <img src={pic} alt="picture of Jeremy Robson"/>
          </div>
          <div className="right-side">
            <p>Front-End</p>
            <p>React Developer</p>
            <h2>Lee J Allen</h2>
            
          </div>
          </div>
          <div className="dark-blue-section">
            <p onClick={dailyStats} className={`daily ${dailyWhiteText}`}>Daily</p>
            <p onClick={weeklyStats} className={`weekly ${weeklyWhiteText}`}>Weekly</p>
            <p onClick={monthlyStats} className={`monthly ${monthlyWhiteText}`}>Monthly</p>
          </div>
    </div>
  )
}