// functions for creating the home page

function loadHome() {
  var home = generateHome();
  document.body.insertBefore(home, document.getElementById("title"));

  handleAbout();
}


function copyMail(el) {
  navigator.clipboard.writeText(document.getElementById("title").innerHTML.split(" ")[0].toLowerCase() + "@" + document.getElementById("title").innerHTML.replace(" ", "").toLowerCase() + ".com");
  el.innerHTML = '<svg viewBox="0 0 32 32" fill="#008132"><g data-name="12-Mail"><path d="M11 24H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v9a1 1 0 0 1-2 0V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7a1 1 0 0 1 0 2z"/><path d="M16 14a1 1 0 0 1-.618-.214l-14-11a1 1 0 0 1 1.236-1.572L16 11.728 29.382 1.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 14z"/><path d="M2 23a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 23zM23 32a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zm0-16a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7z"/><path d="M22 27a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 1.414-1.414L22 24.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5A1 1 0 0 1 22 27z"/></g></svg>'
  copiedText = document.createElement("div")
  copiedText.innerHTML = "Copied!" 
  copiedText.className = "copied-text"
  window.setTimeout(() => {
    copiedText.className = "fadeout-text"
  }, 1000)
  el.appendChild(copiedText)
}


function generateHome() {
  var home = document.createElement("div");

  var name = document.createElement("div");
    name.className = "name-title";
    name.id = "name-title";
    name.innerHTML = "Jack Kolb";
    name.setAttribute("onclick", "switchColorMode()");

  var welcome = document.createElement("div");
    welcome.className = "welcome-title";
    welcome.id = "welcome-title";
    welcome.innerHTML = "Welcome to this portfolio of my works<br>";

  var icons = document.createElement("div");
    icons.className = "icon-row";

  var github_icon = document.createElement("a");
    github_icon.setAttribute("href", "https://github.com/jackkolb");
    github_icon.setAttribute("target", "_blank");
    github_icon.setAttribute("style", "text-decoration: none; margin: 10px");
    github_icon.innerHTML = "<svg viewBox='0 0 48 48' width='24' height='24'><path class='st0' d='M23.928 1.15C11 1.15.514 11.638.514 24.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 0 1 2.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266-.143-12.785-10.63-23.27-23.558-23.27z' id='github-icon' fill='darkslategrey' clip-rule='evenodd' fill-rule='evenodd'/></svg>";

  var linkedin_icon = document.createElement("a");
    linkedin_icon.setAttribute("href", "https://www.linkedin.com/in/jack-kolb-786134b8/");
    linkedin_icon.setAttribute("target", "_blank");
    linkedin_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
    linkedin_icon.innerHTML = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path id='linkedin-icon' fill='darkslategrey' d='M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z' /></svg>";

  // var facebook_icon = document.createElement("a");
  //   facebook_icon.setAttribute("href", "https://facebook.com/jackhkolb");
  //   facebook_icon.setAttribute("target", "_blank");
  //   facebook_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
  //   facebook_icon.innerHTML = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path id='facebook-icon' fill='darkslategrey' d='M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z'/></svg>"

  var scholar_icon = document.createElement("a");
    scholar_icon.setAttribute("href", "https://scholar.google.com/citations?user=kKoPyvIAAAAJ");
    scholar_icon.setAttribute("target", "_blank");
    scholar_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
    scholar_icon.innerHTML = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><style type='text/css'><![CDATA[.st0{fill:#356AC3;}.st1{fill:#A0C3FF;}.st2{fill:#76A7FA;}.st3{fill:#4285F4;}]]></style><g><polygon class='st3' points='61.44,98.67 0,48.64 61.44,0 61.44,98.67'/><polygon class='st0' points='61.44,98.67 122.88,48.64 61.44,0 61.44,98.67'/><path class='st1' d='M97.28,87.04c0-19.79-16.05-35.84-35.84-35.84c-19.79,0-35.84,16.05-35.84,35.84s16.05,35.84,35.84,35.84 C81.23,122.88,97.28,106.83,97.28,87.04L97.28,87.04z'/><path class='st2' d='M29.05,71.68C34.8,59.57,47.14,51.2,61.44,51.2c14.3,0,26.64,8.37,32.39,20.48H29.05L29.05,71.68z'/></g></svg>"

  icons.append(github_icon);
  icons.append(linkedin_icon);
  icons.append(scholar_icon);
  icons.setAttribute("style", "padding: 15px 10px;");

  var buttons = document.createElement("div");
    buttons.className = "buttons";

  var about_div = document.createElement("div");
    about_div.className = "tab-title";

  var about_button = document.createElement("button");
    about_button.setAttribute("id", "about-button");
    about_button.setAttribute("onclick", "handleAbout()");
    about_button.setAttribute("style", "margin: 10px");
    about_button.innerHTML = "<b>About Me</b>";

  about_div.append(about_button);

  var research_div = document.createElement("div");
  research_div.className = "tab-title";

  var research_button = document.createElement("button");
    research_button.setAttribute("id", "research-button");
    research_button.setAttribute("onclick", "handleResearch()");
    research_button.setAttribute("style", "margin: 10px");
    research_button.innerHTML = "<b>Research</b>";

    research_div.append(research_button);

  var projects_div = document.createElement("div");
    projects_div.className = "tab-title";

  var projects_button = document.createElement("button");
    projects_button.setAttribute("id", "projects-button");
    projects_button.setAttribute("onclick", "handleProjects()");
    projects_button.setAttribute("style", "margin: 10px");
    projects_button.innerHTML = "<b>Projects</b>";

  projects_div.append(projects_button);

  var resume_div = document.createElement("div");
    resume_div.className = "tab-title";

  var resume_button = document.createElement("button");
    resume_button.setAttribute("id", "resume-button");
    resume_button.setAttribute("onclick", "handleResume()");
    resume_button.setAttribute("style", "margin: 10px");
    resume_button.innerHTML = "<b>Resume</b>";

  resume_div.append(resume_button);

  buttons.append(about_div);
  buttons.append(projects_div);
  buttons.append(reserach_div);
  buttons.append(resume_div);

  var flag = document.createElement("div");
    flag.setAttribute("id", "flag")

  var breakpoint = document.createElement("br");

  home.append(name);
  home.append(welcome);
  home.append(icons);
  home.append(breakpoint);
  home.append(buttons);

  home.append(flag);

  home.append(breakpoint);

  return home;
}


// change the header photo
used_photos = []

function changeWelcomePhoto() {
  photos = [
    "img/portraits/acm.png",
    "img/portraits/cherries.png",
    "img/portraits/fetch.png", 
    "img/portraits/georgetown_1.png", 
    "img/portraits/georgetown_2.png", 
    "img/portraits/kennedy_center.png", 
    "img/portraits/korea_bridge.png", 
    "img/portraits/kid.png", 
    "img/portraits/korea_hanbok.png", 
    "img/portraits/many_robots.png", 
    "img/portraits/maryland_train.png",
    "img/portraits/undergrad.png"
  ]

  let currentPhoto = document.getElementById("welcome-photo").getAttribute("src")

  used_photos.push(currentPhoto)  // store the current photo as used
  photos = photos.filter(x => !used_photos.includes(x))  // filter out used photos

  if (photos.length == 0) {  // reset if we run out of photos
    photos = used_photos
    used_photos = []
  }

  index = photos.length * Math.random() | 0  // choose a random photo
  document.getElementById("welcome-photo").setAttribute("src", photos[index])  // set the source
}