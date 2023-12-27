import { SimulcastAnimeInfos } from "./animes-info.js";
import { exclusivesAnimeInfos } from "./animes-info.js";
import { IntroToHidiveAnimeInfos } from "./animes-info.js";
import { TrendingNowAnimeInfos } from "./animes-info.js";
import { recentlyAddedAnimes } from "./all-anime-infos.js";


alert('this is a clone site made for learning!! FOR REAL ANIME GO TO HIDIVE')

console.log(recentlyAddedAnimes)

localStorage.clear();

let recentlyAddedAnimeInfosHTML = '';

function clickedpreview(animeId) {
  let retrievedAnime1ID = animeId;
  localStorage.setItem("AnimeSelected",retrievedAnime1ID)
  //alert('wait');
  window.location.href = "watchAnime.html";
}

const generateHtml = (array, html) => {
  html = '';

  array.forEach((anime) => {
    html += `
      <div class="anime-times-flexbox ${anime.Classid}" style="position: relative; opacity: ${anime.opacity}">
        <img class="anime-Previews" src="${anime.image}">
        <div class="new-episode-times" style="z-index: 10003"><p>${anime.newEpTimes}</p></div>
        <a href="#" class="blah" data-anime-all-id="${anime.id}"><span class="hovers ${anime.hoverID}">${anime.name}</span></a>
      </div>
    `;
  });
  return html;
};

var refresh = () => {
  recentlyAddedAnimeInfosHTML = generateHtml(recentlyAddedAnimes, recentlyAddedAnimeInfosHTML);
  document.querySelector('.js-anime-slides-recentlyAdded').innerHTML = `${recentlyAddedAnimeInfosHTML}`;

  // Set up click event listeners after refreshing
  document.querySelectorAll('.blah').forEach((element) => {
    element.addEventListener('click', function () {
      clickedpreview(element.dataset.animeAllId);
    });
  });
}

refresh();

let changeopacity = (param) => {
  param.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
}

document.getElementById('next-BTN').onclick = () => {
  changeopacity(recentlyAddedAnimes);
  refresh()
}

document.getElementById('prev-BTN').onclick = () => {
  changeopacity(recentlyAddedAnimes);
  refresh()
}

let SimulcastAnimeInfosHTML = '';

var refresh2 = () => {
  SimulcastAnimeInfosHTML = generateHtml(SimulcastAnimeInfos, SimulcastAnimeInfosHTML);
  document.querySelector('.js-anime-slides-simulcast').innerHTML = `${SimulcastAnimeInfosHTML}`

   // Set up click event listeners after refreshing
   document.querySelectorAll('.blah').forEach((element) => {
    element.addEventListener('click', function () {
      clickedpreview(element.dataset.animeAllId);
    });
  });
}

refresh2()

document.getElementById('next-BTN2').onclick = () => {
  SimulcastAnimeInfosHTML = '';
  changeopacity(SimulcastAnimeInfos);
  refresh2()
}

document.getElementById('prev-BTN2').onclick = () => {
  SimulcastAnimeInfosHTML = '';
  changeopacity(SimulcastAnimeInfos)
  refresh2()
}

let exclusivesAnimeInfosHTML = '';

var refresh3 = () => {
  exclusivesAnimeInfosHTML = generateHtml(exclusivesAnimeInfos, exclusivesAnimeInfosHTML);
  document.querySelector('.js-anime-slides-exclusives').innerHTML = `${exclusivesAnimeInfosHTML}`  

   // Set up click event listeners after refreshing
  document.querySelectorAll('.blah').forEach((element) => {
    element.addEventListener('click', function () {
      clickedpreview(element.dataset.animeAllId);
    });
  });
}

refresh3()

document.getElementById('next-BTN3').onclick = () => {
  exclusivesAnimeInfosHTML = '';
  changeopacity(exclusivesAnimeInfos)
  refresh3()
}

document.getElementById('prev-BTN3').onclick = () => {
  exclusivesAnimeInfosHTML = '';
  changeopacity(exclusivesAnimeInfos)
  refresh3()
}

let IntroToHidiveAnimeInfosHTML = '';

var refresh4 = () => {
  IntroToHidiveAnimeInfosHTML = generateHtml(IntroToHidiveAnimeInfos, IntroToHidiveAnimeInfosHTML);
  document.querySelector('.js-anime-slides-INTRO-TO-HIDIVE').innerHTML = `${IntroToHidiveAnimeInfosHTML}`

   // Set up click event listeners after refreshing
   document.querySelectorAll('.blah').forEach((element) => {
    element.addEventListener('click', function () {
      clickedpreview(element.dataset.animeAllId);
    });
  });
}

refresh4()

document.getElementById('next-BTN4').onclick = () => {
  IntroToHidiveAnimeInfosHTML = '';
  changeopacity(IntroToHidiveAnimeInfos)
  refresh4()
}

document.getElementById('prev-BTN4').onclick = () => {
  IntroToHidiveAnimeInfosHTML = '';
  changeopacity(IntroToHidiveAnimeInfos)
  refresh4()
}

let TrendingNowAnimeInfosHTML = '';

var refresh5 = () => {
  TrendingNowAnimeInfosHTML = generateHtml(TrendingNowAnimeInfos, TrendingNowAnimeInfosHTML); 
  document.querySelector('.js-anime-slides-TRENDING-NOW').innerHTML = `${TrendingNowAnimeInfosHTML}`  

   // Set up click event listeners after refreshing
   document.querySelectorAll('.blah').forEach((element) => {
    element.addEventListener('click', function () {
      clickedpreview(element.dataset.animeAllId);
    });
  });
}

refresh5()

document.getElementById('next-BTN5').onclick = () => {
  TrendingNowAnimeInfosHTML = '';
  changeopacity(TrendingNowAnimeInfos)
  refresh5()
}

document.getElementById('prev-BTN5').onclick = () => {
  TrendingNowAnimeInfosHTML = '';
  changeopacity(TrendingNowAnimeInfos)
  refresh5()
}
