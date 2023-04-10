
import Contact from "../modal/Contact"

function Footer(){
  return(
    <footer>
      <div id="footerwrap">
        <p id="flogo"><img src="./images/icon/logo.png" alt="footerlogo" /></p>
        <div id="fcontact" onClick={() => {
          document.querySelector('div#contmodal').style.display = "flex"
        }}>
            <p className="fcicon">icons</p>
            <p className="fccont">고객센터</p>
        </div>
        <ul id="devloper">
          <li><img src="./images/icon/users.png" alt="user"/><a href="https://github.com/jevous96" target="_blank" rel="noreferrer" >심지호&#40;UI/UX디자인 및 기능개발&#41;</a></li>
          <li><img src="./images/icon/users.png" alt="user"/><a href="https://github.com/Eundoe" target="_blank" rel="noreferrer">조재호&#40;기능개발 및 DB제작&#41;</a></li>
        </ul>
      </div>
      <small>
          copyright&copy;2023 teamproject
      </small>
      <Contact/>
    </footer>
  )
}

export default Footer