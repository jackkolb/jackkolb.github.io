// javascript functions for about tab

function handleAbout() {
	removeAll();
	document.getElementById("about").style.display = "block";
	showBar("about-button");
	about_active = true;

	// set the handler for the text hovers
	let idx = 0;
	document.querySelectorAll('a.bio-link').forEach(function(element) {
		var computedStyle = window.getComputedStyle(element);
		element.id = "link" + idx;
		let style = document.createElement("style");
		let color = computedStyle.getPropertyValue('color');
		styleText = document.createTextNode("#" + element.id + ":hover { background-color: " + color + "; color: white; padding: 0 .5rem 0 .5rem; };");
		style.appendChild(styleText);
		element.appendChild(style);
		idx++;
	});
}
