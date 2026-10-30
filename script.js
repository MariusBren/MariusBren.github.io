import { projects } from "./projects.js";
import { renderProjects } from "./cardgenerator.js";

const list = document.querySelector("#projects-list");
const filters = document.querySelector("#project-filters");

function filterProjects(filter) {
  if (filter === "all") return projects;
  return projects.filter((project) => (project.category ?? "perso") === filter);
}

function updateProjects() {
  const htmlfilter = filters.querySelector('input[name="category"]:checked').value
  const visibleProjects = filterProjects(htmlfilter);

  if (visibleProjects.length > 0) {
    renderProjects(list, visibleProjects);
  } else {
    list.innerHTML = '<p class="projects-empty">Aucun projet dans cette catégorie pour le moment.</p>';
  }
}

if (list && filters) {
  filters.addEventListener("change", updateProjects);
  updateProjects();
}