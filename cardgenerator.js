const CATEGORIES = { perso: "Perso", pro: "Pro" };

// gestion des caractères spéciaux
const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));

function renderResource(resource) {
  const { label, url } = typeof resource === "string" ? { label: resource } : resource;
  return url
    ? `<li><a class="project-card__resource" href="${escapeHTML(url)}" target="_blank" rel="noopener">${escapeHTML(label)}</a></li>`
    : `<li><span class="project-card__resource">${escapeHTML(label)}</span></li>`;
}

function renderDetails(title, content) {
  if (!content) return "";
  return `
    <details class="project-card__details">
      <summary>${escapeHTML(title)}</summary>
      <div class="project-card__content">${content}</div>
    </details>`;
}

/**
 * @param {Object}   project
 * @param {string}   project.name
 * @param {"perso"|"pro"} [project.category="perso"]
 * @param {string}   project.tech
 * @param {number|string} project.year
 * @param {string[]} [project.keywords]
 * @param {string|string[]} [project.description]
 * @param {Array<string|{label:string,url?:string}>} [project.resources]
 * @param {string|{src:string,alt?:string}} [project.image]
 * @returns {string}
 */
export function projectCard({
  name,
  category = "perso",
  tech,
  year,
  keywords = [],
  description,
  resources = [],
  image,
}) {
  const categoryKey = category in CATEGORIES ? category : "perso";

  const img = typeof image === "string" ? { src: image } : image;
  const imageHTML = img?.src
    ? `<img src="${escapeHTML(img.src)}"
            alt="${escapeHTML(img.alt ?? `Illustration du projet ${name}`)}"
            width="400" height="400" loading="lazy">`
    : "";

  const keywordsHTML = keywords.length
    ? `<ul class="project-card__keywords">
        ${keywords.map((k) => `<li>${escapeHTML(k)}</li>`).join("")}
      </ul>`
    : "";

  const descriptionHTML = [].concat(description ?? [])
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");

  const resourcesHTML = resources.length
    ? `<ul class="project-card__resources">${resources.map(renderResource).join("")}</ul>`
    : "";

  return `
  <article class="project-card">
    <div class="project-card__media">${imageHTML}</div>

    <div class="project-card__info">
      <div class="project-card__meta">
        <span class="project-card__category" data-category="${categoryKey}">${CATEGORIES[categoryKey]}</span>
        <span class="project-card__year">${escapeHTML(year)}</span>
      </div>
      <h3 class="project-card__title">${escapeHTML(name)}</h3>
      <p class="project-card__tech">${escapeHTML(tech)}</p>
      ${keywordsHTML}
    </div>

    ${renderDetails("Description", descriptionHTML)}
    ${renderDetails("Ressources utilisées", resourcesHTML)}
  </article>`;
}

export function renderProjects(container, projects) {
  container.innerHTML = projects.map(projectCard).join("");
}