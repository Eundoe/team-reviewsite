import './Write.css'



function ScoreRadio(){
  let score  = [1,2,3,4,5]
  return score.map(item => {
    return (
      <span className='wscorebox' key={item}>
        <input type='radio' name='score' value={1}/>
        <label htmlFor='score'><img src={`./images/rating/rating0${item}.png`} alt={'rating' + {item}}/><span>{item}점</span></label>
      </span>
    )
  })
}



function WriteReview(){
  return(
    <div id="writemodal" className="modalbase">
      <div id="writebox">
        <p id="wclose" onClick={() => {document.querySelector('div#writemodal').style.display = "none"}}>close</p>
        <h2><img src="" alt="logo"/> <span>나의평점 리뷰</span></h2>
        <form>
          <fieldset>
            <legend className="writeform">
              <ul>
                <li>
                  <label htmlFor="wsearch">영화검색</label>
                  <input id="wsearch" name="wsearch"/>
                </li>
                <li id='scorev'>
                <ScoreRadio/>
                  </li>
                <li>
                  <label htmlFor="wsearch">리뷰작성</label>
                  <textarea cols="30" rows="10" />
                  <span id='maxword'>180/180</span>
                </li>
              </ul>
              <button>제출하기</button>
            </legend>
          </fieldset>
        </form>
      </div>
    </div>
  )
}


export default WriteReview