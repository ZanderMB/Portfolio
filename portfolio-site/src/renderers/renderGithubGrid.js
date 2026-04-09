import { getUserRepos } from "../repoAPI.js";

export function renderGithubGrid(element, githubGrid) {
    let gridTitle = document.createElement("h2");
    gridTitle.textContent = githubGrid.title;
    gridTitle.classList.add(
        "font-display",
        "text-2xl",
        "text-text",
        "self-start"
    );

    let statMessage = document.createElement("p");
    statMessage.textContent = "- Loading Repos -";
    statMessage.classList.add(
        "font-body",
        "text-text-muted",
        "self-start"
    );

    let repoGrid = document.createElement("div");
    repoGrid.classList.add(
        "grid",
        "gap-6",
        "w-full",
        "md:grid-cols-2",
        "xl:grid-cols-3"
    );

    element.appendChild(gridTitle);
    element.appendChild(statMessage);
    element.appendChild(repoGrid);

    getUserRepos()
        .then(repos => {
            statMessage.textContent = `${repos.length} repositories found.`;
            repos.slice(0, 6).forEach(repo => {
                let repoGrCard = document.createElement("article");
                repoGrCard.classList.add(
                    "flex",
                    "flex-col",
                    "gap-2",
                    "bg-surface-card",
                    "border-3",
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
                repoDesc.textContent = repo.description;
                repoDesc.classList.add(
                    "font-body",
                    "text-text-muted",
                    "text-sm"
                );

                let repoLang = document.createElement("p");
                repoLang.textContent = `Languages: ${repo.language ?? "Not Specified"}`;
                repoLang.classList.add(
                    "font-body",
                    "text-text-muted",
                    "text-xs"
                );

                let repoLink = document.createElement("a");
                repoLink.href = repo.html_url;
                repoLink.textContent = "View Repo ->";
                repoLink.target = "_blank";
                repoLink.rel = "noopener noreferrer";
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
            statMessage.textContent = "Couldn't load repositories. Please create a bug report on GitHub or try again.";
        });
}