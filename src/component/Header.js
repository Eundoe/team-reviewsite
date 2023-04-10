import { useState } from "react"
import { Link } from "react-router-dom"


function RecommendWord({Mdata,recow,setRcmd }){
  if (recow === "" || recow === "," || recow.length < 2 ){
    return false
  }
  else{
    let data = Mdata.filter((item) => {
    return item.name.replace(/(\s*)/g,"").toLowerCase().includes(recow.toLowerCase().trim().replace(/(\s*)/g,"")) || item.story.replace(/(\s*)/g,"").toLowerCase().includes(recow.toLowerCase().trim().replace(/(\s*)/g,"")) || item.actor.replace(/(\s*)/g,"").toLowerCase().includes(recow.toLowerCase().trim().replace(/(\s*)/g,"")) || item.director.replace(/(\s*)/g,"").toLowerCase().includes(recow.toLowerCase().trim().replace(/(\s*)/g,""))})

    function ClickRcmd(clickvalue){
      document.querySelector('input#msearch').value = clickvalue
      setRcmd('')
    }
  
  return data.map((item, index) => {
   return <li className="recdword" key={index} onClick={() => {ClickRcmd(item.name)}}>
      {item.name}
    </li>
  })
}
}

function Header({setQuery, Mdata}){
  const [rcmd,setRcmd] = useState('')
  return(
    <header>
      <div id="headwrap">
      <h1>
        <Link to='/'><img src="./images/icon/logo2.png" alt="logo"/></Link></h1>
      <form>
        <fieldset>
          <legend>
            <label htmlFor="msearch" onClick={() => {
              setQuery(document.querySelector('input#msearch').value)
            }}><img  src="./images/icon/search.png" alt="search"/></label>
            <input name = "msearch" id="msearch" placeholder = "키워드를 입력" onChange={(e) => setRcmd(e.target.value)}/>
          </legend>
          <ul id="recommend">
            <RecommendWord Mdata = {Mdata} recow ={rcmd} setRcmd = {setRcmd}/>
          </ul>
        </fieldset>
      </form>
      <nav>
        <ul>
          <li className="hwrite">
            <img src="./images/icon/write.png" alt="writereview"/>
          </li>
          <li className="hnews">
            <Link to='/news'>
              <img src="./images/icon/news.png" alt="news"/>
            </Link></li>
          <li className="hacc">
            <img src="./images/icon/people.png" alt="account"/>
          </li>
        </ul>
      </nav>
      </div>

    </header>
  )
}

export default Header