import { AllAnimes, TrendingNowAnime, recentlyAddedAnimes, exclusivesAnime, SimulcastAnimes, RomanceAnime, ComedyAnime } from "../scripts/all-anime-infos.js";
 



//function filters the arrays to be unique and only have one main id for extra meassure
let AllAnime = [];
let comedyAnime = [];

function UniqueArray(param, param2) {
  param.forEach((anime, index) => {
    // Check if there is no other anime with the same ID before the current index
    const isUnique = !param.slice(0, index).some(otherAnime => otherAnime.id === anime.id);
    if (isUnique) {
      param2.push(anime);
    }
  });
}
UniqueArray(ComedyAnime, comedyAnime)
UniqueArray(AllAnimes, AllAnime)

console.log(comedyAnime)
console.log(AllAnime)
console.log(exclusivesAnime)

//makes tool tipos appear and dissapear
document.addEventListener('DOMContentLoaded', function () {
  let catagoryDiv = document.querySelector('.catagory-tooltip');
  let catagoryBTN = document.querySelector('.prefences-btn');
  let genreDiv = document.querySelector('.genre-tooltip');
  let genreBTN = document.querySelectorAll('.prefences-btn')[1];

  function CatagorytoolTipsShow() {
      let computedStyle = window.getComputedStyle(catagoryDiv);
      let currentOpacity = computedStyle.getPropertyValue('opacity');

      if (currentOpacity === '0') {
          catagoryDiv.style.opacity = '1';
          catagoryDiv.style.zIndex = '10000000'
      } else {
          catagoryDiv.style.opacity = '0';
          catagoryDiv.style.zIndex = '0'
      }
  };
  function GenretoolTipsShow() {
    let computedStyle = window.getComputedStyle(genreDiv);
    let currentOpacity = computedStyle.getPropertyValue('opacity');

    if (currentOpacity === '0') {
      genreDiv.style.opacity = '1';
      genreDiv.style.zIndex = '10000000'
    } else {
      genreDiv.style.opacity = '0';
      genreDiv.style.zIndex = '0'
    }
  };

  catagoryBTN.addEventListener('click', CatagorytoolTipsShow);
  genreBTN.addEventListener('click', GenretoolTipsShow)
});


localStorage.clear();

//changes static HTML on page to refect what is on
let Catagory = '';
let Genre = 'All';
let ButtonHTML = '';
var currentCatagory = 'Simulcast';

const changeh2tag = (param, param2) => {
  if (param != '') {
    Catagory = param
  }
  if (param2 != '') {
    Genre = param2
  }
  document.getElementById('h2-catagory-genre').innerHTML = `
    <h2>${Catagory} &#10095; ${Genre}</h2>
  `
}
const changeButtonHTML = () => {
  if (Catagory != '') {
    ButtonHTML = Catagory
  }
  document.getElementById('catagory-btn').innerText = `${ButtonHTML}`
}
function changethecatgory(param) {
  currentCatagory = param
  console.log(currentCatagory)
}

// function that generates HTML and refreshes the page to show HTML
const generateprefencedHtml = (array, html) => {
  html = '';

  array.forEach((anime) => {
    html += `
      <div class="anime-prefences-preview">
        <div class="anime-times-flexbox" style="position: relative;">
          <img class="anime-Previews" src="${anime.image}">
          <div class="new-episode-times" style="z-index: 10003"><p>${anime.newEpTimes}</p></div>
          <a href="#" class="blah" data-anime-all-id="${anime.id}"><span class="hovers ${anime.hoverID}">${anime.name} <br> <span class="hovercaret"> &#65088;</span></span></a>
        </div>
      </div>  
    `;
  });
  return html;
};
function clickedpreview(animeId) {
  let retrievedAnime1ID = animeId;
  localStorage.setItem("AnimeSelected",retrievedAnime1ID)
  //alert('wait');
  window.location.href = "watchAnime.html";
}
let prefencedAnimesHTML = '';
var refresh = (param) => {
  prefencedAnimesHTML = generateprefencedHtml(param, prefencedAnimesHTML) // + generateprefencedHtml(param, prefencedAnimesHTML);
  document.querySelector('.sub-main-grid').innerHTML = `${prefencedAnimesHTML}`;

  // Set up click event listeners after refreshing
  document.querySelectorAll('.blah').forEach((element) => {
    element.addEventListener('click', function () {
      clickedpreview(element.dataset.animeAllId);
    });
  });
}
refresh(SimulcastAnimes)



// function filters the anime Category by genres
let romancefiltered = [];
let comedyfiltered = [];

let filterbygenre = (param, param2) => {
  if (currentCatagory === 'Recently Added') {
    const newArray = recentlyAddedAnimes.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  if (currentCatagory === 'Simulcast') {
    const newArray = SimulcastAnimes.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  if (currentCatagory === 'Hidive Exclusives') {
    const newArray = exclusivesAnime.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  if (currentCatagory === 'Trending Now') {
    const newArray = TrendingNowAnime.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  if (currentCatagory === 'All') {
    const newArray = AllAnime.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  
}

// main function for tool tips filtering
document.addEventListener('DOMContentLoaded', function () {
  let AllAnimetooltip = document.getElementById('AllTT')
  let Simulcasttooltip = document.getElementById('SimulcastTT');
  let exclusivestooltip = document.getElementById('ExclusivesTT');
  let recentlyAddedtooltip = document.getElementById('RecentlyAddedTT');
  let trendingNowtooltip = document.getElementById('TrendingNowTT');
  let romancetooltip = document.getElementById('RomanceTT')
  let comedytooltip = document.getElementById('ComedyTT')

  function changePreference(animes) {
    refresh(animes);
  }
  AllAnimetooltip.addEventListener('click', function () {
    changeh2tag('All', 'All')
    changeButtonHTML()
    changethecatgory('All')
    changePreference(AllAnime);
  });
  recentlyAddedtooltip.addEventListener('click', function () {
    changeh2tag('Recently Added', 'All')
    changeButtonHTML()
    changethecatgory('Recently Added')
    changePreference(recentlyAddedAnimes);
  });
  Simulcasttooltip.addEventListener('click', function () {
    changeh2tag('Simulcast', 'All')
    changeButtonHTML()
    changethecatgory('Simulcast')
    changePreference(SimulcastAnimes);
  });
  exclusivestooltip.addEventListener('click', function () {
    changeh2tag('Hidive Exclusives', 'All')
    changeButtonHTML()
    changethecatgory('Hidive Exclusives')
    changePreference(exclusivesAnime);
  });
  trendingNowtooltip.addEventListener('click', function () {
    changeh2tag('Trending Now', 'All')
    changeButtonHTML()
    changethecatgory('Trending Now')
    changePreference(TrendingNowAnime);
  });
  romancetooltip.addEventListener('click', function () {
    changeh2tag('', 'Romance')
    filterbygenre(romancefiltered, 'Romance ',)
    console.log(romancefiltered)
    changePreference(romancefiltered);
    romancefiltered = [];
  });
  comedytooltip.addEventListener('click', function () {
    changeh2tag('', 'Comedy')
    filterbygenre(comedyfiltered, 'Comedy ',)
    console.log(comedyfiltered)
    changePreference(comedyfiltered);
    comedyfiltered = [];
  });
});
