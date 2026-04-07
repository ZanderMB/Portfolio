import { homePanel, aboutPanel, projectPanel, contactPanel } from "./panels/index.js";
import { setCurrentPanel, currentPanel } from "./state.js";
import { getRepo } from "./repoAPI.js"


// navBar stuff
const navBar = document.getElementById("navigation");

// currentPanel / Panel Storage Iterator


// Panel Storage
export const panels = [
  { element: document.getElementById("home"), content: homePanel},
  { element: document.getElementById("about"), content: aboutPanel},
  { element: document.getElementById("project"), content: projectPanel},
  { element: document.getElementById("contact"), content: contactPanel}
];

// Rendering Function
export function renderPanel({element, content}){
    // console.log(element, content) //Debugging
    element.classList.add('flex', 'flex-col', 'gap-6', "items-center");

    if (content.title) {
    let newTitle = document.createElement("h1");
    newTitle.textContent = content.title;
    newTitle.classList.add(
        "font-display", 
        "text-4xl", 
        "text-text"
    )
    element.appendChild(newTitle);
    }
   
    if (content.description) {
    let newSection = document.createElement("section")
    newSection.textContent = content.description;
    newSection.classList.add(
        "font-body", 
        "text-text"
    )
    element.appendChild(newSection);
    }

    if (content.projects) {
        content.projects.forEach(project => {
            let projectCard = document.createElement("article")
            projectCard.classList.add(
                "flex",
                "flex-col",
                "bg-surface-card", 
                "border",
                "border-copper",
                "rounded-lg",
                "p-6",
                "gap-2",
                "hover:-translate-y-0.5",
                "transition-transform",
                "duration-200",
            )

            let projectTitle = document.createElement("h3")
            projectTitle.textContent = project.name
            projectTitle.classList.add(
                "text-display",
                "text-xl",
                "self-center"
            )

            let projectStack = document.createElement("p")
            projectStack.textContent = `Project Stack: ${project.stack}`
            projectStack.classList.add(
                "text.body"
            )

            let projectDesc = document.createElement("p")
            projectDesc.textContent = project.description
            projectDesc.classList.add(
                "text.body"
            )

            let projectLink = document.createElement("a")
            projectLink.textContent = project.link
            projectLink.classList.add(
                "text.body"
            )

            let projectAPI = document.createElement("p")
            repoData = project.GithubAPI
            getRepo(repoName);
            projectAPI.textContent = url

            projectCard.appendChild(projectTitle)
            projectCard.appendChild(projectStack)
            projectCard.appendChild(projectDesc)
            projectCard.appendChild(projectLink)

            element.appendChild(projectCard);
        })
    }

    if (content.github) {
        let github = document.createElement("a");
        github.href = "insert github link here later"
        element.appendChild(github);
    }

    if (content.linkedin) {
        let linkedin = document.createElement("a");
        linkedin.href = "insert linkedinn link here later"
        element.appendChild(linkedin);
    }

};

// Panel Clear Function
function _clearPanel(){
    panels.forEach(panel => panel.element.innerHTML = "");
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
    renderPanel(panels[index]);
};

// Event Listeners
navBar.addEventListener("click", (e) => {
  if (e.target.dataset.panel != undefined) {
    const index = e.target.dataset.panel
    swapPanel(parseInt(index))
  }
})