

const retrievedValue = localStorage.getItem('myVariable');


document.getElementById('search-result-div').innerHTML = `
<input class="search-searchpage" type="text" value="${retrievedValue}">
<button class="Search-icon-searchpage-btn" ><img class="Search-icon-searchpage" src="css/images/icons8-search-30.png"></button>
`