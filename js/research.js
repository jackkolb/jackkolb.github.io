// javascript functions for research tab


function handleResearch() {
	removeAll();
	loadResearch();
	showBar("research-button");
	research_active = true;
	return;
}

function loadResearch() {
	fetch('json/research.json')
		.then(response => response.text())
	 	.then(function(text) {
	 		var mydata = JSON.parse(text);	
			var research = document.createElement("div");
			research.id = "research";

			mydata["research"].forEach(function(entry) {
				var newResearch = generateResearch(entry.name, entry.authors, entry.hackathon, entry.research, entry.publication, entry.github, entry.paper, entry.tools, entry.short, entry.long);
  				research.append(newResearch);
			});
			document.body.insertBefore(research, document.getElementById("content"));
		 });
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


function generateResearch(research_name, research_authors, research_hackathon, research_research, research_conference, research_github, research_paper, research_tools, research_description, research_description_long) {
	var newResearch = document.createElement("div");

	var newResearchContainer = document.createElement("div");
	newResearchContainer.className = "research-container";

	var newResearchSubContainer = document.createElement("div");
	newResearchSubContainer.className = "research-subcontainer";

	var newResearchIcon = document.createElement("div");

	var newResearchEntry = document.createElement("div");
	newResearchEntry.className = "research-entry";

	var newResearchEntryTitle = document.createElement("div");
	newResearchEntryTitle.className = "research-entry-title";
	newResearchEntryTitle.innerHTML = "<b>" + research_name + "</b>";

	var researchLink = document.createElement("a");
	researchLink.setAttribute("target", "_blank");

	var newResearchEntryTools = document.createElement("div");
	newResearchEntryTools.className = "research-entry-tools";
	var tools_listing = "";
	if (research_hackathon == "true") {
		tools_listing += "<span style='color:#ff33cc'><b>[Hackathon] </b></span>"
	}
	else if (research_research == "true") {
		tools_listing += "<span style='color:#995533'><b>[Research] </b></span>"
	}
	else if (research_conference == "true") {
		tools_listing += "<span style='color:#6633cc'><b>[Publication] </b></span>"
	}
	tools_listing += "<i>" + research_tools + "</i>";
	newResearchEntryTools.innerHTML = tools_listing;

	var preSpace = document.createElement("div");
	preSpace.className = "big-space";

	var newResearchEntryAuthors = document.createElement("div");
	newResearchEntryAuthors.className = "research-entry-tools";
	newResearchEntryAuthors.innerHTML = research_authors;

	var preSpace2 = document.createElement("div");
	preSpace2.className = "big-space";

	var newResearchEntryDescription = document.createElement("div");
	newResearchEntryDescription.className = "research-entry-desc";
	newResearchEntryDescription.innerHTML = research_description;

	var moreLink = document.createElement("button");
	if (research_description_long && !research_paper && !research_github) {
		moreLink.setAttribute("onclick", "learnMore(" + '"' + research_name + '"' + ")");
		moreLink.innerHTML = "<i>(learn more)</i>";
	}
	moreLink.setAttribute("class", "learn-more");


	if (research_github) {
		newResearchIcon.setAttribute("id", "here");	
		newResearchIcon.setAttribute("href", research_github);	
		newResearchIcon.innerHTML = "<svg class='research-github-icon' fill='black' viewBox='0 0 48 48' width='24' height='24'><path class='st0' d='M23.928 1.15C11 1.15.514 11.638.514 24.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 0 1 2.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266-.143-12.785-10.63-23.27-23.558-23.27z' clip-rule='evenodd' fill-rule='evenodd'/></svg>"
		newResearchEntry.classList.add("research-entry-hover")
		newResearchIcon.classList.add("research-entry-hover")
	}
	if (research_paper) {
		newResearchIcon.setAttribute("id", "here");
		newResearchIcon.setAttribute("href", research_paper);	
		newResearchIcon.innerHTML = '<svg class="research-paper-icon" style="width:24px;height:24px" viewBox="0 0 384 512"><path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"/></svg>'
		newResearchEntry.classList.add("research-entry-hover")
		newResearchIcon.classList.add("research-entry-hover")
	}


	var postSpace = document.createElement("div");
	postSpace.className = "big-space";

	var breakSpace = document.createElement("div");
	breakSpace.className = "break-space";

	newResearch.append(newResearchContainer);
		newResearchContainer.append(newResearchSubContainer);
			newResearchSubContainer.append(newResearchEntry);
				newResearchEntry.append(newResearchEntryTitle);
				if (research_github || research_paper) {
					newResearchEntryTitle.append(researchLink);
					newResearchEntry.setAttribute("onclick", "window.open('" + (research_paper ? research_paper : research_github ? research_github : "") + "', '_blank')");
				}
				newResearchEntry.append(newResearchEntryTools);
				newResearchEntry.append(preSpace);
				newResearchEntry.append(newResearchEntryAuthors);
				newResearchEntry.append(preSpace);
				newResearchEntry.append(newResearchEntryDescription);
					newResearchEntryDescription.append(moreLink);
				newResearchEntry.append(postSpace);
			newResearchSubContainer.append(newResearchIcon);
	newResearch.append(breakSpace);

	return newResearch;
}
