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
}

refresh();
document.querySelector('.js-anime-slides-recentlyAdded').innerHTML = `${recentlyAddedAnimeInfosHTML}`

document.getElementById('next-BTN').onclick = () => {
  recentlyAddedAnimeInfosHTML = '';
  recentlyAddedAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh()
  document.querySelector('.js-anime-slides-recentlyAdded').innerHTML = `${recentlyAddedAnimeInfosHTML}`
}

document.getElementById('prev-BTN').onclick = () => {
  recentlyAddedAnimeInfosHTML = '';
  recentlyAddedAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh()
  document.querySelector('.js-anime-slides-recentlyAdded').innerHTML = `${recentlyAddedAnimeInfosHTML}`
}

let SimulcastAnimeInfosHTML = '';

var refresh2 = () => {
  SimulcastAnimeInfosHTML = generateHtml(SimulcastAnimeInfos, SimulcastAnimeInfosHTML);
}

refresh2()

document.querySelector('.js-anime-slides-simulcast').innerHTML = `${SimulcastAnimeInfosHTML}`

document.getElementById('next-BTN2').onclick = () => {
  SimulcastAnimeInfosHTML = '';
  SimulcastAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh2()
  document.querySelector('.js-anime-slides-simulcast').innerHTML = `${SimulcastAnimeInfosHTML}`
}

document.getElementById('prev-BTN2').onclick = () => {
  SimulcastAnimeInfosHTML = '';
  SimulcastAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh2()
  document.querySelector('.js-anime-slides-simulcast').innerHTML = `${SimulcastAnimeInfosHTML}`
}

let exclusivesAnimeInfosHTML = '';


var refresh3 = () => {
  exclusivesAnimeInfos.forEach((Anime) => {
    exclusivesAnimeInfosHTML += `
    <div style=" position: relative; opacity: ${Anime.opacity}" class="anime-times-flexbox ${Anime.id}">
      <img class="anime-Previews" src="${Anime.image}">
      <div style="z-index: 10003" class="new-episode-times"><p>${Anime.newEpTimes}</p></div>
      <a href="https://www.hidive.com"><span class="hovers ${Anime.hoverID}">${Anime.name}</span></a>
    </div>
    `;
  }) 
}

refresh3()


console.log(exclusivesAnimeInfosHTML)

document.getElementById('next-BTN3').onclick = () => {
  exclusivesAnimeInfosHTML = '';
  exclusivesAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh3()
  document.querySelector('.js-anime-slides-exclusives').innerHTML = `${exclusivesAnimeInfosHTML}`
}

document.getElementById('prev-BTN3').onclick = () => {
  exclusivesAnimeInfosHTML = '';
  exclusivesAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh3()
  document.querySelector('.js-anime-slides-exclusives').innerHTML = `${exclusivesAnimeInfosHTML}`
}


document.querySelector('.js-anime-slides-exclusives').innerHTML = `${exclusivesAnimeInfosHTML}` 




let IntroToHidiveAnimeInfosHTML = '';


var refresh4 = () => {
  IntroToHidiveAnimeInfos.forEach((Anime) => {
    IntroToHidiveAnimeInfosHTML += `
    <div style=" position: relative; opacity: ${Anime.opacity}" class="anime-times-flexbox ${Anime.id}">
      <img class="anime-Previews" src="${Anime.image}">
      <div style="z-index: 10003" class="new-episode-times"><p>${Anime.newEpTimes}</p></div>
      <a href="https://www.hidive.com"><span class="hovers ${Anime.hoverID}">${Anime.name}</span></a>
    </div>
    `;
  }) 
}

refresh4()


console.log(IntroToHidiveAnimeInfosHTML)

document.getElementById('next-BTN4').onclick = () => {
  IntroToHidiveAnimeInfosHTML = '';
  IntroToHidiveAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh4()
  document.querySelector('.js-anime-slides-INTRO-TO-HIDIVE').innerHTML = `${IntroToHidiveAnimeInfosHTML}`
}

document.getElementById('prev-BTN4').onclick = () => {
  IntroToHidiveAnimeInfosHTML = '';
  IntroToHidiveAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh4()
  document.querySelector('.js-anime-slides-INTRO-TO-HIDIVE').innerHTML = `${IntroToHidiveAnimeInfosHTML}`
}


document.querySelector('.js-anime-slides-INTRO-TO-HIDIVE').innerHTML = `${IntroToHidiveAnimeInfosHTML}` 




let TrendingNowAnimeInfosHTML = '';


var refresh5 = () => {
  TrendingNowAnimeInfos.forEach((Anime) => {
    TrendingNowAnimeInfosHTML += `
    <div style=" position: relative; opacity: ${Anime.opacity}" class="anime-times-flexbox ${Anime.id}">
      <img class="anime-Previews" src="${Anime.image}">
      <div style="z-index: 10003" class="new-episode-times"><p>${Anime.newEpTimes}</p></div>
      <a href="https://www.hidive.com"><span class="hovers ${Anime.hoverID}">${Anime.name}</span></a>
    </div>
    `;
  }) 
}

refresh5()


console.log(TrendingNowAnimeInfosHTML)

document.getElementById('next-BTN5').onclick = () => {
  TrendingNowAnimeInfosHTML = '';
  TrendingNowAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh5()
  document.querySelector('.js-anime-slides-TRENDING-NOW').innerHTML = `${TrendingNowAnimeInfosHTML}`
}

document.getElementById('prev-BTN5').onclick = () => {
  TrendingNowAnimeInfosHTML = '';
  TrendingNowAnimeInfos.forEach((Anime) => {
    if (Anime.opacity === 1) {
      Anime.opacity = 0
    }else {Anime.opacity = 1};
  });
  refresh5()
  document.querySelector('.js-anime-slides-TRENDING-NOW').innerHTML = `${TrendingNowAnimeInfosHTML}`
}


document.querySelector('.js-anime-slides-TRENDING-NOW').innerHTML = `${TrendingNowAnimeInfosHTML}` 

