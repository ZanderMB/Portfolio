export function renderDescription(element, description) {
    if (Array.isArray(description)) {
        description.forEach(paragraph => {
            let newSection = document.createElement("p");
            newSection.textContent = paragraph;
            newSection.classList.add(
                "font-body",
                "text-text",
                "text-center",
                "text-lg"
            );
            element.appendChild(newSection);
        });
    } else {
        let newSection = document.createElement("section");
        newSection.textContent = description;
        newSection.classList.add(
            "font-body",
            "text-text",
            "text-lg"
        );
        element.appendChild(newSection);
    }
}