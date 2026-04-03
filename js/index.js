// functions for the home page

function copyMail(el) {
  navigator.clipboard.writeText(
    document.getElementById("title").innerHTML.split(" ")[0].toLowerCase() +
      "@" +
      document
        .getElementById("title")
        .innerHTML.replace(" ", "")
        .toLowerCase() +
      ".com",
  );
  el.innerHTML =
    '<svg viewBox="0 0 32 32" fill="#008132"><g data-name="12-Mail"><path d="M11 24H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v9a1 1 0 0 1-2 0V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7a1 1 0 0 1 0 2z"/><path d="M16 14a1 1 0 0 1-.618-.214l-14-11a1 1 0 0 1 1.236-1.572L16 11.728 29.382 1.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 14z"/><path d="M2 23a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 23zM23 32a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zm0-16a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7z"/><path d="M22 27a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 1.414-1.414L22 24.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5A1 1 0 0 1 22 27z"/></g></svg>';
  copiedText = document.createElement("div");
  copiedText.innerHTML = "Copied!";
  copiedText.className = "copied-text";
  window.setTimeout(() => {
    copiedText.className = "fadeout-text";
  }, 1000);
  el.appendChild(copiedText);
}

// change the header photo
used_photos = [];

function changeWelcomePhoto() {
  photos = [
    "img/portraits/phd.jpg",
    "img/portraits/acm.png",
    "img/portraits/big_sur.png",
    "img/portraits/cherries.png",
    "img/portraits/desert_kantura.png",
    "img/portraits/fetch.png",
    "img/portraits/georgetown_1.png",
    "img/portraits/georgetown_2.png",
    "img/portraits/iros_poster.png",
    "img/portraits/kennedy_center.png",
    "img/portraits/korea_bridge.png",
    "img/portraits/kid.png",
    "img/portraits/korea_hanbok.png",
    "img/portraits/many_robots.png",
    "img/portraits/maryland_train.png",
    "img/portraits/undergrad.png",
    "img/portraits/windmill.png",
  ];

  let currentPhoto = document
    .getElementById("welcome-photo")
    .getAttribute("src");

  used_photos.push(currentPhoto); // store the current photo as used
  photos = photos.filter((x) => !used_photos.includes(x)); // filter out used photos

  if (photos.length == 0) {
    // reset if we run out of photos
    photos = used_photos;
    used_photos = [];
  }

  index = (photos.length * Math.random()) | 0; // choose a random photo
  document.getElementById("welcome-photo").setAttribute("src", photos[index]); // set the source
}
