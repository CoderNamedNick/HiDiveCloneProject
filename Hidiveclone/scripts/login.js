let emailinput = document.getElementById('Email-login')
let passwordinput = document.getElementById('Password-login')

let loggedin = false 

let getlogin = () => {
  console.log(emailinput.value)
  console.log(passwordinput.value)
  if (emailinput.value === '777' && passwordinput.value === '777'){
    alert('LOGGED IN')
    loggedin = true
    console.log(loggedin)
    window.location.href = "index.html";
  } else {
    alert('please try again')
  }
}