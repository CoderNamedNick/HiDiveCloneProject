import { AllAnimes } from "../scripts/all-anime-infos.js";
import { retrievedAnimeID } from "../scripts/Anime.Slected.js";

const retrievedAnime2ID = localStorage.getItem("AnimeSelected")

AllAnimes.forEach(Anime => {
  if (Anime.id === retrievedAnimeID) {
    document.getElementById('all-video-div').innerHTML = `
    <div class="VIDEO">
          Obviously due to copyright i cannot have the anime episode
        </div>
        <div class="video-description">
          <div class="video-name">
            <p>${Anime.name}</p>
          </div>
          <div>
            <button class="video-buttons">add to que</button>
            <button class="video-buttons">add favorite</button>
          </div>
          <hr class="hr1">
          <div class="video-stats">
            SEASON 1 EPISODE 1 | TV-PG | PREMIERE: 10/5/2018
          </div>
          <div class="episode-description">
            <h1 class="video-title">First episode Title</h1>
            <p>
              ${Anime.paragraph}
            </p>
          </div>
        </div>
    `
  } 
});

AllAnimes.forEach(Anime => {
  if (Anime.id === retrievedAnime2ID) {
    document.getElementById('all-video-div').innerHTML = `
    <div class="VIDEO">
          Obviously due to copyright i cannot have the anime episode
        </div>
        <div class="video-description">
          <div class="video-name">
            <p>${Anime.name}</p>
          </div>
          <div>
            <button class="video-buttons">add to que</button>
            <button class="video-buttons">add favorite</button>
          </div>
          <hr class="hr1">
          <div class="video-stats">
            SEASON 1 EPISODE 1 | TV-PG | PREMIERE: 10/5/2018
          </div>
          <div class="episode-description">
            <h1 class="video-title">First episode Title</h1>
            <p>
              ${Anime.paragraph}
            </p>
          </div>
        </div>
    `
  } 
});