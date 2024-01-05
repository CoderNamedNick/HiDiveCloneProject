let emailinput = document.getElementById('Email-login')
let passwordinput = document.getElementById('Password-login')

let loggedin = false 

let getlogin = () => {
  console.log(emailinput.value)
  console.log(passwordinput.value)
  if (emailinput.value === '777' && passwordinput.value === '777'){
    alert('LOGGED IN')
    loggedin = true
    setSessionCookie('loggedinTrue2', 'true');
    console.log(loggedin)
    localStorage.setItem('loggedinTrue', loggedin)
    window.location.href = "index.html";
  } else {
    alert('please try again')
  }
}

// Function to set a cookie
function setSessionCookie(name, value, path = '/') {
  const cookieString = `${name}=${value};path=${path}`;
  document.cookie = cookieString;
}

// Function to get a cookie value
function getCookie(name) {
  const cookieArray = document.cookie.split('; ');
  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair = cookieArray[i].split('=');
    if (cookiePair[0] === name) {
      return cookiePair[1];
    }
  }
  return null;
}