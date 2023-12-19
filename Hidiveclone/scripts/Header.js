
let b = () => {
  document.getElementById('search-icon-div').innerHTML = `
  <input id="searchbar-after" type="text" placeholder="search">
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