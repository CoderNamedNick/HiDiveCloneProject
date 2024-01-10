function makeHoverEffects(images, div1, div2) {
  images.forEach(function (image) {
    image.addEventListener('mouseover', function () {
      div1.forEach(function (div) {
        div.style.backgroundColor = 'rgb(56, 56, 56)';
      });

      div2.forEach(function (div) {
        div.style.backgroundColor = 'rgb(56, 56, 56)';
      });
    });

    image.addEventListener('mouseout', function () {
      div1.forEach(function (div) {
        div.style.backgroundColor = '';
      });

      div2.forEach(function (div) {
        div.style.backgroundColor = '';
      });
    });
  });

  div1.forEach(function (div) {
    div.addEventListener('mouseover', function () {
      div1.forEach(function (div) {
        div.style.backgroundColor = 'rgb(56, 56, 56)';
      });

      div2.forEach(function (div) {
        div.style.backgroundColor = 'rgb(56, 56, 56)';
      });
    });

    div.addEventListener('mouseout', function () {
      div1.forEach(function (div) {
        div.style.backgroundColor = '';
      });

      div2.forEach(function (div) {
        div.style.backgroundColor = '';
      });
    });
  });

  div2.forEach(function (div) {
    div.addEventListener('mouseover', function () {
      div1.forEach(function (div) {
        div.style.backgroundColor = 'rgb(56, 56, 56)';
      });

      div2.forEach(function (div) {
        div.style.backgroundColor = 'rgb(56, 56, 56)';
      });
    });

    div.addEventListener('mouseout', function () {
      div1.forEach(function (div) {
        div.style.backgroundColor = '';
      });

      div2.forEach(function (div) {
        div.style.backgroundColor = '';
      });
    });
  });
}

for (let i = 0; i < 9; i++) {
  let boxImages = document.querySelectorAll(`.box-image${i}`);
  let boxDiv1 = document.querySelectorAll(`.box-news-title${i}`);
  let boxDiv2 = document.querySelectorAll(`.box-sample-text${i}`);

  makeHoverEffects(boxImages, boxDiv1, boxDiv2);
}