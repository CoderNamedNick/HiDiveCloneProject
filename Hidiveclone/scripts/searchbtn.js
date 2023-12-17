
let b = () => {
  document.getElementById('search-icon-div').innerHTML = `
  <input id="searchbar-after" type="text" placeholder="search">
  <button id="Search-icon-btn-after" onclick="a()"><img class="Search-icon" src="css/images/icons8-search-48 (1).png"></button>  `
}


let a = () => {
  document.getElementById('search-icon-div').innerHTML = `
  <input id="searchbar" type="text" placeholder="search">
  <button id="Search-icon-btn" onclick="b()"><img class="Search-icon" src="css/images/icons8-search-48 (1).png"></button>`
}