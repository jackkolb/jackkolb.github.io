// utility functions


function removeAll() {
	removeResearch();
	removeProjects();
	removeProjectPage();
	removeAbout();
	return;
}

function removeResearch() {
	if (research_active) {
		var element = document.getElementById("research");
		element.parentNode.removeChild(element);
		hideBar("research-button");
		research_active = false;
	}
	return;
}

function removeProjects() {
	if (projects_active) {
		var element = document.getElementById("projects");
		element.parentNode.removeChild(element);
		hideBar("projects-button");
		projects_active = false;
	}
	return;
}

function removeProjectPage() {
	if (projectpage_active) {
		var element = document.getElementById("project-page");
		element.parentNode.removeChild(element);
		projectpage_active = false;
	}
	return;
}

function removeAbout() {
    if (about_active) {
        document.getElementById("about").style.display = "none";
        about_active = false;
        hideBar("about-button");
    }
    return;
}

function showBar(name) {
	var color = "green";
	if (name == "about-button") {
		color = "#4477ff";
	}
	if (name == "research-button") {
		color = "darkmagenta";
	}
	if (name == "projects-button") {
		color = "#f4c15a";
	}
	document.getElementById(name).setAttribute("style", "margin: 10px; border-bottom: 3px solid " + color);
	return;
}

function hideBar(name) {
	document.getElementById(name).setAttribute("style", "margin: 10px");
	return;
}

function switchColorMode() {
	let whiteTextColor = "whitesmoke"
	if (!(document.getElementById("about-button").classList.contains("dark"))) {
		document.body.classList.add('dark-body');

		document.getElementById("content").classList.add('dark');

		document.getElementById("name-title").classList.add('dark');
		document.getElementById("welcome-title").classList.add('dark');
		document.getElementById("github-icon").setAttribute("fill", whiteTextColor);

		icons = document.getElementsByClassName("project-github-icon");
		for (i=0; i<icons.length-1; i++) {
			icons[i].setAttribute("fill", whiteTextColor);
		}

		icons = document.getElementsByClassName("project-paper-icon");
		for (i=0; i<icons.length-1; i++) {
			icons[i].setAttribute("fill", whiteTextColor);
		}
		
		descs = document.getElementsByClassName("project-entry-desc");
		for (i=0; i<descs.length-1; i++) {
			descs[i].setAttribute("style", "color: " + whiteTextColor);
		}

		document.getElementById("about-button").classList.add('dark');
		document.getElementById("projects-button").classList.add('dark');
		document.getElementById("research-button").classList.add('dark');
		document.getElementById("cv-button").classList.add('dark');

		document.getElementById("apple-text").setAttribute("style", "color: white");
	}
	else {
		document.body.classList.remove('dark-body');

		document.getElementById("content").classList.add('dark');

		document.getElementById("name-title").classList.remove('dark');
		document.getElementById("welcome-title").classList.remove('dark');
		document.getElementById("github-icon").setAttribute("fill", "black");

		icons = document.getElementsByClassName("project-github-icon");
		for (i=0; i<icons.length-1; i++) {
			icons[i].setAttribute("fill", "black");
		}

		descs = document.getElementsByClassName("project-entry-desc");
		for (i=0; i<descs.length-1; i++) {
			descs[i].setAttribute("style", "color: #253f3f");
		}

		document.getElementById("about-button").classList.remove('dark');
		document.getElementById("projects-button").classList.remove('dark');
		document.getElementById("research-button").classList.remove('dark');
		document.getElementById("cv-button").classList.remove('dark');

		document.getElementById("apple-text").setAttribute("style", "color: #000000");
	}
}
