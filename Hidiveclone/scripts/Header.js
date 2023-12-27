
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
    <p class="News-tooltip">NEWS</p>
    <p class="Shop-tooltip">SHOP</p>
  </div>
  `
}

let MoreToolTipBefore = () => {
  document.getElementById('More-div').innerHTML = `
  <button onclick="MoreToolTipAfter()" class="More">MORE <p class="caret">&#9660;</p>
  </button>
  <div class="tooltip">
    <p class="News-tooltip">NEWS</p>
    <p class="Shop-tooltip">SHOP</p>
  </div>
  `
}

let AccountIconToolTipAfter = () => {
  document.getElementById('account-icon-div').innerHTML = `
  <button onclick="AccountIconToolTipBefore()" id="account-btn"><img class="account-icon" src="css/images/icons8-user-64.png"></button>
  <div class="account-tooltip-after">
  <a href="login.html"><p class="login-tooltip">LOG IN</p></a>
    <hr>
    <p class="help-tooltip">HELP CENTER</p>
  </div>
  `
}

let AccountIconToolTipBefore = () => {
  document.getElementById('account-icon-div').innerHTML = `
  <button onclick="AccountIconToolTipAfter()" id="account-btn"><img class="account-icon" src="css/images/icons8-user-64.png"></button>
  <div class="account-tooltip">
  <a href="login.html"><p class="login-tooltip">LOG IN</p></a>
    <hr>
    <p class="help-tooltip">HELP CENTER</p>
  </div>
  `
}

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
