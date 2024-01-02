import { TrendingNowAnime, recentlyAddedAnimes, exclusivesAnime, SimulcastAnimes, RomanceAnime } from "../scripts/all-anime-infos.js";


console.log(RomanceAnime)
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
//refresh(recentlyAddedAnimes)

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
    changePreference(recentlyAddedAnimes);
  });
  Simulcasttooltip.addEventListener('click', function () {
    changePreference(SimulcastAnimes);
  });
  exclusivestooltip.addEventListener('click', function () {
    changePreference(exclusivesAnime);
  });
  trendingNowtooltip.addEventListener('click', function () {
    changePreference(TrendingNowAnime);
  });
  romancetooltip.addEventListener('click', function () {
    changePreference(RomanceAnime);
  });
});
