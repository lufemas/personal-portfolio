
const $ = (el)=>document.querySelector(el)


const appUrl = 'https://script.google.com/macros/s/AKfycbxsZY6RP-AM6948q0lyUvZL89yEgHHd6r2S0UkXH2K-KbgmueM/exec'

$('#send-btn').onclick = (e)=>{
  e.preventDefault()

  if(formValidation()){

    const name = $('#name').value
    const from = $('#email').value
    const phone = $('#phone').value
    const message = $('#message').value
  
    jrSendMail(appUrl, '', from, '', {
      name: name,
      phone: phone,
      message : message
     })
     .then((res)=>{
       $('#name').value = ""
       $('#email').value = ""
       $('#phone').value = ""
       $('#message').value = ""
       alert("Email sent")
     })


  }




}

const projectsAbout = document.getElementsByClassName('project-about')

for ( let el of projectsAbout ){
  el.style.opacity = 0
  setTimeout(()=>{
    el.style.opacity = 1
  }, 510)
}


function formValidation(){

  let check = true

  $('#email-validation').style.display = 'none'
  $('#message-validation').style.display = 'none'
  $('#name-validation').style.display = 'none'
  
  console.log( $('#message').value)
  if( $('#message').value.length < 7 ){
    check = false
    $('#message').focus();
    $('#message-validation').style.display = 'inline'
  }   
  
  if(  ! $('#email').value.match(/^.+@\w+[.].+$/) ){
    check = false
    $('#email').focus();
    $('#email-validation').style.display = 'inline'
    
  }     
  
    if( $('#name').value.length < 2 ){
      check = false
      console.log( 'name wrong')
      $('#name').focus();
      $('#name-validation').style.display = 'inline'
  }   
  
  console.log(check)

  return check
}