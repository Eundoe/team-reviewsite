import './Contact.css'



function Contact(){
  let newmessage = {
    name : "",
    mail : "",
    message : ""
  }

  function Checkcont(e){
     e.preventDefault();
    let errorw = []
    if (document.querySelector('input#uname').value.length < 1 || /^[가-힣|a-z|A-Z]+$/.test(document.querySelector('input#uname').value) !== true){
      errorw.push("이름")
    }
    if (document.querySelector('input#umail').value.length < 1 || /(^[-_.]?[0-9a-zA-Z]{4,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i.test(document.querySelector('input#umail').value) !== true){
      errorw.push("이메일")
    }
    if (document.querySelector('textarea#umessage').value.length < 1  ){
      errorw.push("메세지")
    }
    return (errorw.length > 0) ? window.alert(`잘못된 ${errorw.join(',')} 입니다.`) : 
    (newmessage.name = document.querySelector('input#uname').value,
    newmessage.mail = document.querySelector('input#umail').value,
    newmessage.message = document.querySelector('textarea#umessage').value,
    console.log(newmessage),
    ResetContact())
  }

  function ResetContact(){
    document.querySelector('input#uname').value = ""
    document.querySelector('input#uname').previousElementSibling.style.opacity = "1"
    document.querySelector('input#umail').value = ""
    document.querySelector('input#umail').previousElementSibling.style.opacity = "1"
    document.querySelector('textarea#umessage').value = ""
    document.querySelector('textarea#umessage').previousElementSibling.style.opacity = "1"
    document.querySelector('div#contmodal').style.display = "none"
  }


  return(
    <div id="contmodal" className="modalbase">
      <div id="contbox">
        <p id="cclose" onClick={() => {ResetContact()}}>close</p>
        <h2>Contact</h2>
        <form>
          <fieldset>
            <legend className='contactform'>
              <ul>
                <li>
                  <label htmlFor="uname">name</label>
                  <input id="uname" name="uname" 
                  onFocus={(e) => {e.target.previousElementSibling.style.opacity ="0"}} onBlur = {(e) => {
                    return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")
                    }} />
                </li>
                <li>
                  <label htmlFor="umail">email</label>
                  <input id="umail" name="umail"  onFocus={(e) => {e.target.previousElementSibling.style.opacity ="0"}} onBlur = {(e) => {return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")}} />
                </li>
                <li>
                <label htmlFor="umessage">message</label>
                  <textarea name='umessage' id='umessage' cols="30" rows="10" onFocus={(e) => {e.target.previousElementSibling.style.opacity ="0"}} onBlur = {(e) => {return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")}} />
                </li>
              </ul>
              <button onClick={(e) => {Checkcont(e)}}>보내기</button>
            </legend>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact