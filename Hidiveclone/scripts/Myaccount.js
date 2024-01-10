document.addEventListener('DOMContentLoaded', function() {
  let saveBTN = document.getElementById('savebtn');
  let Nicknameinput = document.getElementById('input1');
  let Dateinput = document.getElementById('input2');
  let Languageinput = document.getElementById('input3');

  if (!saveBTN || !Nicknameinput || !Dateinput || !Languageinput) {
    console.error('One or more elements not found.');
    return;
  }

  let saveddataNickname = '';
  let saveddatadate = '';
  let saveddatalang = '';

  saveBTN.onclick = function() {
    if (Nicknameinput && Dateinput && Languageinput) {
      saveddataNickname = Nicknameinput.value;
      saveddatadate = Dateinput.value;
      saveddatalang = Languageinput.value;

      // Set cookies for each input value with a one-day expiration
      setSessionCookie('nickname', saveddataNickname, '/');
      setSessionCookie('date', saveddatadate, '/');
      setSessionCookie('language', saveddatalang, '/');

      console.log('Values saved:', saveddataNickname, saveddatadate, saveddatalang);
    } else {
      console.error('One or more input elements are undefined.');
    }
  };
});

function setSessionCookie(name, value, path = '/') {
  const expires = new Date();
  expires.setDate(expires.getDate() + 1); // Set expiration to one day from now
  const cookieString = `${name}=${value}; path=${path}; expires=${expires.toUTCString()}`;
  document.cookie = cookieString;
}

function getCookie(name) {
  const cookieArray = document.cookie.split('; ');
  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair = cookieArray[i].split('=');
    if (cookiePair[0] === name) {
      return cookiePair[1];
    }
  }
  return null;
}

let Nickname = getCookie('nickname')
let date = getCookie('date')
let Language = getCookie('language')

let changehtml = () => {
  if (Nickname != null && date != null && Language != null) {
    document.getElementById('main-sub-box').innerHTML = `
      <div class="private-flexbox">
        <div class="private-h2"><h2>PRIVATE</h2></div>
        <div class="private-div">
          <p class="p-tags">Nickname <span style="color: rgb(3, 156, 216); font-size: 12px;">Your Nickname is private and only used for profiles.</span></p>
          <input id="input1" class="Inputs" type="text" value="${Nickname}">
          <p class="p-tags">Birth Date<span>Please dont lie</span></p>
          <input id="input2" class="Inputs" type="date" value="${date}">
        </div>
      </div>
      <hr>
      <div class="Streaming-flexbox">
        <div class="Streaming-h2"><h2>STREAMING</h2></div>
        <div class="streaming-div">
          <p class="p-tags">Language <span style="color: rgb(3, 156, 216); font-size: 12px;">The default language when multiple languages are available, such as dubs.</span></p>
          <select id="input3" class="Inputs"  name="UserProfileLang" id="UserProileLanguage">
            <option value="English">English</option>
            <option value="Japanese">Japanese</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Korean">Korean</option>
            <option value="Starter">${Language}</option>
          </select>
        </div>
      </div>
    `
  }
}

changehtml()