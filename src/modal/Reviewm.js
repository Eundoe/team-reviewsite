import './Reviewm.css'

function ReviewDetail({Rdata}){
  return Rdata.map((item,index) => {
    return (
      <figure key={index}>
        <img src="./images/icon/person.png" alt="user" />
        <figcaption>
          <h3>{item.name}</h3>
          <p className="score">{item.score}점</p>
          <p className='reviewing'>{item.reveiw}</p>
        </figcaption>
      </figure>
    )
  })
}

function ReviewM({Rdata, Mdata, clue}){
  
  let FiltData = Mdata.filter((item) => {
    return item.name === clue
  })

  return (
    <div id="reviewmodal" className="modalbase">
      <div id="modalbox">
      <h2><img src='./images/icon/modallogo.png' alt='modallogo'/><span>영화정보</span></h2>
      <p id="mclose" onClick={() => {document.querySelector('div#reviewmodal').style.display = "none"}}><img src='./images/icon/close.png' alt='close'/></p>
        <div id="moviedata">
          <p className="video">
          <iframe width="100%" height="100%" src={FiltData[0].src} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </p>
          <div className="videoinfo">
            <p className="avgscore">{Math.floor(FiltData[0].score)}</p>
            <ul>
              <li className='director'>{FiltData[0].director}</li>
              <li className='actor'>{FiltData[0].actor}</li>
            </ul>
            <p className="story">
              {FiltData[0].story}
            </p>
          </div>
        </div>
        <div id="reviewdata">
          <ReviewDetail Rdata = {Rdata}/>
        </div>
      </div>
    </div>
  )
}

export default ReviewM