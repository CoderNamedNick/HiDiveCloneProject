import { TrendingNowAnime, recentlyAddedAnimes, exclusivesAnime, SimulcastAnimes, RomanceAnime, ComedyAnime } from "../scripts/all-anime-infos.js";

let comedyAnime = [];

ComedyAnime.forEach((anime, index) => {
  // Check if there is no other anime with the same ID before the current index
  const isUnique = !ComedyAnime.slice(0, index).some(otherAnime => otherAnime.id === anime.id);
  if (isUnique) {
    comedyAnime.push(anime);
  }
});

console.log(comedyAnime)
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
      } else {
          catagoryDiv.style.opacity = '0';
      }
  };
  function GenretoolTipsShow() {
    let computedStyle = window.getComputedStyle(genreDiv);
    let currentOpacity = computedStyle.getPropertyValue('opacity');

    if (currentOpacity === '0') {
      genreDiv.style.opacity = '1';
    } else {
      genreDiv.style.opacity = '0';
    }
  };

  catagoryBTN.addEventListener('click', CatagorytoolTipsShow);
  genreBTN.addEventListener('click', GenretoolTipsShow)
});

function clickedpreview(animeId) {
  let retrievedAnime1ID = animeId;
  localStorage.setItem("AnimeSelected",retrievedAnime1ID)
  //alert('wait');
  window.location.href = "watchAnime.html";
}

localStorage.clear();

let Catagory = '';
let Genre = 'All';

//make variables for this to be consistent with both catagories and genre
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

let prefencedAnimesHTML = ''

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

var currentCatagory = 'Simulcast';
function changethecatgory(param) {
  currentCatagory = param
  console.log(currentCatagory)
}

let romancefiltered = [];

let filterbygenre = (param, param2) => {
  if (currentCatagory === 'Recently Added') {
    const newArray = recentlyAddedAnimes.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  if (currentCatagory === 'Simulcast') {
    const newArray = SimulcastAnimes.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  if (currentCatagory === 'Hiddive Exclusives') {
    const newArray = exclusivesAnime.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  if (currentCatagory === 'Trending Now') {
    const newArray = TrendingNowAnime.filter(anime => anime.genre.includes(param2));
    newArray.forEach(anime => param.push(anime));
  }
  
}


document.addEventListener('DOMContentLoaded', function () {
  let Simulcasttooltip = document.getElementById('SimulcastTT');
  let exclusivestooltip = document.getElementById('ExclusivesTT');
  let recentlyAddedtooltip = document.getElementById('RecentlyAddedTT');
  let trendingNowtooltip = document.getElementById('TrendingNowTT');
  let romancetooltip = document.getElementById('RomanceTT')

  function changePreference(animes) {
    refresh(animes);
  }
  recentlyAddedtooltip.addEventListener('click', function () {
    changeh2tag('Recently Added', '')
    changethecatgory('Recently Added')
    changePreference(recentlyAddedAnimes);
  });
  Simulcasttooltip.addEventListener('click', function () {
    changeh2tag('Simulcast', '')
    changethecatgory('Simulcast')
    changePreference(SimulcastAnimes);
  });
  exclusivestooltip.addEventListener('click', function () {
    changeh2tag('Hidive Exclusives', '')
    changethecatgory('Hidive Exclusives')
    changePreference(exclusivesAnime);
  });
  trendingNowtooltip.addEventListener('click', function () {
    changeh2tag('Trending Now', '')
    changethecatgory('Trending Now')
    changePreference(TrendingNowAnime);
  });
  romancetooltip.addEventListener('click', function () {
    changeh2tag('', 'Romance')
    filterbygenre(romancefiltered, 'Romance ')
    console.log(romancefiltered)
    changePreference(romancefiltered);
  });
});
