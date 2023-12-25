
let b = () => {
  document.getElementById('search-icon-div').innerHTML = `
  <input id="searchbar-after" onkeypress="handleKeyPress(event)" placeholder="search">
  <button id="Search-icon-btn-after" onclick="a()"><img class="Search-icon-after" src="css/images/icons8-search-48 (1).png"></button>  `
  document.getElementById('Trial-signup-div').innerHTML = `
  <a href="https://www.hidive.com/dashboard">
    <button class="Trial-signup-btn-after">
      START 7-DAY FREE TRIAL
    </button>
  </a>
  `
}

let a = () => {
  document.getElementById('search-icon-div').innerHTML = `
  <input id="searchbar" type="text" placeholder="search">
  <button id="Search-icon-btn" onclick="b()"><img class="Search-icon" src="css/images/icons8-search-48 (1).png"></button>`
  document.getElementById('Trial-signup-div').innerHTML = `
  <a href="https://www.hidive.com/dashboard">
    <button class="Trial-signup-btn">
      START 7-DAY FREE TRIAL
    </button>
  </a>
  `
}

let c = () => {
  document.getElementById('More-div').innerHTML = `
  <button onclick="d()" class="More">MORE <p class="caret">&#9660;</p>
  </button>
  <div class="tooltip-after">
    <p class="News-tooltip">NEWS</p>
    <p class="Shop-tooltip">SHOP</p>
  </div>
  `
}

let d = () => {
  document.getElementById('More-div').innerHTML = `
  <button onclick="c()" class="More">MORE <p class="caret">&#9660;</p>
  </button>
  <div class="tooltip">
    <p class="News-tooltip">NEWS</p>
    <p class="Shop-tooltip">SHOP</p>
  </div>
  `
}

let e = () => {
  document.getElementById('account-icon-div').innerHTML = `
  <button onclick="f()" id="account-btn"><img class="account-icon" src="css/images/icons8-user-64.png"></button>
  <div class="account-tooltip-after">
    <p class="login-tooltip">LOG IN</p>
    <hr>
    <p class="help-tooltip">HELP CENTER</p>
  </div>
  `
}

let f = () => {
  document.getElementById('account-icon-div').innerHTML = `
  <button onclick="e()" id="account-btn"><img class="account-icon" src="css/images/icons8-user-64.png"></button>
  <div class="account-tooltip">
    <p class="login-tooltip">LOG IN</p>
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
