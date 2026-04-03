// javascript functions for projects tab

function handleProjects() {
  removeAll();
  document.getElementById("projects").style.display = "block";
  showBar("projects-button");
  projects_active = true;
}
