const retrievedAnime = localStorage.getItem("AnimeSlected")

export let AnimeSelctedToWatch = () => {
  window.location.href = "watchAnime.html";
}


console.log(retrievedAnime)