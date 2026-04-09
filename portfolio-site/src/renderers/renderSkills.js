export function renderSkills(element, skills) {
    let skillGrid = document.createElement("div");
    skillGrid.classList.add(
        "grid",
        "gap-6",
        "w-full",
        "md:grid-cols-2",
        "xl:grid-cols-3"
    );

    Object.entries(skills).forEach(([category, skillList]) => {
        let skillsCard = document.createElement("article");
        skillsCard.classList.add(
            "flex",
            "flex-col",
            "flex-wrap",
            "items-center",
            "gap-4",
            "bg-surface-card",
            "border-3",
            "border-copper",
            "rounded-lg",
            "p-4",
            "hover:-translate-y-0.5",
            "transition-transform",
            "duration-200"
        );

        let skillTitle = document.createElement("h2");
        skillTitle.textContent = category;
        skillTitle.classList.add(
            "font-display",
            "text-2xl",
            "text-text"
        );
        skillsCard.appendChild(skillTitle);

        let skillDivider = document.createElement("div");
        skillDivider.classList.add(
            "flex",
            "flex-row",
            "flex-wrap",
            "gap-1",
            "justify-center",
            "w-full"
        );
        skillsCard.appendChild(skillDivider);

        skillList.forEach(skill => {
            let skillText = document.createElement("p");
            skillText.textContent = skill;
            skillText.classList.add(
                "inline-flex",
                "px-3",
                "py-1",
                "w-fit",
                "font-body",
                "text-lg",
                "border-3",
                "border-copper-dark",
                "bg-copper",
                "rounded-full"
            );
            skillDivider.appendChild(skillText);
        });

        skillGrid.appendChild(skillsCard);
    });

    element.appendChild(skillGrid);
}