

export const TimerBox = ({ title, current, previous, color, imagesrc, previousText }) => {
  
  
  console.log(previousText)
  return (
    <div className="box-container">
            <div className={`box ${color}`}>
            <img src={imagesrc} />
            <div className="inner-box">
              <div className="upper">
                <h4 className="activity" >{title}</h4>
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
              </div>
              <div className="lower">
                <h1 className="current">{current}hrs</h1>
                <span>
                <p className="previous">{previousText}{previous}hrs</p>
                </span>
              </div>
            </div>
            </div>
          </div>
  )
}