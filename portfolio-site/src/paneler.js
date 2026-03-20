import { homePanel, aboutPanel, projectPanel, contactPanel } from "./panels/index.js";
import { setCurrentPanel, currentPanel } from "./state.js";


// navBar stuff
const navBar = document.getElementById("navigation");
const navBtn = document.querySelector("button")

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

    if (content.title) {
    let newTitle = document.createElement("h1");
    newTitle.textContent = content.title;
    element.appendChild(newTitle);
    }
   
    if (content.description) {
    let newSection = document.createElement("section")
    newSection.textContent = content.description;
    element.appendChild(newSection);
    }

    if (content.projects) {
        content.projects.forEach(project => {
            let projectCard = document.createElement("article")

            let projectTitle = document.createElement("h3")
            projectTitle.textContent = project.name

            let projectStack = document.createElement("p")
            projectStack.textContent = project.stack

            let projectDesc = document.createElement("p")
            projectDesc.textContent = project.description

            let projectLink = document.createElement("a")
            projectLink.textContent = project.link

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
    panels.forEach(panel => panel.element.innerHTML = "")
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
  if (e.target.tagName === "BUTTON") {
    const index = e.target.dataset.panel
    swapPanel(parseInt(index))
  }
})