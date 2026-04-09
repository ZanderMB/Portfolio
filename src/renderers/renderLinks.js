export function renderLinks(element, github, linkedin) {
    if (github) {
        let githubLink = document.createElement("a");
        githubLink.href = github;
        githubLink.textContent = "GitHub";
        githubLink.target = "_blank";
        githubLink.rel = "noopener noreferrer";
        githubLink.classList.add(
            "font-body",
            "text-text",
            "hover:text-copper-light",
            "transition",
            "px-3",
            "py-1",
            "w-fit",
            "text-lg",
            "border-3",
            "border-copper-dark",
            "bg-copper",
            "rounded-full"
        );
        element.appendChild(githubLink);
    }

    if (linkedin) {
        let linkedinLink = document.createElement("a");
        linkedinLink.href = linkedin;
        linkedinLink.textContent = "LinkedIn";
        linkedinLink.target = "_blank";
        linkedinLink.rel = "noopener noreferrer";
        linkedinLink.classList.add(
            "font-body",
            "text-text",
            "hover:text-copper-light",
            "transition",
            "px-3",
            "py-1",
            "w-fit",
            "text-lg",
            "border-3",
            "border-copper-dark",
            "bg-copper",
            "rounded-full"
        );
        element.appendChild(linkedinLink);
    }
}