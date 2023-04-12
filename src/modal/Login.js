import './Login.css'


function Login(){
  return(
    <div id="logmodal" className="modalbase">
      <div id="logbox">
        <h2>
          <img src="./images/icon/modallogo.png" alt="logo"/>
          <span>로그인</span>
        </h2>
        <p id="lclose" onClick={() => {
          document.querySelector('div#logmodal').style.display = 'none'
        }}>close</p>
        <form>
          <fieldset>
            <legend>
              <ul>
                <li>
                  <label htmlFor="login">로그인</label>
                  <input type="text" name="login" id="login"/>
                </li>
                <li>
                  <label htmlFor="pass">패스워드</label>
                  <input type="password" name="pass" id="pass"/>
                </li>
                <li>
                  <span>아이디/</span>
                  <span>비밀번호 찾기</span>
                </li>
              </ul>
              <button>로그인</button>
            </legend>
          </fieldset>
          <ul id="logset">
            <li>회원이 아니신가요?</li>
            <li>회원가입</li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Login