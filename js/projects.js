const MY_GITHUB_USERNAME = "adityasai1234";

const loadingDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const projectsDiv = document.getElementById("projects-container");
document.addEventListener("DOMContentLoaded", function () {
  getMyProjects();
});
async function getMyProjects() {
  showLoading();
  hideError();
  clearProjects();

  try {
    const projects = await fetchFromGitHub(MY_GITHUB_USERNAME);
    const publicProjects = projects.filter((project) => !project.private);
    displayProjects(publicProjects);
  } catch (error) {
    console.log("Something went wrong:", error);
    showError();
  }
  hideLoading();
}
async function fetchFromGitHub(username) {
  // Using GitHub's public API endpoint - works great for public repos
  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=50&type=public`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not fetch repositories");
  }

  return await response.json();
}
function displayProjects(projects) {
  if (projects.length === 0) {
    projectsDiv.innerHTML = `
            <div class="no-projects">
                <h3>No public repositories found</h3>
                <p>You don't have any public repositories yet.</p>
            </div>
        `;
    return;
  }
  let html = "";
  for (let project of projects) {
    html += createProjectCard(project);
  }

  projectsDiv.innerHTML = html;
}
function createProjectCard(project) {
  const description = project.description || "No description available";
  const language = project.language || "";
  const stars = project.stargazers_count;
  const forks = project.forks_count;
  const lastUpdated = formatDate(project.updated_at);
  const languageSection = language
    ? `<div class="stat">
         <span class="language-dot" style="background-color: ${getLanguageColor(
           language
         )}"></span>
         ${language}
       </div>`
    : "";
  const liveDemoLink = project.homepage
    ? `<a href="${project.homepage}" target="_blank" class="project-link">Live Demo</a>`
    : "";

  return `
    <div class="project-card">
      <div class="project-header">
        <a href="${project.html_url}" target="_blank" class="project-name">
          ${project.name}
        </a>
        <span class="project-visibility">Public</span>
      </div>
      
      <p class="project-description">${description}</p>
      
      <div class="project-stats">
        ${languageSection}
        <div class="stat">⭐ ${stars}</div>
        <div class="stat">🍴 ${forks}</div>
        <div class="stat">📅 ${lastUpdated}</div>
      </div>
      
      <div class="project-links">
        <a href="${project.html_url}" target="_blank" class="project-link">
          View on GitHub
        </a>
        ${liveDemoLink}
      </div>
    </div>
  `;
}

function getLanguageColor(language) {
  const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#1572B6",
    React: "#61DAFB",
    Vue: "#4FC08D",
    Svelte: "#ff3e00",
    Go: "#00ADD8",
    Rust: "#dea584",
    PHP: "#4F5D95",
  };

  return languageColors[language] || "#586069";
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

function showLoading() {
  loadingDiv.classList.remove("hidden");
}

function hideLoading() {
  loadingDiv.classList.add("hidden");
}

function showError() {
  errorDiv.classList.remove("hidden");
}

function hideError() {
  errorDiv.classList.add("hidden");
}

function clearProjects() {
  projectsDiv.innerHTML = "";
}
// Projects loaded successfully!
