
// try to set cookie for header tabs

let SearchbarAfter = () => {
  document.getElementById('search-icon-div').innerHTML = `
  <input id="searchbar-after" onkeypress="handleKeyPress(event)" placeholder="search">
  <button id="Search-icon-btn-after" onclick="SearchbarBefore()"><img class="Search-icon-after" src="css/images/icons8-search-48 (1).png"></button>  `
  document.getElementById('Trial-signup-div').innerHTML = `
  <a href="https://www.hidive.com/dashboard">
    <button class="Trial-signup-btn-after">
      START 7-DAY FREE TRIAL
    </button>
  </a>
  `
}

let SearchbarBefore = () => {
  document.getElementById('search-icon-div').innerHTML = `
  <input id="searchbar" type="text" placeholder="search">
  <button id="Search-icon-btn" onclick="SearchbarAfter()"><img class="Search-icon" src="css/images/icons8-search-48 (1).png"></button>`
  document.getElementById('Trial-signup-div').innerHTML = `
  <a href="https://www.hidive.com/dashboard">
    <button class="Trial-signup-btn">
      START 7-DAY FREE TRIAL
    </button>
  </a>
  `
}

let MoreToolTipAfter = () => {
  document.getElementById('More-div').innerHTML = `
  <button onclick="MoreToolTipBefore()" class="More">MORE <p class="caret">&#9660;</p>
  </button>
  <div class="tooltip-after">
    <a href="News.html"><p class="News-tooltip">NEWS</p></a>
    <p class="Shop-tooltip">SHOP</p>
  </div>
  `
}

let MoreToolTipBefore = () => {
  document.getElementById('More-div').innerHTML = `
  <button onclick="MoreToolTipAfter()" class="More">MORE <p class="caret">&#9660;</p>
  </button>
  <div class="tooltip">
    <a href="News.html"><p class="News-tooltip">NEWS</p></a>
    <p class="Shop-tooltip">SHOP</p>
  </div>
  `
}

function setSessionCookie(name, value, path = '/') {
  const cookieString = `${name}=${value}; path=${path}`;
  document.cookie = cookieString;
}

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

let logout = () => {
  setSessionCookie('loggedinTrue2', -1);
  AccountIconToolTipBefore();
};

const getLoggedInStatus = () => {
  const value = getCookie('loggedinTrue2');
  return value !== null && value !== '-1' ? value : null;
};

let AccountIconToolTipAfter = () => {
  const LoggedIn = getLoggedInStatus();
  console.log('logged in ' + LoggedIn);
  if (LoggedIn) {
    console.log('yayyyyyy');
    document.getElementById('account-icon-div').innerHTML = `
    <button onclick="AccountIconToolTipBefore()" id="account-btn"><img class="account-icon" src="css/images/icons8-user-64.png"></button>
    <div class="account-tooltip-after">
      <p class="myaccount-tooltip">My Account</p>
      <p class="switchaccount-tooltip">Switch Account</p>
      <p class="payment-tooltip">Payment Plans</p>
      <hr>
      <button class="LogoutBTN" onclick="logout()" ><p class="logout-tooltip">Log Out</p></button>
      <p class="help-tooltip">HELP CENTER</p>
    </div>
    `;
  } else {
    console.log('shit');
    document.getElementById('account-icon-div').innerHTML = `
    <button onclick="AccountIconToolTipBefore()" id="account-btn"><img class="account-icon" src="css/images/icons8-user-64.png"></button>
    <div class="account-tooltip-after">
      <a href="login.html"><p class="login-tooltip">LOG IN</p></a>
      <hr>
      <p class="help-tooltip">HELP CENTER</p>
    </div>
    `;
  }
};

let AccountIconToolTipBefore = () => {
  const LoggedIn = getLoggedInStatus();
  if (LoggedIn) {
    console.log('boobs');
    document.getElementById('account-icon-div').innerHTML = `
    <button onclick="AccountIconToolTipAfter()" id="account-btn"><img class="account-icon" src="css/images/icons8-user-64.png"></button>
    <div class="account-tooltip">
      <p class="myaccount-tooltip">My Account</p>
      <p class="switchaccount-tooltip">Switch Account</p>
      <p class="payment-tooltip">Payment Plans</p>
      <hr>
      <p class="logout-tooltip">Log Out</p>
      <p class="help-tooltip">HELP CENTER</p>
    </div>
    `;
  } else {
    document.getElementById('account-icon-div').innerHTML = `
    <button onclick="AccountIconToolTipAfter()" id="account-btn"><img class="account-icon" src="css/images/icons8-user-64.png"></button>
    <div class="account-tooltip">
      <a href="login.html"><p class="login-tooltip">LOG IN</p></a>
      <hr>
      <p class="help-tooltip">HELP CENTER</p>
    </div>
    `;
  }
};

let inputedsearch= '';

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    var inputValue = document.getElementById('searchbar-after').value;
    alert('Entered value: ' + inputValue);
    // You can do something with the entered value here
    inputedsearch = inputValue
    localStorage.setItem('myVariable', inputedsearch);
    console.log(inputedsearch);
    window.location.href = "search.html";
  }
}

let inputedsearch2= '';

function handleKeyPress2(event) {
  if (event.key === 'Enter') {
    var inputValue2 = document.getElementById('search-searchpage').value;
    alert('Entered value: ' + inputValue2);
    // You can do something with the entered value here
    inputedsearch2 = inputValue2
    localStorage.setItem('myVariable2', inputedsearch2);
    console.log(inputedsearch);
    window.location.href = "search.html";
  }
}