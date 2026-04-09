export function renderTitle(element, title) {
    let newTitle = document.createElement("h1");
    newTitle.textContent = title;
    newTitle.classList.add(
        "font-display",
        "text-4xl",
        "text-text"
    );
    element.appendChild(newTitle);
}