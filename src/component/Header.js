import { useState } from "react"



function RecommendWord({Mdata,recow,setRcmd }){
  if (recow === "" || recow === "," ){
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
   return <li className="recdword" key={index} onClick={() => {ClickRcmd(item.name)  }}>
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
      <h1><img src="" alt="logo"/><span>Logois here</span></h1>
      <form>
        <fieldset>
          <legend>
            <label htmlFor="msearch" onClick={() => {
              setQuery(document.querySelector('input#msearch').value)
            }}>아이콘</label>
            <input name = "msearch" id="msearch" onChange={(e) => setRcmd(e.target.value)}/>
          </legend>
          <ul id="recommend">
            <RecommendWord Mdata = {Mdata} recow ={rcmd} setRcmd = {setRcmd}/>
          </ul>
        </fieldset>
      </form>
      <nav>
        <ul>
          <li>wrtieicon</li>
          <li>newsicon</li>
          <li>accounticon</li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header