import { TrendingNowAnime, recentlyAddedAnimes } from "../scripts/all-anime-infos.js";





document.addEventListener('DOMContentLoaded', function () {
  let catagoryDiv = document.querySelector('.catagory-tooltip1');
  let catagoryBTN = document.querySelector('.prefences-btn');

  function toolTipsShow() {
      let computedStyle = window.getComputedStyle(catagoryDiv);
      let currentOpacity = computedStyle.getPropertyValue('opacity');

      if (currentOpacity === '0') {
          catagoryDiv.style.opacity = '1';
      } else {
          catagoryDiv.style.opacity = '0';
      }
  }

  catagoryBTN.addEventListener('click', toolTipsShow);
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
  prefencedAnimesHTML = generateprefencedHtml(param, prefencedAnimesHTML) + generateprefencedHtml(param, prefencedAnimesHTML);
  document.querySelector('.sub-main-grid').innerHTML = `${prefencedAnimesHTML}`;

  // Set up click event listeners after refreshing
  document.querySelectorAll('.blah').forEach((element) => {
    element.addEventListener('click', function () {
      clickedpreview(element.dataset.animeAllId);
    });
  });
}
refresh(TrendingNowAnime)
//refresh(recentlyAddedAnimes)