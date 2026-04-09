import { homePanel, aboutPanel, projectPanel, contactPanel } from "./panels/index.js";
import { setCurrentPanel, currentPanel } from "./state.js";
import { getRepo, getUserRepos } from "./repoAPI.js"
import { renderTitle, renderRole, renderDescription, renderCTA, renderSkills, renderGithubGrid, renderProjects, renderLinks, renderAside } from "./renderers/index.js";


// navBar stuff
const navBar = document.getElementById("navigation");

// Panel Storage
export const panels = [
  { element: document.getElementById("home"), content: homePanel},
  { element: document.getElementById("about"), content: aboutPanel},
  { element: document.getElementById("project"), content: projectPanel},
  { element: document.getElementById("contact"), content: contactPanel}
];

// Rendering Function
export function renderPanel({ element, content }) {
    element.classList.remove("hidden");
    element.classList.add("flex", "flex-col", "gap-6", "items-center", "justify-center");
    let target = element;

    if (content.aside) {
        let homeContainer = document.createElement("div");
        homeContainer.classList.add(
            "grid",
            "grid-cols-1",
            "md:grid-cols-2", 
            "justify-center",
            "items-center",
            "gap-6",
            "w-full", 
            "max-w-4xl"
        );

        let leftCol = document.createElement("div");
        leftCol.classList.add(
            "flex",
            "flex-col",
            "items-center",
            "gap-6"
        );

        let rightCol = document.createElement("div");
        rightCol.classList.add(
            "flex",
            "items-center",
            "justify-center",
            "aspect-3/4",
            "max-h-100"
        );

        homeContainer.appendChild(leftCol);
        homeContainer.appendChild(rightCol);
        element.appendChild(homeContainer);

        target = leftCol;
        renderAside(rightCol, content.aside);
    }


    if (content.title) {
        renderTitle(target, content.title);
    }
    if (content.role) {
        renderRole(target, content.role);
    }
    if (content.description) {
        renderDescription(target, content.description);
    }
    if (content.homeCTA) {
        renderCTA(target, content.homeCTA);
    }
    if (content.skills) {
        renderSkills(target, content.skills);
    }
    if (content.githubGrid) {
        renderGithubGrid(target, content.githubGrid);
    }
    if (content.projects) {
        renderProjects(target, content.projects);
    }
    if (content.github || content.linkedin) {
        renderLinks(target, content.github, content.linkedin);
    }
}

// Panel Clear Function
function _clearPanel(){
    panels.forEach(panel => {
        panel.element.innerHTML = ""
        panel.element.classList.add("hidden"); 
    });
};

// Panel Set/Swap Fucntion
export function swapPanel(index){
    // Clearing State
    _clearPanel();
    // Setting State
    setCurrentPanel(index);
    // Saving State
    sessionStorage.setItem('currentPanel', currentPanel);
    // Passs State to Renderer
    panels[index].element.classList.remove("hidden");
    renderPanel(panels[index]);
};

// Event Listeners
navBar.addEventListener("click", (e) => {
  if (e.target.dataset.panel != undefined) {
    const index = e.target.dataset.panel
    swapPanel(parseInt(index))
  }
})