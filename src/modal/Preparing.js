import { prepareshow } from '../api/api'
import './Preparing.css'


function Preparing(){
  return(
    <div id="premodal" className="modalbase">
      <div id="prewrap">
        <h2>
        <img src="./images/icon/p.png" alt="logo"/>
        <span>현재 페이지 준비중입니다.</span>
        </h2>
        <p id="pclose" onClick={() => {
          prepareshow('none')}}><img src="./images/icon/close.png" alt="close"/> </p>
        <p>
          <span>이용에 불편을 드려 죄송합니다.</span>
          <span>빠른 시일내 오픈하겠습니다.</span>
        </p>
      </div>
    </div>
  )
}

export default Preparing