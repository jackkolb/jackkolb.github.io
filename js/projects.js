// javascript functions for projects tab

var projects_json = [
  {
    name: "Partially-Observable OvercookedAI Domain",
    github: "https://github.com/gt-cec/tmm-hai",
    research: "true",
    tools: "Python, PyGame, HTML, JS",
    time: "2024",
    status: "Complete",
    short:
      "A revamped OvercookedAI domain that actually works, supports partial-observability, and has a pretty UI.",
    images: [],
    long: "A much-needed revamp of the OvercookedAI domain. Unnecessary bloat was removed, old/depreciated libraries were updated, the UI was redone, multiple agent support was added, and partial-observability support was added.",
  },
  {
    name: "MAISR: Multi-Agent ISR Gym for Reinforcement Learning",
    github: "https://github.com/gt-cec/maisr",
    research: "true",
    tools: "Python, PyGame, Gym",
    time: "2024",
    status: "Complete",
    short:
      "A multi-agent aircraft ISR environment, suitable for reinforcement learning and human-robot teaming.",
    images: [],
    long: "A PyGame implementation of our intelligence, surveillance, and reconnaisance environment. Allows for training reinforcement learning agents, and extended to multi-agent.",
  },
  {
    name: "Multi-Agent Robot Operation Scenarios",
    github:
      "https://github.com/GT-RAIL/cognitive-states-in-human-robot-teaming",
    research: "true",
    tools: "Python, Flask, HTML, CSS, ROS",
    time: "2021",
    status: "Complete",
    short:
      "A set of three browser-controlled multi-robot operation scenarios in simulation.",
    images: [],
    long: "A set of three robot control scenarios for user studies. Each scenario leverages a unique aspect of multi-agent control: surveillance, networking, and teleoperation. Users control robots via their webbrowser via a select-and-click waypoint interface, and have visual access to robot camera feeds and an overhead map. On the backend, the webbrowser connects to a ROS-enabled server that controls the robots via the WeBots simulator. This project does not yet have a public-facing repository, please contact if you would like to use it.",
  },
  {
    name: "Suite of Cognitive Skill Tests",
    github: "https://github.com/GT-RAIL",
    research: "true",
    tools: "Python, Flask, HTML, CSS",
    time: "2020-2021",
    status: "Complete",
    short:
      "A set of three short, simple, online tests to measure user cognitive skills.",
    long: "A set of three cognitive skill tests for user studies. The tests are based on cognitive science literature, conducted via a browser, and evaluate a user's current capacity for <i>situational awareness</i>, <i>multi-object tracking</i>, and <i>network inference</i>. The tests are designed to be short, abstracted, and visually appealing.",
  },
  {
    name: "FirstGlance",
    github: "https://github.com/jackkolb/primafacia",
    hackathon: "true",
    tools: "Python, Flask, HTML, CSS, SocketIO, Firebase, OpenCV",
    time: "Biohack 2019",
    status: "Complete",
    short:
      "A seamless patient checkup system, using facial recognition authentication.",
    images: ["img/primafacia_1.png", "img/primafacia_4.png"],
    long: "PrimaFacia is designed to innovate medical records through a clean, sleek interface. PrimaFacia incorporates three major aspects of general medical checkups: authentication and verification of doctors, patient reception, and checkup room management Patients sign into the systemm and are assigned to a queue; a process moves patients from the queue into open appointment rooms; doctors are recognized as they enter the room, prompting the retrieval of patient medical recod. All this through a UX-focused design.",
  },
  {
    name: "Fire Watch",
    github: "https://github.com/jackkolb/firewatch",
    hackathon: "true",
    tools: "Python, Flask, HTML, CSS",
    time: "HackUCI 2019",
    status: "Complete",
    short: "Uses machine learning to predict fire risk throughout California.",
    images: ["img/firewatch_1.png", "img/firewatch_2.png"],
    long: "Developed as an opportunity to learn basic machine learning, Fire Watch uses linear algebra and 400,000 data points of California's vegetation, precipitation, and fire history to predict the locations of fires across California.",
  },
  {
    name: "Syncopate",
    github: "https://github.com/jackkolb/syncopate",
    tools: "Python, Flask, Bash",
    time: "2019",
    status: "In Progress",
    short:
      "Load balances and manages projects across a scalable network of devices.",
    images: [],
    long: "Syncopate allows for distributing many projects across a number of computers. Nodes (the devices) register themselves with a centrally hosted Manager, which gives the Nodes projects as per their available resources and reassigns projects when Nodes go offline. A human Controller is able to see and manage the Nodes' project statuses via the Manager. Syncopates aims to make hosting many time-persistent projects simple!",
  },
  {
    name: "kolb.dev",
    github: "https://kolb.dev",
    tools: "PHP, Golang",
    time: "2018 - present",
    status: "Continual Progress",
    short: "Small web projects worth hosting.",
    images: [],
    long: "kolb.dev hosts my small projects and APIs. Since no one really knows about them I keep all resources open for public use. This collection will be added to as more are created (and my Google Cloud usage stays at $0.05/month)!",
  },
  {
    name: "Littlebox",
    github: "https://github.com/jackkolb/littlebox",
    tools: "C++, Boost",
    time: "Early 2018",
    status: "In Progress",
    short: "A cross-platform, remote-accessed file server.",
    images: ["img/littlebox_1.png"],
    long: "Littlebox is a TCP/IP file server (and client) written in C++ using the boost::asio library. It supports three functions: push (add a file to the server), pull (retrieve a file from the server), and delete (delete a file from the server), however other functions can be built using these three. The idea is to make the server as simple and secure as possible -- separate passwords for server and files, RSA to deliver symmetric keys, thorough documentation, and easy deployment.",
  },
  {
    name: "ElectionCat",
    hackathon: "true",
    github: "https://github.com/jackkolb/electioncat",
    tools: "HTML, CSS, Python, Flask, Azure",
    time: "HackTech 2018",
    status: "Complete",
    short: "A simple, beautiful, election system for student organizations.",
    images: ["img/electioncat_1.png", "img/electioncat_2.png"],
    long: "ElectionCat is made for university student organization elections. Setup is simple and hassle-free, with straightforward JSON files holding candidate and voter information. The only dependency is Python Flask (webserver framework). Deployment is painfree, just download the package, change the settings, and upload the package to Azure/Heroku/AWS. The webapp looks great on both desktop and mobile devices, and 'just works'.",
  },
  {
    name: "Blindsight",
    hackathon: "true",
    github: "https://github.com/jackkolb/blindsight",
    tools: "Python, Flask, Raspberry Pi",
    time: "Citrus Hack 2018",
    status: "Complete",
    short: "Translates your surroundings into haptic feedback.",
    images: ["img/blindsight_1.png", "img/blindsight_2.png"],
    long: "Blindsight uses a cheap oscillating range sensor mounted on a hat to create a depth field of its surroundings, activating vibration sensors corresponding to the direction and proximity of surrounding objects. This allows you to 'feel' your surroundings, allowing visually impaired people to navigate through buildings. Won 3rd place at Citrus Hack 2018.",
  },
  {
    name: "WiCon",
    github: "https://github.com/jackkolb/wicon",
    time: "Late 2017, Early 2018",
    status: "Complete",
    tools: "Python, GTK3",
    short: "A GUI WiFi manager for Linux desktops.",
    images: ["img/wicon_1.png", "img/wicon_2.png"],
    long: "WiCon comes from a personal need: a simple, straightforward, wifi connection tool for ArchLinux. It is essentially a GUI wrapper for the iw, wpa_supplicant, and dhcpcd tools, leaving the user with minimal command line work. The interface is clean and simple: the user selects the connection, presses 'Connect', and enters their login information. WiCon does its best to handle all the configuration setup.",
  },
  {
    name: "Froot",
    hackathon: "true",
    time: "CutieHack, Fall 2018",
    github: "https://github.com/jackkolb/froot",
    tools: "HTML/CSS, Javascript",
    status: "Complete",
    short: "Creates recipes using discounted grocery items.",
    images: ["img/froot_1.png", "img/froot_2.png"],
    long: "Froot finds recipes using currently discounted grocery items. It is intended for cooperation with local grocery stores (pulling from their internal databases) to help broke college students eat better, for less.",
  },
  {
    name: "GoodMorning",
    github: "https://github.com/jackkolb/goodmorning",
    time: "Early 2018",
    status: "Complete",
    tools: "Python, Tkinter, Several Web-Based APIs, Raspberry Pi",
    short: "A dynamic display of time, weather and market information.",
    images: ["img/goodmorning_1.png", "img/goodmorning_2.png"],
    long: "Using a cheap 8-inch screen and a Raspberry Pi, I wrote a 'Good Morning' display that shows the date, time, weather, and market information over a background that changes by the time and weather.",
  },
  {
    name: "Three Cups",
    hackathon: "true",
    status: "Complete",
    time: "CutieHack, Spring 2017",
    github: "https://github.com/jackkolb/threecups",
    tools: "Python, OpenCV, Raspberry Pi",
    short: "A robot that observes and tracks three identical cups.",
    images: ["img/threecups_1.png", "img/threecups_2.png"],
    long: "You probably know the game: a magician has three identical cups, one with a ball underneath. They show you the one with the ball, shuffle them thoroughly, and you need to identify the cup with the ball. This project acts as the observer, tracking the cups and showing (through turning on one of three lights) the one with the ball. It actually worked quite well, better than humans!",
  },
  {
    name: "TranSec",
    hackathon: "true",
    status: "Complete",
    github: "https://github.com/jackkolb/transec",
    time: "Enginuity Hackathon, Spring 2017",
    tools: "C++, WinSock Library",
    short: "An end-to-end encrypted file transfer program.",
    images: ["img/transec_1.png"],
    long: "TranSec transfers files between computers assuming prying eyes at all points between the sender and receiver's network cards. The code itself is highly inefficient, the encryption algorithm myself is questionable, however it was my first C++ project, it works, and I am proud of it.",
  },
];

function handleProjects() {
  removeAll();
  loadProjects();
  showBar("projects-button");
  projects_active = true;
  return;
}

function loadProjects() {
  var projects = document.createElement("div");
  projects.id = "projects";
  projects_json.forEach(function (entry) {
    var newProject = generateProject(
      entry.name,
      entry.hackathon,
      entry.research,
      entry.publication,
      entry.github,
      entry.paper,
      entry.tools,
      entry.short,
      entry.long,
    );
    projects.append(newProject);
  });
  document.body.insertBefore(projects, document.getElementById("content"));
  return;
}

function generateProject(
  project_name,
  project_hackathon,
  project_research,
  project_publication,
  project_github,
  project_paper,
  project_tools,
  project_description,
  project_description_long,
) {
  var newProject = document.createElement("div");

  var newProjectContainer = document.createElement("div");
  newProjectContainer.className = "project-container";

  var newProjectSubContainer = document.createElement("div");
  newProjectSubContainer.className = "project-subcontainer";

  var newProjectIcon = document.createElement("div");

  var newProjectEntry = document.createElement("div");
  newProjectEntry.className = "project-entry";

  var newProjectEntryTitle = document.createElement("div");
  newProjectEntryTitle.className = "project-entry-title";
  newProjectEntryTitle.innerHTML = "<b>" + project_name + "</b>";

  var projectLink = document.createElement("a");
  projectLink.setAttribute("target", "_blank");

  var newProjectEntryTools = document.createElement("div");
  newProjectEntryTools.className = "project-entry-tools";
  var tools_listing = "";
  if (project_hackathon == "true") {
    tools_listing += "<span style='color:#ff33cc'><b>[Hackathon] </b></span>";
  } else if (project_research == "true") {
    tools_listing += "<span style='color:#995533'><b>[Research] </b></span>";
  } else if (project_publication == "true") {
    tools_listing += "<span style='color:#6633cc'><b>[Publication] </b></span>";
  }
  tools_listing += "<i>" + project_tools + "</i>";
  newProjectEntryTools.innerHTML = tools_listing;

  var preSpace = document.createElement("div");
  preSpace.className = "big-space";

  var newProjectEntryDescription = document.createElement("div");
  newProjectEntryDescription.className = "project-entry-desc";
  newProjectEntryDescription.innerHTML = project_description;

  var moreLink = document.createElement("button");
  if (project_description_long && !project_paper && !project_github) {
    moreLink.setAttribute(
      "onclick",
      "learnMore(" + '"' + project_name + '"' + ")",
    );
    moreLink.innerHTML = "<i>(learn more)</i>";
  }
  moreLink.setAttribute("class", "learn-more");

  if (project_github) {
    newProjectIcon.setAttribute("id", "here");
    newProjectIcon.setAttribute("href", project_github);
    newProjectIcon.innerHTML =
      "<svg class='project-github-icon' fill='black' viewBox='0 0 48 48' width='24' height='24'><path class='st0' d='M23.928 1.15C11 1.15.514 11.638.514 24.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 0 1 2.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266-.143-12.785-10.63-23.27-23.558-23.27z' clip-rule='evenodd' fill-rule='evenodd'/></svg>";
    newProjectEntry.classList.add("project-entry-hover");
    newProjectIcon.classList.add("project-entry-hover");
  }
  if (project_paper) {
    newProjectIcon.setAttribute("id", "here");
    newProjectIcon.setAttribute("href", project_paper);
    newProjectIcon.innerHTML =
      '<svg class="project-paper-icon" style="width:24px;height:24px" viewBox="0 0 384 512"><path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"/></svg>';
    newProjectEntry.classList.add("project-entry-hover");
    newProjectIcon.classList.add("project-entry-hover");
  }

  var postSpace = document.createElement("div");
  postSpace.className = "big-space";

  var breakSpace = document.createElement("div");
  breakSpace.className = "break-space";

  newProject.append(newProjectContainer);
  newProjectContainer.append(newProjectSubContainer);
  newProjectSubContainer.append(newProjectEntry);
  newProjectEntry.append(newProjectEntryTitle);
  if (project_github || project_paper) {
    newProjectEntryTitle.append(projectLink);
    newProjectEntry.setAttribute(
      "onclick",
      "window.open('" +
        (project_paper ? project_paper : project_github ? project_github : "") +
        "', '_blank')",
    );
  }
  newProjectEntry.append(newProjectEntryTools);
  newProjectEntry.append(preSpace);
  newProjectEntry.append(newProjectEntryDescription);
  newProjectEntryDescription.append(moreLink);
  newProjectEntry.append(postSpace);
  newProjectSubContainer.append(newProjectIcon);
  newProject.append(breakSpace);

  return newProject;
}
