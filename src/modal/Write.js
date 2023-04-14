import { useState } from 'react'
import './Write.css'



function ScoreRadio(){
  let score  = [1,2,3,4,5]
  return score.map(item => {
    return (
      <span className='wscorebox' key={item}>
        <input type='radio' name='score' value={item}/>
        <label htmlFor='score'><img src={`./images/rating/rating0${item}.png`} alt={'rating' + {item}}/><span>{item}점</span></label>
      </span>
    )
  })
}




function WriteRcmd({Bdata, Rcmd, setReviewrcmd}){
  if(Rcmd === "" || Rcmd.length < 1 || /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(Rcmd)){
    return false
  }
  else{
    let Rcdata = Bdata.filter((item) => {
      return item.name.replace(/(\s*)/g,"").toLowerCase().includes(Rcmd.toLowerCase().trim().replace(/(\s*)/g,""))
    })


    function ClickRrcmd(x){
      document.querySelector('input#wsearch').value = x
      setReviewrcmd('')
    }
    if (Rcdata.length === 0){
      return false
    }

    else{ return  <ul id='writercmd'>{
    Rcdata.map((item,index) => {
      return(
        <li key={index} onClick={() => {ClickRrcmd(item.name)}}>{item.name}</li>
      )
    })}
  </ul>
  }
}
}




function WriteReview({Bdata, setReviewD, setMovieD, ReviewD}){
  const [reviewrcmd,setReviewrcmd] = useState('')
  const [charcount,setCharcount] = useState(0)
  let max = 180
  let warncolor = (charcount === max)? "red" : "black"


  function ResetWrite(){
    document.querySelector('input#wsearch').value = ""
    document.querySelector('input#wsearch').previousElementSibling.style.opacity = "1"
    document.querySelector('textarea#wreview').value = ""
    document.querySelector('textarea#wreview').previousElementSibling.style.opacity = "1"
    document.querySelector('div#writemodal').style.display = "none"
    setCharcount(0)
    if (Boolean(document.querySelector('input[name="score"]:checked')) === true){
      document.querySelector('input[name="score"]:checked').checked = false
    }
  }
  



  function maximumWord(x){
    if (x.value.length > max){
      x.value = x.value.substr(0,max)
    }
    setCharcount(x.value.length)
  }

  function AddReview(x){
    x.preventDefault();
    let errorW = []
    if (Boolean(document.querySelector('input[name="score"]:checked')) === false){
      errorW.push('점수')
    }
    if (document.querySelector('input#wsearch').value.length < 1){
      errorW.push('영화이름')
    }
    if (document.querySelector('textarea#wreview').value.length < 1){
      errorW.push('리뷰')
    }
    if (errorW.length > 0){
      window.alert('입력되지 않은 ' + errorW.join(', ') + " 이(가) 있습니다.")
    }
    else{
    let addData = Bdata.filter((item) => {
      return (item.name.replace(/(\s*)/g,"").toLowerCase() === document.querySelector('input#wsearch').value.replace(/(\s*)/g,"").toLowerCase())})
    let cloneReview = {...ReviewD}
    let newReview = {
      score : Number(document.querySelector('input[name="score"]:checked').value),
      name : "TestUser001",
      reveiw : document.querySelector('textarea#wreview').value}

    if (addData.length === 1){
      cloneReview[document.querySelector('input#wsearch').value.replace(/(\s*)/g,"").toLowerCase()].push(newReview)
      setReviewD(cloneReview)}
    else{
      let today = new Date()
      let newMovie = {
        id : Bdata.length - 1,
        name : document.querySelector('input#wsearch').value,
        story : "새로추가된 영화",
        src : "준비중입니다.",
        pic : "준비중입니다.",
        date : String(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()),
        director : "준비중입니다.",
        actor : "actor확인중"
      }
      cloneReview[document.querySelector('input#wsearch').value.replace(/(\s*)/g,"").toLowerCase()] = []
      cloneReview[document.querySelector('input#wsearch').value.replace(/(\s*)/g,"").toLowerCase()].push(newReview)
      setReviewD(cloneReview)
      setMovieD((prev) => {return [...prev,newMovie]})
      document.querySelector('input[name="score"]:checked').checked = false
      setReviewrcmd('')
      ResetWrite()
    }
  }
}
  

  return(
    <div id="writemodal" className="modalbase">
      <div id="writebox">
        <p id="wclose" >
          <img src="./images/icon/close.png" alt="close" onClick={() => {ResetWrite()}}/> 
        </p>
        <h2><img src="./images/icon/modallogo.png" alt="logo"/><span>나의 평점 리뷰</span></h2>
        <form>
          <fieldset>
            <legend className="writeform">
              <ul>
                <li>
                  <label htmlFor="wsearch">영화검색</label>
                  <input autoComplete='off' id="wsearch" name="wsearch"
                    onFocus={(e) => {e.target.previousElementSibling.style.opacity="0"}} onBlur = {(e) => {
                      return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")
                    }} onChange={(e) => {setReviewrcmd(e.target.value)}}
                  />
                  <WriteRcmd Bdata = {Bdata} Rcmd = {reviewrcmd} setReviewrcmd = {setReviewrcmd}/>
                </li>
                <li id='scorev'>
                <ScoreRadio/>
                  </li>
                <li>
                  <label htmlFor="wreview">리뷰작성</label>
                  <textarea onChange={(e) => {maximumWord(e.target)}} id="wreview" cols="30" rows="10" onFocus={(e) => {e.target.previousElementSibling.style.opacity="0"}} onBlur = {(e) => {
                      return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")
                    }}/>
                  <span id='maxword' style={{color : warncolor}}>{charcount + "/" + max}</span>
                </li>
              </ul>
              <button onClick={(e) => {return AddReview(e)}}>제출하기</button>
            </legend>
          </fieldset>
        </form>
      </div>
    </div>
  )
}


export default WriteReview