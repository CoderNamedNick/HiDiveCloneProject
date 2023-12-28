import { AllAnimes } from "./all-anime-infos.js";
import { getsearch } from "./all-anime-infos.js";

const retrievedValue = localStorage.getItem('myVariable');
const retrievedValue2 = localStorage.getItem('myVariable2')

if (retrievedValue2 === null) {
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-result-div').innerHTML = `
    <input onkeypress="handleKeyPress2(event)" id="search-searchpage" class="search-searchpage" type="text" value="${retrievedValue}">
    <button class="Search-icon-searchpage-btn"><img class="Search-icon-searchpage" src="css/images/icons8-search-30.png"></button>
    `;
  });
  getsearch(AllAnimes, retrievedValue);
}
if (retrievedValue === null) {
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-result-div').innerHTML = `
    <input onkeypress="handleKeyPress2(event)" id="search-searchpage" class="search-searchpage" type="text" value="${retrievedValue2}">
    <button class="Search-icon-searchpage-btn"><img class="Search-icon-searchpage" src="css/images/icons8-search-30.png"></button>
    `;
  });
  getsearch(AllAnimes, retrievedValue2);
}

document.getElementById('WATCHNOW').onclick = () => {
  window.location.href = "watchAnime.html";
}

