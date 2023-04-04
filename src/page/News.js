
import './News.css'

function NewsList({area, Ndata}){
  let areas = []
  if(area === "recently"){
    areas = Ndata.sort((a,b) => {
      return Number(a.date.replace(/-/g,"")) > Number(b.date.replace(/-/g,"")) ? -1 : 1
    }).slice(0,3)}
  if (area === "award"){
    areas = Ndata.filter((item) => {
      return item.type === "award"
    })}
  if (area === "interview"){
    areas = Ndata.filter((item) => {
      return item.type === "interview"
    })}
  if (area === "count"){
    areas = Ndata.sort((a,b) => {
      return a.count > b.count ? -1 : 1
    }).slice(0,4)
  }
  return areas.map((item,index) => {
    return(
        <li key={index}>
          <figure>
            <img src="" alt=""/>
            <figcaption>
              <h3 className="ntitle">{item.title}</h3>
              <p className="ndate">{item.date}</p>
            </figcaption>
          </figure>
        </li>

    )
  })
}

function News({Ndata}){
  return (
   <article id="news">
    <div id="newswrap">
      <h2 className="hide">News</h2>
      <div id="News">
        <div id="Nrecently">
          <div className='subtitle'>
            <h2>최신뉴스</h2>
            <p className="Nallview">view all</p>
          </div>
          <div className = "newsgall">
          <ul>
            <NewsList Ndata = {Ndata} area='recently'/>     
          </ul>     
          </div>
        </div>
        <div id="Ninterview">
        <div className='subtitle'>
          <h2>스타인터뷰</h2>
          <p className="Nallview">view all</p>
          </div>
          <div className = "newsgall">
            <ul>
              <NewsList Ndata = {Ndata} area='interview'/>
            </ul>  
          </div>        
        </div>
        <div id="Naward">
          <div className='subtitle'>
            <h2>어워드</h2>
            <p className="Nallview">view all</p>
          </div>
          <div className = "newsgall">
            <ul>
              <NewsList Ndata = {Ndata} area='award'/>
            </ul>
          </div>          
        </div>
      </div>
      <div id="Nnewsside">
        <h2>가장 많이본 뉴스</h2>
        <p className="Nallview">view all</p>
        <ul>
            <NewsList Ndata = {Ndata} area='count'/>
        </ul>
      </div>
    </div>
    
   </article>
  )
}

export default News