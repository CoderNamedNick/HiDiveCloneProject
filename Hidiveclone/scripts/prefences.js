


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
      <div class="anime-times-flexbox ${anime.Classid}" style="position: relative;">
        <img class="anime-Previews" src="${anime.image}">
        <div class="new-episode-times" style="z-index: 10003"><p>${anime.newEpTimes}</p></div>
        <a href="#" class="blah" data-anime-all-id="${anime.id}"><span class="hovers ${anime.hoverID}">${anime.name} <br> <span class="hovercaret"> &#65088;</span></span></a>
      </div>
    `;
  });
  return html;
};

var refresh = () => {
  //recentlyAddedAnimeInfosHTML = generateHtml(..., ...);
  //document.querySelector('.js-anime-slides-recentlyAdded').innerHTML = `${recentlyAddedAnimeInfosHTML}`;

  // Set up click event listeners after refreshing
  document.querySelectorAll('.blah').forEach((element) => {
    element.addEventListener('click', function () {
      clickedpreview(element.dataset.animeAllId);
    });
  });
}