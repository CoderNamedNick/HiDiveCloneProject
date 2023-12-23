import {recentlyAddedAnimeInfos} from "./animes-info.js";
import { SimulcastAnimeInfos } from "./animes-info.js";
import { exclusivesAnimeInfos } from "./animes-info.js";
import { IntroToHidiveAnimeInfos } from "./animes-info.js";
import { TrendingNowAnimeInfos } from "./animes-info.js";


alert('this is a clone site made for learning!! FOR REAL ANIME GO TO HIDIVE')

let recentlyAddedAnimeInfosHTML = '';

const generateHtml = (infos, html) => {
  html = '';

  infos.forEach((anime) => {
    html += `
      <div class="anime-times-flexbox ${anime.id}" style="position: relative; opacity: ${anime.opacity}">
        <img class="anime-Previews" src="${anime.image}">
        <div class="new-episode-times" style="z-index: 10003"><p>${anime.newEpTimes}</p></div>
        <a href="https://www.hidive.com"><span class="hovers ${anime.hoverID}">${anime.name}</span></a>
      </div>
    `;
  });
  return html;
};

var refresh = () => {
  recentlyAddedAnimeInfosHTML = generateHtml(recentlyAddedAnimeInfos, recentlyAddedAnimeInfosHTML);
  document.querySelector('.js-anime-slides-recentlyAdded').innerHTML = `${recentlyAddedAnimeInfosHTML}`
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
  recentlyAddedAnimeInfosHTML = '';
  changeopacity(recentlyAddedAnimeInfos);
  refresh()
}

document.getElementById('prev-BTN').onclick = () => {
  recentlyAddedAnimeInfosHTML = '';
  changeopacity(recentlyAddedAnimeInfos);
  refresh()
}

let SimulcastAnimeInfosHTML = '';

var refresh2 = () => {
  SimulcastAnimeInfosHTML = generateHtml(SimulcastAnimeInfos, SimulcastAnimeInfosHTML);
  document.querySelector('.js-anime-slides-simulcast').innerHTML = `${SimulcastAnimeInfosHTML}`
}

refresh2()

document.getElementById('next-BTN2').onclick = () => {
  SimulcastAnimeInfosHTML = '';
  SimulcastAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh2()
}

document.getElementById('prev-BTN2').onclick = () => {
  SimulcastAnimeInfosHTML = '';
  SimulcastAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh2()
}

let exclusivesAnimeInfosHTML = '';

var refresh3 = () => {
  exclusivesAnimeInfosHTML = generateHtml(exclusivesAnimeInfos, exclusivesAnimeInfosHTML);
  document.querySelector('.js-anime-slides-exclusives').innerHTML = `${exclusivesAnimeInfosHTML}` 
}

refresh3()

document.getElementById('next-BTN3').onclick = () => {
  exclusivesAnimeInfosHTML = '';
  exclusivesAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh3()
}

document.getElementById('prev-BTN3').onclick = () => {
  exclusivesAnimeInfosHTML = '';
  exclusivesAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh3()
}

let IntroToHidiveAnimeInfosHTML = '';

var refresh4 = () => {
  IntroToHidiveAnimeInfosHTML = generateHtml(IntroToHidiveAnimeInfos, IntroToHidiveAnimeInfosHTML);
  document.querySelector('.js-anime-slides-INTRO-TO-HIDIVE').innerHTML = `${IntroToHidiveAnimeInfosHTML}`
}

refresh4()

document.getElementById('next-BTN4').onclick = () => {
  IntroToHidiveAnimeInfosHTML = '';
  IntroToHidiveAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh4()
}

document.getElementById('prev-BTN4').onclick = () => {
  IntroToHidiveAnimeInfosHTML = '';
  IntroToHidiveAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh4()
}

let TrendingNowAnimeInfosHTML = '';

var refresh5 = () => {
  TrendingNowAnimeInfosHTML = generateHtml(TrendingNowAnimeInfos, TrendingNowAnimeInfosHTML); 
  document.querySelector('.js-anime-slides-TRENDING-NOW').innerHTML = `${TrendingNowAnimeInfosHTML}` 
}

refresh5()

document.getElementById('next-BTN5').onclick = () => {
  TrendingNowAnimeInfosHTML = '';
  TrendingNowAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh5()
}

document.getElementById('prev-BTN5').onclick = () => {
  TrendingNowAnimeInfosHTML = '';
  TrendingNowAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh5()
}
