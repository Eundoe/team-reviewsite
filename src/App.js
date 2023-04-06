import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './reset.css'
import './component.css'
import { useEffect, useState } from 'react'

//comp
import Header from './component/Header'
import Footer from './component/Footer'
//page
import Home from './page/Main'
import News from './page/News'
// data
import MovieData from './data/movie.json'
import ReviewData from './data/review.json'
import NewsData from './data/news.json'






function App(){

//  let shinkai = "신카이 마코토"
//  function getMovieData(){
//   const datay = fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=6b0a070ecaed603b459cac7b691dc16f&itemPerPage=30&directorNm=${shinkai}`).then(res => res.json())
//   return  datay.then((item) => item.movieListResult.movieList);
//  }

//  const [test, setTest] = useState([])

//  useEffect(() => {
//  async function GetData(){
//   let moviedata;
//   try{
//     moviedata = await getMovieData();
//     setTest(moviedata)
//   }
//   catch(error) {
//     console.log(error)
//   }
//  }
//  GetData()
// },[])
// console.log(test)

  let Rdata = []
  let Mdata = []
  const [ReviwD, setReviewD] = useState(ReviewData)
  const [MovieD, setMovieD] = useState(MovieData)
  const [NewsD, setNewsD] = useState(NewsData)
  const [clue,setClue] = useState(MovieData[1].name)
  const [query,setQuery] = useState('')

 for (let i of ReviwD[clue.replace(/(\s*)/g,"").toLowerCase()]){
  if(i === null || i === undefined){
    Rdata = []
  }
  else{
    Rdata.push(i)
  }
  
 }
 for (let i of MovieD){
  let data = i.name.replace(/(\s*)/g,"").toLowerCase()
  let score = 0
  let people = 0



  for (let j of ReviwD[data]){
    if (j === null){
      return false
    }
    else{
    score += j.score
    people++
    }
  }
  
  i["score"] = Math.floor((score/people)*100)/100
  Mdata.push(i)
 }

  return(
    <BrowserRouter>
    <div id='wrap'>

    <Header setQuery = {setQuery} Mdata = {Mdata}/>
    <Routes>
      <Route path = "/" element ={<Home Rdata = {Rdata} Mdata ={Mdata} query ={query} setClue = {setClue} clue = {clue} Ndata = {NewsD} setNewsD = {setNewsD}/>}/>
      <Route path = "/news" element ={<News Ndata = {NewsD} setNewsD = {setNewsD}/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )

}

export default App