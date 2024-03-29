// javascript functions for about tab

// handles the 
function handleAbout() {
	removeAll();
	loadAbout();
	createTimeline();
	showBar("about-button");
	about_active = true;

	// set the handler for the text hovers
	let idx = 0
    document.querySelectorAll('a.bio-link').forEach(function(element) {
		var computedStyle = window.getComputedStyle(element);
		element.id = "link" + idx
		let style = document.createElement("style")
		let color = computedStyle.getPropertyValue('color')
		let backgroundColor = computedStyle.getPropertyValue('background-color')
		styleText = document.createTextNode("#" + element.id + ":hover { background-color: " + color + "; color: white; padding: 0 .5rem 0 .5rem; };")
        style.appendChild(styleText)
		element.appendChild(style)
		idx++
    })

	// set the handler for the icon link hovers
	idx = 0
    document.querySelectorAll('a.bio-link').forEach(function(element) {
		var computedStyle = window.getComputedStyle(element);
		element.id = "link" + idx
		let style = document.createElement("style")
		let color = computedStyle.getPropertyValue('color')
		let backgroundColor = computedStyle.getPropertyValue('background-color')
		styleText = document.createTextNode("#" + element.id + ":hover { background-color: " + color + "; color: white; padding: 0 .5rem 0 .5rem; };")
        style.appendChild(styleText)
		element.appendChild(style)
		idx++
    })

	return;
}


function loadAbout() {
	var majenta_color = "<span style='color:#ff33cc'>";
	var green_color = "<span style='color:#4ac44a'>";
	var gold_color = "<span style='color:#f4c15a'>";
	var tech_gold_color = "<span style='color:#b3a369'>";
	var red_color = "<span style='color:#dd0000'>";
	var blue_color = "<span style='color:#4477ff'>";
	var slate_color = "<span style='color:darkslateblue'>";

	var link_ucr = "<a href='https://ucr.edu' target='_blank'>";
	var link_ucr_me = "<a href='https://www.me.ucr.edu' target='_blank'>";

	var link_robosub = "<a href='https://robosub.ucr.edu' target='_blank'>";
	var link_gatech = "<a href='https://gatech.edu' target='_blank'>";
	var link_gatech_robotics = "<a href='https://robotics.gatech.edu' target='_blank'>";
	var link_chernova = "<a href='https://www.cc.gatech.edu/~chernova' target='_blank'>";
	var link_robograds = "<a href='https://robograds.gatech.edu' target='_blank'>"
	var link_rail = "<a href='https://rail.gatech.edu' target='_blank'>"

	var link_reslife = "<a href='https://housing.ucr.edu/residential-life' target='_blank'>";
	var link_ieee = "<a href='https://ieeeucr.org' target='_blank'>";
	var link_asme = "<a href='https://asmeucr.com' target='_blank'>";
	var link_acm = "<a href='https://acmucr.org' target='_blank'>";
	var link_nrhh = "<a href='https://nrhh.ucr.edu/home.html' target='_blank'>";
	var link_honors = "<a href='https://honors.ucr.edu' target='_blank'>";

	document.getElementById("about").style.display = "block";
	
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


function generateOrgs() {
	var orgs = document.createElement("div");
	fetch('json/orgs.json')
	.then(response => response.text())
	.then(function(text) {
		var mydata = JSON.parse(text);
		mydata["orgs"].forEach(function(entry) {
			var org = document.createElement("a");
				org.className = "org-about";
				org.setAttribute("href", entry.link);
				org.setAttribute("target", "_blank");
				org.innerHTML = "[" + entry.title + "] - " + "<span style='color:grey; font-size:11pt; vertical-align:middle'>" + entry.name + "</span><br>";
			orgs.append(org);
		});
	});
	return orgs;
}
