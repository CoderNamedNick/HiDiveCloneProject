

const retrievedValue = localStorage.getItem('myVariable');


document.getElementById('search-result-div').innerHTML = `
  <p>${retrievedValue}</p>
`