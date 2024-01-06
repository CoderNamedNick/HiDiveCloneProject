import { AllAnimes, TrendingNowAnime, recentlyAddedAnimes, exclusivesAnime, SimulcastAnimes, RomanceAnime, ComedyAnime } from "../scripts/all-anime-infos.js";




let CatagoryPrefedByHeader = localStorage.getItem('asdfg')
console.log(CatagoryPrefedByHeader)

//function filters the array to be unique and only have one main id for extra meassure
let AllAnime = [];

function UniqueArray(param, param2) {
  param.forEach((anime, index) => {
    // Check if there is no other anime with the same ID before the current index
    const isUnique = !param.slice(0, index).some(otherAnime => otherAnime.id === anime.id);
    if (isUnique) {
      param2.push(anime);
    }
  });
}
UniqueArray(AllAnimes, AllAnime)

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
let CatButtonHTML = '';
let GenButtonHTML = '';
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
    CatButtonHTML = Catagory
  }
  if (Genre != '') {
    GenButtonHTML = Genre
  }
  document.getElementById('catagory-btn').innerText = `${CatButtonHTML}`
  document.getElementById('genre-btn').innerText = `${GenButtonHTML}`
}
function changethecatgory(param) {
  if (param != '') {
    currentCatagory = param
    console.log(currentCatagory)
  }
}
function changecoverphoto () {
  let coverphotoDiv = document.getElementById('coverphoto-div')
  if (Catagory === 'All') {
    coverphotoDiv.innerHTML = `<img class="coverphoto" src="css/PrefencesPosters/MostPopular_ISR.png">`
  }
  if (Catagory === 'Recently Added') {
    coverphotoDiv.innerHTML = `<img class="coverphoto" src="css/PrefencesPosters/DRB_RecentlyAdded.png">`
  }
  if (Catagory === 'Simulcast') {
    coverphotoDiv.innerHTML = `<img class="coverphoto" src="css/PrefencesPosters/DKG_Simulcasts.png">`
  }
  if (Catagory === 'Hidive Exclusives') {
    coverphotoDiv.innerHTML = `<img class="coverphoto" src="css/PrefencesPosters/ORH_HDExclusives.png">`
  }
  if (Catagory === 'Trending Now') {
    coverphotoDiv.innerHTML = `<img class="coverphoto" src="css/PrefencesPosters/TrendingNow-BPR.png">`
  }
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
let fantasyfiltered = [];
let seinenfiltered = [];
let shoujofiltered = [];
let sliceoflifefiltered = [];
let actionfiltered = [];
let adventurefiltered = [];
let dramafiltered = [];
let thrillerfiltered = [];

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
  let alltooltip = document.getElementById('All-genreTT')
  let romancetooltip = document.getElementById('RomanceTT')
  let comedytooltip = document.getElementById('ComedyTT')
  let fantasytooltip = document.getElementById('FantasyTT')
  let seinentooltip = document.getElementById('SeinenTT')
  let shoujotooltip = document.getElementById('ShoujoTT')
  let sliceoflifetooltip = document.getElementById('SliceoflifeTT')
  let actiontooltip = document.getElementById('ActionTT')
  let adventuretooltip = document.getElementById('AdventureTT')
  let dramatooltip = document.getElementById('DramaTT')
  let thrillertooltip = document.getElementById('ThrillerTT')


  changeh2tag('All', 'All')
  changeButtonHTML()
  changecoverphoto()
  changethecatgory('All')
  changePreference(AllAnime);

  function changePreference(animes) {
    refresh(animes);
  }
  AllAnimetooltip.addEventListener('click', function () {
    changeh2tag('All', 'All')
    changeButtonHTML()
    changecoverphoto()
    changethecatgory('All')
    changePreference(AllAnime);
  });
  recentlyAddedtooltip.addEventListener('click', function () {
    changeh2tag('Recently Added', 'All')
    changeButtonHTML()
    changecoverphoto()
    changethecatgory('Recently Added')
    changePreference(recentlyAddedAnimes);
  });
  Simulcasttooltip.addEventListener('click', function () {
    changeh2tag('Simulcast', 'All')
    changeButtonHTML()
    changecoverphoto()
    changethecatgory('Simulcast')
    changePreference(SimulcastAnimes);
  });
  exclusivestooltip.addEventListener('click', function () {
    changeh2tag('Hidive Exclusives', 'All')
    changeButtonHTML()
    changecoverphoto()
    changethecatgory('Hidive Exclusives')
    changePreference(exclusivesAnime);
  });
  trendingNowtooltip.addEventListener('click', function () {
    changeh2tag('Trending Now', 'All')
    changeButtonHTML()
    changecoverphoto()
    changethecatgory('Trending Now')
    changePreference(TrendingNowAnime);
  });
  alltooltip.addEventListener('click', function () {
    changeh2tag('', 'All')
    changeButtonHTML()
    changecoverphoto()
    changethecatgory('')
    if (currentCatagory === 'All') {
      changePreference(AllAnime);
    }
    if (currentCatagory === 'Recently Added') {
      changePreference(recentlyAddedAnimes);
    }
    if (currentCatagory === 'Simulcast') {
      changePreference(SimulcastAnimes);
    }
    if (currentCatagory === 'Hidive Exclusives') {
      changePreference(exclusivesAnime);
    }
    if (currentCatagory === 'Trending Now') {
      changePreference(TrendingNowAnime);
    }
  });
  romancetooltip.addEventListener('click', function () {
    changeh2tag('', 'Romance')
    changeButtonHTML()
    filterbygenre(romancefiltered, 'Romance ',)
    console.log(romancefiltered)
    changePreference(romancefiltered);
    romancefiltered = [];
  });
  comedytooltip.addEventListener('click', function () {
    changeh2tag('', 'Comedy')
    changeButtonHTML()
    filterbygenre(comedyfiltered, 'Comedy ',)
    console.log(comedyfiltered)
    changePreference(comedyfiltered);
    comedyfiltered = [];
  });
  fantasytooltip.addEventListener('click', function () {
    changeh2tag('', 'Fantasy')
    changeButtonHTML()
    filterbygenre(fantasyfiltered, 'Fantasy ',)
    console.log(fantasyfiltered)
    changePreference(fantasyfiltered);
    fantasyfiltered = [];
  });
  seinentooltip.addEventListener('click', function () {
    changeh2tag('', 'Seinen')
    changeButtonHTML()
    filterbygenre(seinenfiltered, 'Seinen ',)
    console.log(seinenfiltered)
    changePreference(seinenfiltered);
    seinenfiltered = [];
  });
  shoujotooltip.addEventListener('click', function () {
    changeh2tag('', 'Shoujo')
    changeButtonHTML()
    filterbygenre(shoujofiltered, 'Shoujo ',)
    console.log(shoujofiltered)
    changePreference(shoujofiltered);
    shoujofiltered = [];
  });
  sliceoflifetooltip.addEventListener('click', function () {
    changeh2tag('', 'Slice of Life')
    changeButtonHTML()
    filterbygenre(sliceoflifefiltered, 'Slice of Life ',)
    console.log(sliceoflifefiltered)
    changePreference(sliceoflifefiltered);
    sliceoflifefiltered = [];
  });
  actiontooltip.addEventListener('click', function () {
    changeh2tag('', 'Action')
    changeButtonHTML()
    filterbygenre(actionfiltered, 'Action ',)
    console.log(actionfiltered)
    changePreference(actionfiltered);
    actionfiltered = [];
  });
  adventuretooltip.addEventListener('click', function () {
    changeh2tag('', 'Adventure')
    changeButtonHTML()
    filterbygenre(adventurefiltered, 'Adventure ',)
    console.log(adventurefiltered)
    changePreference(adventurefiltered);
    adventurefiltered = [];
  });
  dramatooltip.addEventListener('click', function () {
    changeh2tag('', 'Drama')
    changeButtonHTML()
    filterbygenre(dramafiltered, 'Drama ',)
    console.log(dramafiltered)
    changePreference(dramafiltered);
    dramafiltered = [];
  });
  thrillertooltip.addEventListener('click', function () {
    changeh2tag('', 'Thriller')
    changeButtonHTML()
    filterbygenre(thrillerfiltered, 'Thriller ',)
    console.log(thrillerfiltered)
    changePreference(thrillerfiltered);
    thrillerfiltered = [];
  });
  let FinallyThisworks = () => {
    if (CatagoryPrefedByHeader === 'Simulcast') {
      changeh2tag('Simulcast', 'All')
      changeButtonHTML()
      changecoverphoto()
      changethecatgory('Simulcast')
      changePreference(SimulcastAnimes);
    }if (CatagoryPrefedByHeader === 'All') {
      changeh2tag('All', 'All')
      changeButtonHTML()
      changecoverphoto()
      changethecatgory('All')
      changePreference(AllAnime);
    }
  }

  FinallyThisworks()
});

