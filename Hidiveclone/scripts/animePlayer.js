import { AllAnimes } from "../scripts/all-anime-infos.js";
import { retrievedAnimeID } from "../scripts/Anime.Slected.js";



console.log(retrievedAnimeID)

AllAnimes.forEach(Anime => {
  if (Anime.id === retrievedAnimeID) {
    console.log('hellllooooooo')
  }
});