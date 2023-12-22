import { AllAnimes } from "./all-anime-infos.js";
import { getsearch } from "./all-anime-infos.js";

const retrievedValue = localStorage.getItem('myVariable');


document.getElementById('search-result-div').innerHTML = `
<input class="search-searchpage" type="text" value="${retrievedValue}">
<button class="Search-icon-searchpage-btn" ><img class="Search-icon-searchpage" src="css/images/icons8-search-30.png"></button>
`

getsearch(AllAnimes, retrievedValue)

console.log(typeof(retrievedValue))