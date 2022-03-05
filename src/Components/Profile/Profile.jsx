import pic from '../../images/image-jeremy.png';

export const Profile = ({dailyStats, weeklyStats, monthlyStats}) => {
  return (
    <div className="profile-container">
          <div className="light-blue-section">
            <div className="left-side">
          <img src={pic} alt="picture of Jeremy Robson"/>
          </div>
          <div className="right-side">
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </div>
          </div>
          <div className="dark-blue-section">
            <p  onClick={dailyStats} className={`daily`}>Daily</p>
            <p  onClick={weeklyStats} className={`weekly`}>Weekly</p>
            <p onClick={monthlyStats} className={`monthly`}>Monthly</p>
          </div>
    </div>
  )
}