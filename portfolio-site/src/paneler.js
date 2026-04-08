import { homePanel, aboutPanel, projectPanel, contactPanel } from "./panels/index.js";
import { setCurrentPanel, currentPanel } from "./state.js";
import { getRepo, getUserRepos } from "./repoAPI.js"


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
export function renderPanel({element, content}){
    // console.log(element, content) //Debugging
    element.classList.remove("hidden");
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
   
    if (content.role) {
    let myRole = document.createElement("p");
    myRole.textContent = content.role;
    myRole.classList.add(
        "font-body",
        "text-copper-light",
        "text-lg",
        "tracking-wide"
    );
    element.appendChild(myRole);
    }

    if (content.description) {
        if (Array.isArray(content.description)) {
            content.description.forEach(paragaraph => {
                let newSection = document.createElement("p");
                newSection.textContent = paragaraph;
                newSection.classList.add(
                    "font-body",
                    "text-text",
                    "text-lg"
                );
                element.appendChild(newSection);
            });
        } else {
            let newSection = document.createElement("section")
            newSection.textContent = content.description;
            newSection.classList.add(
                "font-body", 
                "text-text",
                "text-lg"
            )
            element.appendChild(newSection);
        }
    }

    if (content.homeCTA) {
        let cta = document.createElement("button");
        cta.textContent = content.homeCTA;
        cta.dataset.panel = "2";
        cta.classList.add(
            "inline-flex", 
            "items-center", 
            "rounded-lg",
            "font-body", 
            "bg-copper", 
            "text-text", 
            "px-6",
            "py-3",
            "hover:bg-copper-light", 
            "hover:text-background",
            "transition", 
            "cursor-pointer"
        );
    cta.addEventListener("click", () => swapPanel(2));
    element.appendChild(cta)
    }

    // About Me, Skill Card
    if (content.skills) {
        let skillCard = document.createElement("article")
            skillCard.classList.add(
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
            );
        
        let skillTitle = document.createElement("h2");
        skillTitle.textContent = "My Skills"
        skillTitle.classList.add(
            "font-display",
            "text-2xl",
            "text-text",
            "self-start"
        )
        skillCard.appendChild(skillTitle)

        content.skills.forEach(skill => {
            let skillText = document.createElement("p");
            skillText.textContent = skill;
            skillText.classList = (
                "text-body",
                "text-lg"
            );
            skillCard.appendChild(skillText);
        });

        element.appendChild(skillCard);
    }

        // Github Repo Grid
    if (content.githubGrid) {
        // Pseudo-Header
        let gridTitle = document.createElement("h2");
        gridTitle.textContent = content.githubGrid.title;
        gridTitle.classList.add(
            "font-display",
            "text-2xl",
            "text-text",
            "self-start"
        );


        // API Fetching Status Messagee
        let statMessage = document.createElement("p");
        statMessage.textContent = "- Loading Repos -";
        statMessage.classList.add(
            "font-body",
            "text-text-muted",
            "self-start"
        );

        // Repo Grid
        let repoGrid = document.createElement("div");
        repoGrid.classList.add(
            "grid",
            "gap-6",
            "w-full",
            "md:grid-cols-2",
            "xl:grid-cols-3",
        );

        // Appending
        element.appendChild(gridTitle)
        element.appendChild(statMessage);
        element.appendChild(repoGrid);
        
        // Fetching and Rendering to Repo Grid
        getUserRepos(content.githubGrid)
            .then(repos => {
                statMessage.textContent = `${repos.length} repositories found.`;
                repos.slice(0, 6).forEach(repo => {
                    let repoGrCard = document.createElement("article");
                    repoGrCard.classList.add(
                        "flex",
                        "flex-col",
                        "gap-2",
                        "bg-surface-card",
                        "border",
                        "border-copper",
                        "rounded-lg",
                        "p-6",
                        "hover:-translate-y-0.5",
                        "transition-transform",
                        "duration-200"
                    );

                    let repoName = document.createElement("h3");
                    repoName.textContent = repo.name;
                    repoName.classList.add(
                        "font-display",
                        "text-xl",
                        "text-text"
                    );

                    let repoDesc = document.createElement("p");
                    repoName.textContent = repo.name;
                    repoName.classList.add(
                        "font-display",
                        "text-xl",
                        "text-text"
                    );

                    let repoLang = document.createElement("p")
                    repoLang.textContent = `Languages: ${repo.language ?? "Not Specified"}`
                    repoLang.classList.add(
                        "font-body",
                        "text-text-muted",
                        "text-xs"
                    );

                    let repoLink = document.createElement("a");
                    repoLink.href = repo.html_url;
                    repoLink.textContent = "View Repo ->";
                    repoLink.target = "_blank";
                    repoLink.rel = "no opener, no referrer"
                    repoLink.classList.add(
                        "font-body",
                        "text-copper",
                        "hover:text-copper-light",
                        "transition",
                        "text-sm"
                    );
                
                repoGrCard.appendChild(repoName);
                repoGrCard.appendChild(repoDesc);
                repoGrCard.appendChild(repoLang);
                repoGrCard.appendChild(repoLink);
                repoGrid.appendChild(repoGrCard);
                });
            })
            .catch(() => {
                statMessage.textContent = "Couldn't load repositories, create bug report on Github please, or try again."
            });
    }

    if (content.projects) {
        let gridSeperator = document.createElement("hr")
        gridSeperator.classList.add(
            "border",
            "border-copper",
            "w-full",
            "my-10"
        );
        element.appendChild(gridSeperator);
    }


    // Project Panel Specific Stuff
    if (content.projects) {
        content.projects.forEach(async (project) => {
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
                "text.body",
                "text-lg"
            )

            let projectDesc = document.createElement("p")
            projectDesc.textContent = project.description
            projectDesc.classList.add(
                "text.body",
                "border-b",
                "text-lg" 
            )

            let projectLink = document.createElement("a")
            projectLink.classList.add(
                "text.body",
                "text-copper",
                "text-lg"
            )

            let projectAPI = document.createElement("p")
            projectAPI.classList.add(
                "text.body",
                "text-lg"
            )

            try {
                    if (project.GithubAPI === "") {
                        projectLink.textContent = "No Repository Linked";
                        projectAPI.textContent = "No Repository Linked";
                } else {
                    const repoData = await getRepo(project.GithubAPI);
                    //console.log(repoData); // Debugging
                    projectLink.href = repoData.html_url;
                    projectLink.textContent = repoData.html_url;
                    projectAPI.textContent = repoData.full_name;
                }
            } catch (err) {
                    projectLink.textContent = project.link || "No Repository Linked";
                    projectAPI.textContent = project.name || "No Repository Linked";
            }

            let projectImg = document.createElement("img");
            projectImg.src = project.img;
            projectImg.alt = project.name;
            projectImg.classList.add(
                "rounded-lg",
                "w-full",
                "object-cover",
                "border",
                "border-copper/30"
            );


            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectStack);
            projectCard.appendChild(projectDesc);
            projectCard.appendChild(projectLink);
            projectCard.appendChild(projectAPI);
            projectCard.appendChild(projectImg);

            element.appendChild(projectCard);
        });
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