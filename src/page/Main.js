import ReviewM from "../modal/Reviewm"
import './Main.css'


function NewsCard({Ndata, setNewsD}){
  let mainnews = []
  let bestnews = Ndata.sort((a,b) => {
    return (a.count > b.count ? -1 : 1)
  })
  
  for (let i = 0; i < 2 ; i++){
    mainnews.push(bestnews[i])
  }

  function Countup(x){
    let copyarr = [...Ndata]
    let idx = copyarr.findIndex((item) => item.id === x)
    console.log(copyarr[idx].count)
    copyarr[idx] = {...copyarr[idx], count : copyarr[idx].count + 1}
    setNewsD(copyarr)
  }

return mainnews.map((item,index) => {
    return (
    <figure key={index}>
      <img src="" alt=""/>
      <figcaption onClick={() => {Countup(item.id)}}>
        <p className="mndate">{item.date}</p>
        <p className="mntitle">{item.title}</p>
      </figcaption>
    </figure>
    )
  })
}



function Listup({ Mdata, type, setClue}){
  let data= Mdata
  function Showmovie(x){
   setClue(x)
   document.querySelector('div#reviewmodal').style.display = "flex"}

if (type === "recently"){
   data = Mdata.sort((a,b) => {
    return Number(a.date.replace(/-/g,"")) > Number(b.date.replace(/-/g,"")) ? -1 : 1
  })}
if (type === "score"){
  data = Mdata.sort((a,b) => {
    return a.score > b.score ? -1 : 1
  })}

return data.map((item,index) => {
    return (
      <li key={index} onClick = {() => {setClue(item.name)}}>
        <figure>
          <p>
          <img src="" alt=""/>
          <span onClick = {() => {Showmovie(item.name)}}>더보기</span>
          </p>
          <figcaption>
          <p>
            <img src={``} alt="icon"/>
            <span>{item.score}</span>
          </p>
          <p>{item.name}</p>
          </figcaption>
        </figure>
      </li>
    )
  })  

}


function Home({Rdata, Mdata, setClue, clue, query, Ndata, setNewsD}){
  let SlideNum0 = 0
  let SlideNum1 = 0

  function SlideContents(x,y){
    let list = document.querySelector('div.gall>ul>li').offsetWidth
    let max = Mdata.length

    if (document.querySelector('div.gall>ul').childElementCount > 2){

    if (y === 0){
      if (x.getAttribute('class') === "next"){
        (SlideNum0 > (max -2)) ? SlideNum0 = 0 : SlideNum0 += 1
        x.previousElementSibling.firstChild.style.marginLeft = "-" + (list * SlideNum0) + "px"
      }
      if (x.getAttribute('class') === "prev"){
        if (SlideNum0 < 1){
          SlideNum0 = max - 4
        }
        else{
          SlideNum0 -= 1
        }
        x.previousElementSibling.previousElementSibling.firstChild.style.marginLeft = "-" + (list * SlideNum0) + "px"
      }
    }

    if (y === 1){
      if (x.getAttribute('class') === "next"){
        (SlideNum1 > (max -2)) ? SlideNum1 = 0 : SlideNum1 += 1
        x.previousElementSibling.firstChild.style.marginLeft = "-" + (list * SlideNum1) + "px"
      }
      if (x.getAttribute('class') === "prev"){
        if (SlideNum1 < 1){
          SlideNum1 = max - 4
        }
        else{
          SlideNum1 -= 1
        }
        x.previousElementSibling.previousElementSibling.firstChild.style.marginLeft = "-" + (list * SlideNum1) + "px"
      }
    }
  }

  }


  let FMdata = Mdata.filter((item) => {return item.name.replace(/(\s*)/g,"").toLowerCase().includes(query.toLowerCase().trim().replace(/(\s*)/g,"")) || item.story.replace(/(\s*)/g,"").toLowerCase().includes(query.toLowerCase().trim().replace(/(\s*)/g,"")) || item.actor.replace(/(\s*)/g,"").toLowerCase().includes(query.toLowerCase().trim().replace(/(\s*)/g,"")) || item.director.replace(/(\s*)/g,"").toLowerCase().includes(query.toLowerCase().trim().replace(/(\s*)/g,""))})



  return(
    <article id="home">
      <div id="homewrap">
        <h2 className="hide">main review</h2>
        <div>
          <h3>최신 영화순</h3>
          <div className="album">
          <div className="gall">
          <ul id="recent">
            <Listup Mdata = {FMdata} type = {"recently"} setClue ={setClue}/>
          </ul>
          </div>
          <p className="next" onClick={(e) => {SlideContents(e.target,0)}}>next</p>
          <p className="prev" onClick={(e) => {SlideContents(e.target,0)}}>prev</p>
          </div>
        </div>
        <div>
          <h3>베스트 평점순</h3>
          <div className="album">
          <div className="gall">
          <ul id="best">
            <Listup Mdata = {FMdata} type = {"score"} setClue ={setClue}/>
          </ul>
          </div>
          <p className="next" onClick={(e) => {SlideContents(e.target,1)}}>next</p>
          <p className="prev" onClick={(e) => {SlideContents(e.target,1)}}>prev</p>
          </div>
        </div>
        <div id="news">
          <h3>뉴스</h3>
          <div className="album">
          <div className="newsp">
              <NewsCard Ndata ={Ndata} setNewsD = {setNewsD}/>
          </div>
          </div>
        </div>
      </div>
      <ReviewM Rdata = {Rdata} Mdata = {Mdata} clue = {clue}/>
    </article>
  )
}

export default Home