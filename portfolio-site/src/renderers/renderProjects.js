import { getRepo } from "../repoAPI.js";

export function renderProjects(element, projects) {
    // Separator
    let gridSeparator = document.createElement("hr");
    gridSeparator.classList.add(
        "border",
        "border-copper",
        "w-full",
        "my-10"
    );
    element.appendChild(gridSeparator);

    // Project Cards
    projects.forEach(async (project) => {
        let projectCard = document.createElement("article");
        projectCard.classList.add(
            "flex",
            "flex-col",
            "bg-surface-card",
            "border-3",
            "border-copper",
            "rounded-lg",
            "p-6",
            "gap-4",
            "hover:-translate-y-0.5",
            "transition-transform",
            "duration-200"
        );

        let projectTitle = document.createElement("h3");
        projectTitle.textContent = project.name;
        projectTitle.classList.add(
            "font-display",
            "text-xl",
            "self-center"
        );

        let projectStack = document.createElement("p");
        projectStack.textContent = `Project Stack: ${project.stack}`;
        projectStack.classList.add(
            "font-body",
            "text-lg"
        );

        let projectDesc = document.createElement("p");
        projectDesc.textContent = project.description;
        projectDesc.classList.add(
            "font-body",
            "text-lg"
        );

        let projectLink = document.createElement("a");
        projectLink.classList.add(
            "font-body",
            "text-copper",
            "text-lg"
        );

        let projectAPI = document.createElement("p");
        projectAPI.classList.add(
            "font-body",
            "text-lg"
        );

        try {
            if (project.GithubAPI === "") {
                projectLink.textContent = "No Repository Linked";
                projectAPI.textContent = "No Repository Linked";
            } else {
                const repoData = await getRepo(project.GithubAPI);
                projectLink.href = repoData.html_url;
                projectLink.textContent = repoData.html_url;
                projectLink.target = "_blank";
                projectLink.rel = "noopener noreferrer";
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
            "border-3",
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