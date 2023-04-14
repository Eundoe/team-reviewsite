export function prepareshow(x){
  document.querySelector('#premodal').style.display = x
}

export function reset(y, textarea){
  if (document.querySelectorAll(y + ' input').length > 1){
    for (let nide of document.querySelectorAll(y + ' input')){
      nide.value = ""
    }
  }
  else{
  document.querySelectorAll(y + ' input').value = ""
  }
  for (let item of document.querySelectorAll(y + ' label')) {
    item.style.opacity = "1"
  }
  if(textarea){
    if (document.querySelectorAll(y + ' textarea').length > 1){
      for (let nide of document.querySelectorAll(y + ' textarea')){
        nide.value = ""
      }
    }
    else{
    document.querySelector(y + ' textarea').value = ""
    }
  }
  document.querySelector(y).style.display = "none"
}

export function focusonblur(z,x){
  
}